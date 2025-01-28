import { titleHighlightScroll } from '@/lib/animation'
import { archivo } from '@/lib/font'
import { motion } from 'framer-motion'
import { HoverEffect } from '../ui/card-hover-effect'

const textProject = ['What I Can Do']

export const projects = [
  {
    id: 1,
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',
  },
  {
    id: 2,
    title: 'Netflix',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
  },
  {
    id: 3,
    title: 'Google',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
  },
  {
    id: 4,
    title: 'Meta',
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  },
  {
    id: 5,
    title: 'Amazon',
    description:
      'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
  },
  {
    id: 6,
    title: 'Microsoft',
    description:
      'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
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
