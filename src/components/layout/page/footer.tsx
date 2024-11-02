'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Instagram, Linkedin, Github } from 'lucide-react'
import { LogoBlack, LogoWhite } from '../../../../public/images/index'

export default function Footer() {
  const years = new Date().getFullYear()

  return (
    <div className="py-4 md:py-3 flex flex-col md:flex-row md:justify-evenly items-center justify-center gap-3">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="rounded-full md:basis-1/4 lg:basis-1/5"
      >
        <Link href="https://ajunganom.vercel.app/" legacyBehavior>
          <div className="w-[85px] md:ps-4 ps-0">
            <Image
              src={LogoWhite}
              priority={true}
              className="hidden dark:block h-full w-full drop-shadow-xl"
              alt="Logo Purwa White"
            />
            <Image
              src={LogoBlack}
              priority={true}
              className="block dark:hidden h-full w-full drop-shadow-xl"
              alt="Logo Purwa Black"
            />
          </div>
        </Link>
      </motion.div>

      <div className="p-2 text-center md:basis-1/2">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            duration: 0.4,
            delay: 1.3,
          }}
        >
          © {years} Purwa Wiadnyana.{' '}
        </motion.span>
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            duration: 0.4,
            delay: 1.5,
          }}
        >
          <Link href="/human.txt" legacyBehavior>
            <a className="text-primary" target="_self">
              Crafted by yours truly
            </a>
          </Link>
        </motion.span>
      </div>

      <div className="p-2 flex md:basis-1/4 lg:basis-1/5 justify-evenly md:justify-between items-center w-full">
        <Link
          href="https://www.instagram.com/purwawiadnyana/"
          target="__blank"
          legacyBehavior
        >
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -25, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="cursor-pointer p-3 rounded-full"
          >
            <Instagram className="text-[30px]" />
          </motion.div>
        </Link>

        <Link
          href="https://www.linkedin.com/in/purwa-wiadnyana/"
          target="__blank"
          legacyBehavior
        >
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -25, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="cursor-pointer p-3 rounded-full"
          >
            <div>
              <Linkedin className="text-[30px]" />
            </div>
          </motion.div>
        </Link>

        <Link href="https://github.com/Wdnyana" target="__blank" legacyBehavior>
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -25, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="cursor-pointer p-3 rounded-full"
          >
            <div>
              <Github className="text-[30px]" />
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
