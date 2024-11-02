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
          <h1 className={`${archivo.className}`}>Blog Page</h1>
        </div>
      </div>
    </MainLayout>
  )
}
