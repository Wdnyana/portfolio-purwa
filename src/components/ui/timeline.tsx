'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { fetchProjects } from '@/service/project'
import { Project } from '@/types/type'
import { Button } from './button'
import { archivo, popins } from '@/lib/font'
import { Loader2 } from 'lucide-react'

import { useMediaQuery } from 'react-responsive'

export const Timeline = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const viewportAnimation = isMobile
    ? {
        once: false,
        amount: 0.1,
      }
    : {
        once: false,
        amount: 0.3,
        margin: '0px 0px -100px 0px',
      }

  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const [dataProject, setDataProject] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await fetchProjects()
        setDataProject(projects)
      } catch (error) {
        console.error('Failed to fetch projects:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  if (loading) {
    return (
      <div className="flex h-full pt-8 w-full items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin md:h-16 md:w-16 2xl:h-20 2xl:w-20" />
      </div>
    )
  }

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans"
      ref={containerRef}
    >
      <div
        ref={ref}
        className="relative max-w-7xl mx-auto md:pb-20 md:mb-60 mt-5"
      >
        {dataProject.map((item) => (
          <motion.div
            key={item._id}
            className="flex justify-start py-5 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
                <div className="h-4 w-4 rounded-full border border-neutral-300 dark:border-neutral-700" />
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportAnimation}
                transition={{ duration: 0.8 }}
                className={`${archivo.className} hidden md:block text-xl md:pl-20 md:text-5xl font-bold leading-snug tracking-wider`}
              >
                {item.title}
              </motion.h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportAnimation}
                transition={{ duration: 0.8 }}
                className={`${archivo.className} md:hidden block text-2xl mb-4 text-left font-bold leading-snug tracking-wider`}
              >
                {item.title}
              </motion.h3>

              <div>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportAnimation}
                  transition={{ duration: 0.8 }}
                  className={`${popins.className} text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8`}
                >
                  {item.description}
                </motion.p>

                <div className="flex flex-wrap gap-2 items-center md:gap-4">
                  {item.technologies.map((tech, index) => (
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportAnimation}
                      transition={{ duration: 0.8 }}
                      key={index}
                      className={`${popins.className} text-neutral-800 dark:text-neutral-200 inline-block py-2 px-4 rounded-lg bg-muted text-xs md:text-sm font-normal tracking-widest`}
                    >
                      {tech}
                    </motion.p>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-5 md:mt-10">
                  {item.img.map((src, imgIndex) => (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportAnimation}
                      transition={{ duration: 0.8 }}
                      key={imgIndex}
                      className=" h-full w-full rounded-lg overflow-hidden relative"
                    >
                      <Image
                        src={src}
                        alt={`${item.title} image`}
                        width={500}
                        height={500}
                        className="rounded-lg h-full w-full object-cover hover:scale-125 cursor-grab transition-transform ease-in-out duration-75  md:h-44 lg:h-60  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportAnimation}
                  transition={{ duration: 0.8 }}
                  className="flex justify-around items-center mt-8 gap-2 md:gap-4 w-full"
                >
                  <Button
                    disabled={!item.github}
                    onClick={() => {
                      if (item.github) window.open(item.github, '_blank')
                    }}
                    className={`${popins.className} py-5 px-7 md:px-12 tracking-widest`}
                  >
                    Code
                  </Button>

                  <Button
                    disabled={!item.demo}
                    onClick={() => {
                      if (item.demo) window.open(item.demo, '_blank')
                    }}
                    className={`${popins.className} py-5 px-7 md:px-12 tracking-widest`}
                  >
                    Demo
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="hidden md:block absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
