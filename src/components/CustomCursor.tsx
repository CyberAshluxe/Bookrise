import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorLabelRef = useRef<HTMLSpanElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [isTouch, setIsTouch] = useState<boolean>(false)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const rafId = useRef<number | undefined>(undefined)

  useEffect(() => {
    // Check for touch device
    const checkTouch = window.matchMedia('(hover: none)').matches
    setIsTouch(checkTouch)
    if (checkTouch) return

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY }
    }

    const onMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      const cursorEl = el.closest('[data-cursor]')
      if (cursorEl) {
        setIsHovering(true)
        setCursorText(cursorEl.getAttribute('data-cursor') || '')
      } else if (el.tagName === 'A' || el.tagName === 'BUTTON' || el.closest('a') || el.closest('button')) {
        setIsHovering(true)
        setCursorText('')
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      const cursorEl = el.closest('[data-cursor]')
      if (cursorEl || el.tagName === 'A' || el.tagName === 'BUTTON' || el.closest('a') || el.closest('button')) {
        setIsHovering(false)
        setCursorText('')
      }
    }

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15
      pos.current.y += (target.current.y - pos.current.y) * 0.15
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`
      }
      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      {isHovering && (
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-ae-border transition-all duration-300 flex items-center justify-center w-16 h-16 bg-ae-border/20"
          style={{ willChange: 'transform' }}
        >
          {cursorText && (
            <span
              ref={cursorLabelRef}
              className="text-ae-text-primary text-xs font-medium"
            >
              {cursorText}
            </span>
          )}
        </div>
      )}
    </>
  )
}
