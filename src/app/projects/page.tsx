'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Loading from '../loading'

import { loadingTimeout } from '@/lib/loading-timeout'
import { archivo } from '@/lib/font'

import MainLayout from '@/components/layout/page/main-layout'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import { motion } from 'framer-motion'
import { textHighlight } from '@/lib/animation'

const textProject = ['My Projects']

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
          <div className="pt-24 lg:pt-28 h-[150vh] md:container mx-auto px-3 md:px-6">
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
            <div className="p-10 flex justify-center items-center mx-auto w-full">
              <div className="hidden lg:flex">
                <StickyScroll content={content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

const content = [
  {
    title: 'Real time changes',
    description:
      'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Real Time Changes
      </div>
    ),
  },
  {
    title: 'Version control',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: 'Running out of content',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
]
