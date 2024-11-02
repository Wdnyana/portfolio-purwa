'use client'

import { useEffect, useState } from 'react'
import Loading from './loading'
import MainLayout from '@/components/layout/page/main-layout'

import { loadingTimeout } from '@/lib/loading-timeout'
import Hero from '@/components/sections/hero'
import DescriptionTag from '@/components/sections/description-tag'

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

        <div className="my-5 lg:my-20 2xl:my-24 h-auto w-full">
          <DescriptionTag />
        </div>
        <div className="my-5 lg:my-20 2xl:my-24 h-auto w-full">
          <DescriptionTag />
        </div>
      </section>
    </MainLayout>
  )
}
