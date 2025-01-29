'use client'

import { useEffect, useState } from 'react'
import Loading from '../loading'

import { loadingTimeout } from '@/lib/loading-timeout'
import { archivo, popins } from '@/lib/font'

import MainLayout from '@/components/layout/page/main-layout'
import { motion } from 'framer-motion'
import { textHighlight } from '@/lib/animation'
import { Timeline } from '@/components/ui/timeline'
const textProject = ['Projects']
const textDesc = [
  'Showcasing Thoughtful Creations: Innovative Solutions with Stunning Designs and Seamless Functionality.',
]

export default function Projects() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    return loadingTimeout(() => setLoading(false), 3500)
  }, [])

  return (
    <MainLayout>
      <div className="relative ">
        {loading && <Loading />}

        <div
          className={`${archivo.className} ${
            loading
              ? 'opacity-0'
              : 'opacity-100 transition-opacity duration-500'
          }`}
        >
          <div className="pt-24 lg:pt-40 h-full mb-40 lg:mb-52 md:container mx-auto px-3 md:px-6">
            <motion.div className="max-w-full inline-block mb-5">
              {textProject.map((text, idx) => (
                <motion.h1
                  key={idx}
                  initial="initial"
                  animate="animate"
                  className={`${archivo.className} text-center md:text-start text-3xl md:text-[2.5rem] lg:text-[3rem] leading-wider font-bold tracking-wider uppercase inline-block overflow-hidden`}
                >
                  <motion.span
                    variants={textHighlight}
                    initial="initial"
                    animate="animate"
                    className="block"
                  >
                    {text}
                  </motion.span>
                </motion.h1>
              ))}
            </motion.div>

            <motion.div className="max-w-full text-start">
              {textDesc.map((text, idx) => (
                <motion.p
                  key={idx}
                  className={`${popins.className} text-start leading-wider text-base md:text-lg xl:text-[22px]`}
                >
                  <motion.span
                    variants={textHighlight}
                    initial="initial"
                    animate="animate"
                    className="block"
                  >
                    {text}
                  </motion.span>
                </motion.p>
              ))}
            </motion.div>
            <div className="mt-5 mx-auto w-full">
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
