import { titleHighlightScroll } from '@/lib/animation'
import { archivo } from '@/lib/font'
import { motion } from 'framer-motion'
import { HoverEffect } from '../ui/card-hover-effect'

const textProject = ['What I Can Do']

export const projects = [
  {
    id: 1,
    title: 'Front-End Development',
    description:
      'Commit to Building clean, responsive, and user-friendly interfaces using React and Next.js.',
  },
  {
    id: 2,
    title: 'Back-End Development',
    description:
      'Creating reliable APIs and managing data using Java, Spring Boot, and Node.js',
  },
  {
    id: 3,
    title: 'Full-Stack Solutions',
    description:
      'Combining front-end and back-end skills to deliver complete and functional web applications.',
  },
]

export default function ServiceSection() {
  return (
    <div className="my-10 lg:my-24 2xl:my-28">
      <motion.div className="max-w-full inline-block">
        {textProject.map((text, idx) => (
          <motion.h1
            key={idx}
            initial="initial"
            animate="animate"
            className={`${archivo.className} text-center md:text-start text-3xl md:text-[2.5rem] lg:text-[3rem] leading-wider font-bold tracking-wider uppercase inline-block overflow-hidden`}
          >
            <motion.span
              variants={titleHighlightScroll}
              initial="initial"
              animate="animate"
              whileInView="whileInView"
              exit="exit"
              viewport={{
                once: false,
                amount: 0.5,
                margin: '0px 0px -200px 0px',
              }}
              className="block"
            >
              {text}
            </motion.span>
          </motion.h1>
        ))}
      </motion.div>

      <div className="my-5">
        <HoverEffect items={projects} />
      </div>
    </div>
  )
}
