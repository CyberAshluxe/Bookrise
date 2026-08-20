import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface StatCounterProps {
  end: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
  delay?: number
}

export default function StatCounter({ end, suffix = '', prefix = '', label, duration = 2, delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!ref.current) return

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 80%',
      onEnter: () => {
        if (hasAnimated.current) return
        hasAnimated.current = true
        
        const obj = { val: 0 }
        gsap.to(obj, {
          val: end,
          duration,
          delay,
          ease: 'power2.out',
          onUpdate: () => {
            setValue(Math.round(obj.val))
          },
        })
      },
    })

    return () => {
      trigger.kill()
    }
  }, [end, duration, delay])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl lg:text-6xl gold-gradient-text mb-2">
        <span ref={numberRef} className="tabular-nums">
          {prefix}{value.toLocaleString()}{suffix}
        </span>
      </div>
      <p className="text-ae-text-secondary text-xs md:text-sm uppercase tracking-widest">
        {label}
      </p>
    </div>
  )
}
