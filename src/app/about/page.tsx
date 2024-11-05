'use client'

import { useEffect, useState } from 'react'
import Loading from '../loading'

import { loadingTimeout } from '@/lib/loading-timeout'
import { archivo } from '@/lib/font'

import MainLayout from '@/components/layout/page/main-layout'
import AboutHero from '@/components/sections/about-hero'

export default function About() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    return loadingTimeout(() => setLoading(false), 3500)
  }, [])

  return (
    <MainLayout>
      <div className="relative">
        {loading && <Loading />}

        <div
          className={`${archivo.className} ${
            loading
              ? 'opacity-0'
              : 'opacity-100 transition-opacity duration-500'
          }`}
        >
          <div className="h-screen w-full flex items-center justify-center">
            <AboutHero />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
