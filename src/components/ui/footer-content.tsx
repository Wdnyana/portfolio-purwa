'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Instagram, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { SecondPhotoProfile } from '../../../public/images/index'
import { archivo } from '@/lib/font'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function FooterContent() {
  const years = new Date().getFullYear()
  const isVisible = useScrollAnimation()

  return (
    <>
      <div className="flex 2xl:w-[80%] mx-auto py-5 px-4 md:px-6 flex-col md:flex-row md:justify-evenly items-center justify-center gap-4 md:gap-6 lg:gap-8">
        <div className="h-[160px] md:h-[200px] md:w-full lg:h-[270px] xl:h-[400px]">
          <Image
            src={SecondPhotoProfile}
            className="rounded-xl h-full w-full object-cover object-top"
            alt="Profile Purwa"
          />
        </div>

        <div>
          <h1
            className={`${archivo.className} uppercase font-bold text-center md:text-start text-2xl md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] leading-wider md:leading-tight tracking-wider`}
          >
            get in touch
          </h1>
          <p className="mt-3 mb-5 text-base md:text-lg xl:text-[22px] text-center md:text-start">
            Interested in working together or just want to connect? I’d love to
            hear from you! Drop me a message, and let’s start a conversation.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link href="mailto:purwawiadnyana08@gmail.com">
              <Button
                size="default"
                className="capitalize py-6 px-7 xl:py-7 xl:px-8 leading-tight tracking-wider text-base xl:text-lg hover:underline"
              >
                Connect
                <ArrowUpRight className="ms-2 hover:underline" />
              </Button>
            </Link>
          </div>

          <div className="p-2 mt-4 flex md:basis-1/4 lg:basis-1/5 justify-center md:justify-start gap-10 items-center w-full">
            <Link
              href="https://www.instagram.com/codevo.dev/"
              target="__blank"
              legacyBehavior
            >
              <div className="cursor-pointer p-3 rounded-full">
                <Instagram className="text-[30px]" />
              </div>
            </Link>

            <Link
              href="https://www.linkedin.com/in/purwa-wiadnyana/"
              target="__blank"
              legacyBehavior
            >
              <div className="cursor-pointer p-3 rounded-full">
                <Linkedin className="text-[30px]" />
              </div>
            </Link>

            <Link
              href="https://github.com/Wdnyana"
              target="__blank"
              legacyBehavior
            >
              <div className="cursor-pointer p-3 rounded-full">
                <Github className="text-[30px]" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-2 text-center md:basis-1/2">
        <span>© {years} Purwa Wiadnyana. </span>
        <span>
          <Link href="/human.txt" legacyBehavior>
            <a className="text-primary" target="_self">
              Crafted by yours truly
            </a>
          </Link>
        </span>
      </div>
    </>
  )
}
