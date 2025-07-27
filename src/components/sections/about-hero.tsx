import { motion, useScroll, useTransform } from 'framer-motion'

import { archivo, popins } from '@/lib/font'
import { textHighlight } from '@/lib/animation'

const heroTextSm = ['A Web', 'Developer', 'based in', 'Tabanan.']

const heroTextMd = ['A Web Developer based in Bali.']

const textDesc = [
  'A Motivated Web Developer with a strong background in programming languages, Web technologies, and a deep passion for full-stack Deb Development. Finding joy in achieving goals through designing, Developing, and maintaining Web Applications, combining reliable functionality with visually appealing designs. Dedicated to adding elegant, eye-catching touches to every interactive animation on the Front-end while ensuring robust and scalable solutions on the Back-end. Committed to collaborating with teams to achieve project objectives and continuously enhancing technical skills across all aspects of Development.',
]

export default function AboutHero() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 200], [1, 0.9])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5])

  return (
    <>
      <motion.div
        style={{ scale, opacity }}
        className="flex flex-col gap-5 xl:w-[85%]"
      >
        <motion.div className="max-w-full text-center block md:hidden lg:hidden">
          {heroTextSm.map((text, idx) => (
            <motion.h1
              key={idx}
              initial="initial"
              animate="animate"
              className={`${archivo.className} text-center text-4xl leading-wider font-bold tracking-wider inline-block overflow-hidden uppercase`}
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

        <motion.div className="max-w-full text-center hidden md:block ">
          {heroTextMd.map((text, idx) => (
            <motion.h1
              key={idx}
              initial="initial"
              animate="animate"
              className={`${archivo.className} text-center md:text-[3.5rem] lg:text-[3.5rem] xl:text-[4rem] leading-wider font-bold tracking-wider inline-block overflow-hidden uppercase`}
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

        <motion.div className="max-w-full text-center">
          {textDesc.map((text, idx) => (
            <motion.p
              key={idx}
              className={`${popins.className} text-center leading-wider text-base md:text-lg xl:text-[22px]`}
            >
              <motion.span
                variants={textHighlight}
                initial="initial"
                animate="animate"
                className="block"
              >
                {text}
              </motion.span>
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}
