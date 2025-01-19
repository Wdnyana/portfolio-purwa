import { Button } from '@/components/ui/button'
import { textHighlight } from '@/lib/animation'
import { popins } from '@/lib/font'
import { sidebarItems } from '@/lib/sidebar-blog'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-7 xl:grid-cols-4  gap-4 mt-4 md:mt-6 xl:mt-8 w-full">
        <div className="grid lg:grid-cols-1 lg:col-span-2 xl:col-span-1 gap-6  lg:h-1/2">
          <motion.h3
            variants={textHighlight}
            initial="initial"
            animate="animate"
            className="text-center font-semibold text-xl md:text-2xl  tracking-widest leading-normal"
          >
            Topics
          </motion.h3>

          {sidebarItems.map((item) => (
            <motion.div
              variants={textHighlight}
              initial="initial"
              animate="animate"
              key={item.title}
            >
              <Button
                className="w-full text-start bg-transparent text-black dark:text-neutral-50 shadow-none hover:bg-primary hover:text-neutral-50"
                asChild
              >
                <Link
                  href={item.url}
                  className={`${popins.className} font-light text-start text-base md:text-lg`}
                >
                  {item.title}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <main className="lg:h-[70vh] lg:col-span-5 xl:col-span-3 overflow-y-auto w-full scroll-bar">
          {children}
        </main>
      </div>
    </>
  )
}
