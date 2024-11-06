'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { archivo, popins } from '@/lib/font'

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    description: string
    content?: React.ReactNode | any
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Menyesuaikan breakpoint untuk transisi yang lebih halus
    const sectionHeight = 1 / cardLength
    const currentSection = Math.floor(latest / sectionHeight)
    setActiveCard(Math.min(currentSection, cardLength - 1))
  })

  const backgroundColors = ['transparent', 'transparent', 'transparent']
  const linearGradients = [
    'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
    'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
    'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
  ]

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  )

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length])
  }, [activeCard])

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="min-h-[80vh] w-full flex flex-col lg:flex-row justify-between items-start relative rounded-md p-4 md:p-8 lg:p-10 gap-8"
      ref={ref}
    >
      <div className="w-full lg:w-1/2 relative flex items-start">
        <div className="w-full">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="min-h-[50vh] lg:min-h-[65vh] flex flex-col justify-center mb-20 lg:mb-40"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className={`${archivo.className} text-2xl sm:text-3xl md:text-[2.5rem] lg:text-[3rem] leading-tight font-bold tracking-wider uppercase text-center lg:text-start`}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`${popins.className} mt-4 text-center lg:text-start text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed`}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-20 lg:h-40" />
        </div>
      </div>
      <motion.div
        style={{ background: backgroundGradient }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.5 }}
        className={cn(
          'w-full lg:w-1/2 h-[300px] lg:h-full sticky top-0 overflow-hidden rounded-lg',
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  )
}
