import { textHighlight } from '@/lib/animation'
import { motion } from 'framer-motion'

export default function DescriptionTag() {
  return (
    <motion.div className="w-full md:w-3/4 xl:w-[60%] mx-auto overflow-hidden">
      <motion.h3
        // variants={textHighlight}
        // initial="initial"
        // animate="animate"
        className="text-center text-base md:text-lg xl:text-[22px]"
      >
        Explore my portfolio of projects, where innovation meets interactivity.
        Each project showcases a blend of creativity and technical expertise,
        aimed at delivering engaging user experiences.
      </motion.h3>
    </motion.div>
  )
}
