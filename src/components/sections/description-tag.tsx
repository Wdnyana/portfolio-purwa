import { textHighlight } from '@/lib/animation'
import { motion } from 'framer-motion'
import { TextGenerateEffect } from '../ui/text-generate-effect'
import { words } from '@/lib/text'

export default function DescriptionTag() {
  return (
    <motion.div className="w-full md:w-3/4 xl:w-[60%] mx-auto overflow-hidden">
      <TextGenerateEffect words={words} />
    </motion.div>
  )
}
