'use client'

import { useState, useRef, useEffect } from 'react'

import { cn } from '@/lib/utils'
import { TypesInfinityScroll } from '@/types/type'

export function NotFounds({
  items,
  direction = 'left',
  speed = 'fast',
  className,
}: TypesInfinityScroll) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const [start, setStart] = useState(false)

  function directionSlide() {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse',
      )
    }
  }

  function speedSlide() {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-duration',
        speed === 'fast' ? '30s' : '55s',
      )
    }
  }

  function animationSlide() {
    if (containerRef.current && scrollRef.current) {
      directionSlide()
      speedSlide()
      setStart(true)
    }
  }

  useEffect(() => {
    animationSlide()
  })

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full h-full flex flex-col gap-8 overflow-hidden',
        className,
      )}
    >
      <div
        ref={containerRef}
        className={cn(
          'relative w-full overflow-hidden flex h-full gap-4',
          className,
        )}
      >
        <div
          ref={scrollRef}
          className={cn(
            'flex justify-center items-center animate-scroll min-w-full flex-nowrap gap-4 shrink-0',
            start && 'animate-scroll',
          )}
        >
          {items.map((item, idx) => (
            <div key={idx}>
              <h1
                className={cn(
                  `w-full font-extrabold tracking-wide text-[10px] md:text-[35px] lg:text-[50px] 2xl:text-[90px] uppercase`,
                  item.className,
                )}
              >
                {item.text}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
