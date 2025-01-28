'use client'

import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Loading from './loading'
import MainLayout from '@/components/layout/page/main-layout'

import { loadingTimeout } from '@/lib/loading-timeout'
import Hero from '@/components/sections/hero'
import DescriptionTag from '@/components/sections/description-tag'
import HighlightProject from '@/components/sections/highlight-project'
import ServiceSection from '@/components/sections/service-section'
import { motion } from 'framer-motion'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const viewportAnimation = isMobile
    ? {
        once: false,
        amount: 0.1,
      }
    : {
        once: false,
        amount: 0.4,
        margin: '0px 0px -200px 0px',
      }

  useEffect(() => {
    return loadingTimeout(() => setLoading(false), 3500)
  }, [])

  return (
    <MainLayout>
      {loading && <Loading />}

      <section
        className={`${
          loading
            ? 'opacity-0'
            : 'opacity-100 transition-opacity duration-500 w-full h-full px-3 lg:px-8'
        }`}
      >
        <div className="flex h-screen items-center justify-center">
          <Hero />
        </div>

        <div className="mt-5 lg:mt-20 2xl:mt-28 mb-16 lg:mb-28 2xl:mb-32 h-full w-full container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportAnimation}
            transition={{ duration: 0.8 }}
          >
            <DescriptionTag />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportAnimation}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ServiceSection />
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}
