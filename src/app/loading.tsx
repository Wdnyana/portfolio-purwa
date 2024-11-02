'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { LoadingSvg } from '@/components/svg/loading-svg'
import {
  bounceLoadingVariants,
  containerLoadingVariants,
  exitLoadingVariants,
} from '@/lib/animation'
import { loadingTimeout } from '@/lib/loading-timeout'

const letters = 'Purwa Wiadnyana'.split('')

export default function Loading() {
  const [loadingPlay, setLoadingPlay] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const showTimer = loadingTimeout(() => setLoadingPlay(true), 550)

    const exitTimer = setTimeout(() => {
      setIsExiting(true)
      setLoadingPlay(false)
    }, 3000)

    return () => {
      showTimer()
      clearTimeout(exitTimer)
    }
  }, [])

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        setIsExiting(false)
      }}
    >
      {loadingPlay && (
        <motion.div
          variants={exitLoadingVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-center h-screen w-full flex flex-col gap-4 items-center justify-center inset-0 dark:bg-black bg-white z-[60] fixed"
          onAnimationComplete={() => {
            if (isExiting) {
              setLoadingPlay(false)
            }
          }}
        >
          <LoadingSvg />

          <motion.div
            className="flex gap-1"
            variants={containerLoadingVariants}
            initial="initial"
            animate="animate"
          >
            {letters.map((letter, index) => (
              <motion.h1
                key={index}
                variants={bounceLoadingVariants}
                className="text-lg font-semibold dark:text-white text-black tracking-widest lg:mx-1 flex items-center justify-center"
              >
                {letter}
              </motion.h1>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
