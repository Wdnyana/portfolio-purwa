'use client'

import { useEffect, useState } from 'react'
import Loading from '../loading'

import { loadingTimeout } from '@/lib/loading-timeout'
import { archivo } from '@/lib/font'

import MainLayout from '@/components/layout/page/main-layout'

export default function Blog() {
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
          <div className="flex  items-center justify-center h-auto mt-28">
            <h1 className={`${archivo.className}`}>
              This Blog page is coming soon.
            </h1>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
