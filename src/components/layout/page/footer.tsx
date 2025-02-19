'use client'

import React from 'react'

import FooterContent from '@/components/ui/footer-content'

export default function Footer() {
  const years = new Date().getFullYear()

  return (
    <div
      className="relative h-[600px] md:h-[500px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%' }}
    >
      <div className="relative h-[calc(100vh+500px)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-500px)] h-[500px]">
          <FooterContent />
        </div>
      </div>
    </div>
  )
}
