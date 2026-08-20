import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useLocale } from '../i18n/LocaleProvider'

declare global {
  interface Window {
    google?: any
    googleTranslateElementInit?: () => void
    translatePageTo?: (lang: string) => void
  }
}

const supportedLanguages = 'en,es,fr,de,pt,it,ja,zh,ar,ru'
const GOOGLE_TRANSLATE_SCRIPT_ID = 'google-translate-script'
const GT_ELEMENT_ID = 'google_translate_element'

function waitFor<T>(fn: () => T | null | undefined, timeoutMs = 8000, intervalMs = 100) {
  return new Promise<T>((resolve, reject) => {
    const start = Date.now()
    const tick = () => {
      const val = fn()
      if (val) return resolve(val)
      if (Date.now() - start >= timeoutMs) return reject(new Error('Timeout waiting for Google Translate readiness'))
      setTimeout(tick, intervalMs)
    }
    tick()
  })
}

export default function GoogleTranslate() {
  const { locale } = useLocale()
  const location = useLocation()
  const initPromiseRef = useRef<Promise<void> | null>(null)

  useEffect(() => {
    if (window.google && window.google.translate) return

    initPromiseRef.current = new Promise<void>((resolve) => {
      window.googleTranslateElementInit = () => {
        try {
          if (window.google?.translate?.TranslateElement) {
            // eslint-disable-next-line no-new
            new window.google.translate.TranslateElement(
              {
                pageLanguage: 'en',
                includedLanguages: supportedLanguages,
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
              },
              GT_ELEMENT_ID,
            )
          }
        } finally {
          resolve()
        }
      }

      const existing = document.getElementById(GOOGLE_TRANSLATE_SCRIPT_ID) as HTMLScriptElement | null
      if (existing) {
        resolve()
        return
      }

      const script = document.createElement('script')
      script.id = GOOGLE_TRANSLATE_SCRIPT_ID
      script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`
      script.async = true
      script.defer = true
      document.body.appendChild(script)
    })

    return () => {
      // Keep globals intact for stability during route transitions.
      // Script cleanup can cause flaky re-init.
    }
  }, [])

  useEffect(() => {
    window.translatePageTo = async (lang: string) => {
      // React/i18n will handle canonical UI; Google Translate is best-effort for hardcoded content.
      // We still need to keep it stable and non-flaky.
      try {
        await initPromiseRef.current

        const select = await waitFor(() => {
          return document.querySelector<HTMLSelectElement>(`#${GT_ELEMENT_ID} select`)
        })

        if (!select) return
        if (select.value === lang) return

        select.value = lang
        select.dispatchEvent(new Event('change', { bubbles: true }))

        // Best-effort: wait until Google actually updates some translated DOM.
        // This helps when switching quickly or when Google Translate updates asynchronously.
        const observer = new MutationObserver(() => {
          // Stop after the first mutation burst.
          observer.disconnect()
        })
        observer.observe(document.body, { childList: true, subtree: true })

        setTimeout(() => {
          observer.disconnect()
        }, 2500)


        // Some languages require a second trigger after DOM settles.
        setTimeout(() => {
          try {
            const s2 = document.querySelector<HTMLSelectElement>(`#${GT_ELEMENT_ID} select`)
            if (!s2) return
            if (s2.value !== lang) {
              s2.value = lang
              s2.dispatchEvent(new Event('change', { bubbles: true }))
            }
          } catch {
            // noop
          }
        }, 400)
      } catch {
        // noop - translation is best-effort
      }
    }

    return () => {
      delete window.translatePageTo
    }
  }, [])

  useEffect(() => {
    if (!initPromiseRef.current) return

    initPromiseRef.current.then(() => {
      window.translatePageTo?.(locale)
    })
  }, [locale, location.pathname])

  return (
    <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', left: '-9999px' }}>
      <div id={GT_ELEMENT_ID} />
    </div>
  )
}

