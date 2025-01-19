'use client'

import { useEffect, useState } from 'react'
import Loading from '../loading'

import { loadingTimeout } from '@/lib/loading-timeout'
import { archivo, popins } from '@/lib/font'

import MainLayout from '@/components/layout/page/main-layout'
import { textHighlight } from '@/lib/animation'
import { motion } from 'framer-motion'
import { BlogSection } from '@/components/sections/blog-section'

const textProject = ['Blog']
const textDesc = [
  'Exploring the Art of Full-Stack Development: Where Functionality Meets Beauty in Every Line of Code.',
]

export default function Blog() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    return loadingTimeout(() => setLoading(false), 3500)
  }, [])

  return (
    <MainLayout>
      <div className="relative h-full">
        {loading && <Loading />}

        <div
          className={`${archivo.className} ${
            loading
              ? 'opacity-0'
              : 'opacity-100 transition-opacity duration-500'
          }`}
        >
          <div className="pt-24 lg:pt-28 h-full mb-10 lg:mb-0 lg:h-[105vh] md:container mx-auto px-3  relative md:px-6">
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

            <motion.div className="max-w-full text-start">
              <motion.div
                variants={textHighlight}
                initial="initial"
                animate="animate"
                className="block border-b-[3px] mt-3 md:mt-4 xl:mt-5"
              />
            </motion.div>

            <div className="max-w-full relative">
              <BlogSection />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
