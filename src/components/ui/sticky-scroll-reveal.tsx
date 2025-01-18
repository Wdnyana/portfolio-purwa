'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

import { TypesStickyScroll } from '@/types/type'
import { archivo, popins } from '@/lib/font'
import { cn } from '@/lib/utils'

export function StickyScroll({ content, contentClassName }: TypesStickyScroll) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ['start start', 'end start'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / content.length)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0,
    )
    setActiveCard(closestBreakpointIndex)
  })

  return (
    <div
      ref={containerRef}
      className="w-full h-[75vh] overflow-y-auto relative flex justify-center p-10 sticky-scroll-item cursor-all-scroll bg-secondary rounded-2xl"
    >
      {/* Container untuk teks */}
      <div className="relative flex items-start w-[65%]">
        <div className="w-full me-10">
          {content.map((item, idx) => (
            <div key={item.title + idx} className="my-72 w-full">
              <motion.h1
                className={`${archivo.className} text-3xl md:text-[2.5rem] lg:text-[3rem] leading-widest font-bold tracking-wider uppercase`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === idx ? 1 : 0.3,
                }}
              >
                {item.title}
              </motion.h1>
              <motion.p
                className={`${popins.className} text-base md:text-lg xl:text-[22px] leading-wider tracking-wider w-full mt-5`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === idx ? 1 : 0.3,
                }}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={cn(
          'hidden lg:block lg:h-[60%] xl:3/4 w-[35%] rounded-md sticky lg:top-28 2xl:top-32 overflow-hidden',
          contentClassName,
        )}
      >
        {content[activeCard].content}
      </div>
    </div>
  )
}
