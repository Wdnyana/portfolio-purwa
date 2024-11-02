import Image from 'next/image'
import { motion } from 'framer-motion'

import { PhotoProfile } from '../../../public/images/index'
import { textHighlight } from '@/lib/animation'
import { archivo } from '@/lib/font'

const heroTextLg = [
  'A Web Developer Who',
  'Crafts Beautifully',
  'Interactive Web',
  'Experiences.',
]

const heroTextMd = [
  'A Web Developer',
  'Who Crafts',
  'Beautifully',
  'Interactive Web',
  'Experiences.',
]

const heroTextSm = [
  'A Web',
  'Developer',
  'Who Crafts',
  'Beautifully',
  'Interactive',
  'Web',
  'Experiences.',
]

export default function Hero() {
  return (
    <div className="mt-[3.5rem] lg:mt-0 w-full relative flex flex-col lg:flex-row items-center justify-center lg:justify-normal gap-12 md:gap-8 lg:gap-0 min-h-full">
      <motion.div className="max-w-full hidden lg:block">
        {heroTextLg.map((text, idx) => (
          <motion.h1
            key={idx}
            initial="initial"
            animate="animate"
            className={`${archivo.className} lg:text-[4.5rem] xl:text-[6.68rem] 2xl:text-[7.5rem] md:leading-tight font-bold tracking-wider inline-block overflow-hidden`}
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

      <motion.div className="max-w-full hidden md:block lg:hidden">
        {heroTextMd.map((text, idx) => (
          <motion.h1
            key={idx}
            initial="initial"
            animate="animate"
            className={`${archivo.className} md:text-[3.7rem] md:leading-tight font-bold tracking-wider inline-block overflow-hidden`}
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

      <motion.div className="max-w-full block md:hidden lg:hidden">
        {heroTextSm.map((text, idx) => (
          <motion.h1
            key={idx}
            initial="initial"
            animate="animate"
            className={`${archivo.className} text-4xl leading-wider font-bold tracking-wider inline-block overflow-hidden`}
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

      <div className="hidden lg:block absolute lg:w-[200px] lg:h-[240px] xl:w-[275px] xl:h-[315px] 2xl:w-[400px] 2xl:h-[500px] lg:right-12 xl:right-7 2xl:right-32 transition-all duration-300 lg:bottom-36 xl:bottom-20 2xl:bottom-14 z-[5] overflow-hidden">
        <motion.div
          variants={textHighlight}
          initial="initial"
          animate="animate"
          className="h-full w-full"
        >
          <Image
            src={PhotoProfile}
            className="rounded-2xl object-cover object-bottom w-full h-full"
            alt="Profile Purwa"
            priority
          />
        </motion.div>
      </div>
      <div className="block lg:hidden h-[280px] md:h-[250px] overflow-hidden">
        <motion.div
          variants={textHighlight}
          initial="initial"
          animate="animate"
          className="h-full w-full"
        >
          <Image
            src={PhotoProfile}
            className="rounded-2xl object-cover object-bottom w-full h-full"
            alt="Profile Purwa"
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}
