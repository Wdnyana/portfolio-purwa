'use client'

import { useEffect, useState } from 'react'
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

  useEffect(() => {
    return loadingTimeout(() => setLoading(false), 3500)
  }, [])

  return (
    <MainLayout>
      {loading && <Loading />}

      <section
        className={` ${
          loading
            ? 'opacity-0'
            : 'opacity-100 transition-opacity duration-500 w-full h-full px-3 lg:px-8'
        }`}
      >
        <div className="flex h-screen items-center justify-center">
          <Hero />
        </div>

        <div className="my-5 lg:my-20 2xl:my-24 h-full w-full container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: false,
              amount: 0.5,
              margin: '0px 0px -200px 0px',
            }}
            transition={{ duration: 0.8 }}
          >
            <DescriptionTag />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: false,
              amount: 0.5,
              margin: '0px 0px -200px 0px',
            }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ServiceSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: false,
              amount: 0.5,
              margin: '0px 0px -200px 0px',
            }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <HighlightProject />
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}
