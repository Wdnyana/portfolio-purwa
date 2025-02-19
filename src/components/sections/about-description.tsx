/* eslint-disable react/jsx-no-undef */
import { educations, experiences, sertifications } from '@/lib/data'
import { archivo, popins } from '@/lib/font'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AboutDescription() {
  const { scrollY } = useScroll()
  const [viewportHeight, setViewportHeight] = useState(0)

  const scale = useTransform(
    scrollY,
    [viewportHeight * 0.9, viewportHeight],
    [1, 0.9],
  )
  const opacity = useTransform(
    scrollY,
    [viewportHeight * 0.9, viewportHeight],
    [1, 0.5],
  )

  useEffect(() => {
    setViewportHeight(window.innerHeight)

    const handleResize = () => {
      setViewportHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="sticky top-0 min-h-full overflow-hidden">
      <div className=" grid grid-cols-1 md:items-center relative">
        <motion.div
          className="border-t-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{
            once: false,
            amount: 0.5,
            margin: '0px 0px -300px 0px',
          }}
        />
        <div className="py-10 mt-16 md:mt-0 w-full flex flex-col md:flex-row justify-center md:items-center gap-6">
          <motion.div
            className="basis-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{
              once: false,
              amount: 0.5,
              margin: '0px 0px -300px 0px',
            }}
          >
            <h1 className="text-3xl md:text-[2.5rem] lg:text-[3rem] leading-wider font-bold tracking-wider uppercase text-center md:text-start">
              who am i ?
            </h1>
          </motion.div>

          <motion.div
            className="basis-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{
              once: false,
              amount: 0.5,
              margin: '0px 0px -300px 0px',
            }}
          >
            <p
              className={`${popins.className} text-center md:text-start text-base md:text-lg xl:text-[22px] leading-wider`}
            >
              As a motivated Web Developer aspiring to become an experienced
              Full-Stack Engineer, I’m Purwa Wiadnyana, passionate about
              crafting beautifully interactive web experiences. With a strong
              foundation in programming languages and web technologies, I
              specialize in Full-Stack Web Development. I thrive on combining
              reliable functionality with visually captivating designs and
              robust architectures. I am committed to continuously honing my
              skills in both Front-end and Back-end development to create smooth
              and engaging interactions. Dedicated to delivering robust and
              scalable solutions on the backend while adding captivating touches
              to every interactive animation on the Front-end, I always strive
              to provide exceptional user experiences.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="border-t-4 "
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{
            once: false,
            amount: 0.5,
            margin: '0px 0px -250px 0px',
          }}
        />

        {/* education start */}
        <div className="py-10 mt-16 md:mt-0 w-full flex flex-col md:flex-row justify-center md:items-center gap-6">
          <motion.div
            className="basis-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{
              once: false,
              amount: 0.5,
              margin: '0px 0px -250px 0px',
            }}
          >
            <h1 className="text-3xl md:text-[2.5rem] lg:text-[3rem] leading-wider font-bold tracking-wider uppercase text-center md:text-start">
              education
            </h1>
          </motion.div>

          <div className="basis-1/2 flex flex-col gap-8">
            {educations.map((educ) => (
              <motion.div
                key={educ.id}
                className="gap-4 bg-primary/40 py-4 px-5 inline-block rounded-lg"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                viewport={{
                  once: false,
                  amount: 0.5,
                  margin: '0px 0px -200px 0px',
                }}
              >
                <motion.h3
                  className={`${archivo.className} text-center md:text-start text-xl font-medium md:text-[22px] 2xl:text-[26px] leading-wider`}
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{ x: '100%', opacity: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
                  viewport={{
                    once: false,
                    amount: 0.5,
                    margin: '0px 0px -200px 0px',
                  }}
                >
                  {educ.institution}
                </motion.h3>

                <motion.p
                  className={`${popins.className} mt-4 text-center md:text-start text-lg font-medium md:text-[20px] 2xl:text-[22px] leading-wider text-muted-foreground`}
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{ x: '100%', opacity: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
                  viewport={{
                    once: false,
                    amount: 0.5,
                    margin: '0px 0px -200px 0px',
                  }}
                >
                  {educ.startDate} - {educ.endDate}, {educ.address} |{' '}
                  {educ.degree}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="border-t-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{
            once: false,
            amount: 0.5,
            margin: '0px 0px -200px 0px',
          }}
        />

        {/*experience start*/}
        <div className="py-10 mt-16 md:mt-0 w-full flex flex-col md:flex-row justify-center md:items-center gap-6">
          <motion.div
            className="basis-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{
              once: false,
              amount: 0.5,
              margin: '0px 0px -200px 0px',
            }}
          >
            <h1 className="text-3xl md:text-[2.5rem] lg:text-[3rem] leading-wider font-bold tracking-wider uppercase text-center md:text-start">
              experience
            </h1>
          </motion.div>

          <div className="basis-1/2 flex flex-col gap-8">
            {experiences.map((expe) => (
              <motion.div
                key={expe.id}
                className="gap-4 bg-primary/40 py-4 px-5 inline-block rounded-lg"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                viewport={{
                  once: false,
                  amount: 0.5,
                  margin: '0px 0px -200px 0px',
                }}
              >
                <motion.h3
                  className={`${archivo.className} text-center md:text-start text-xl font-medium md:text-[22px] 2xl:text-[26px] leading-wider`}
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{ x: '100%', opacity: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
                  viewport={{
                    once: false,
                    amount: 0.5,
                    margin: '0px 0px -200px 0px',
                  }}
                >
                  {expe.comapany}
                </motion.h3>

                <motion.p
                  className={`${popins.className} mt-4 text-center md:text-start text-lg font-medium md:text-[20px] 2xl:text-[22px] leading-wider text-muted-foreground`}
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{ x: '100%', opacity: 0 }}
                  transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
                  viewport={{
                    once: false,
                    amount: 0.5,
                    margin: '0px 0px -200px 0px',
                  }}
                >
                  {expe.dates}, {expe.address} | {expe.role}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="border-t-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{
            once: false,
            amount: 0.5,
            margin: '0px 0px -200px 0px',
          }}
        />

        {/* sertif */}
        <div className="py-10 mt-16 md:mt-0 w-full flex flex-col md:flex-row justify-center md:items-center gap-6">
          <motion.div
            className="basis-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{
              once: false,
              amount: 0.5,
              margin: '0px 0px -250px 0px',
            }}
          >
            <h1 className="text-3xl md:text-[2.5rem] lg:text-[3rem] leading-wider font-bold tracking-wider uppercase text-center md:text-start">
              sertification
            </h1>
          </motion.div>

          <div className="basis-1/2 flex flex-col gap-8">
            <motion.div
              className="gap-4 bg-primary/40 overflow-y-auto w-full scroll-bar h-[50vh] p-3 inline-block rounded-lg"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              viewport={{
                once: false,
                amount: 0.5,
                margin: '0px 0px -200px 0px',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                {sertifications.map((sertif) => (
                  <div
                    key={sertif.id}
                    className="rounded-md col-span-1 w-full h-full p-1"
                  >
                    <div className="flex flex-col gap-2 overflow-x-hidden">
                      <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{
                          duration: 1,
                          ease: 'easeInOut',
                          delay: 0.4,
                        }}
                        viewport={{
                          once: false,
                          amount: 0.5,
                          margin: '0px 0px -200px 0px',
                        }}
                        src={sertif.link}
                        className="rounded-md"
                        alt="Image Sertification"
                      />

                      <motion.h3
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{
                          duration: 1,
                          ease: 'easeInOut',
                          delay: 0.4,
                        }}
                        viewport={{
                          once: false,
                          amount: 0.5,
                          margin: '0px 0px -200px 0px',
                        }}
                        className="text-start font-semibold text-xl md:text-2xl mt-2 tracking-widest leading-normal"
                      >
                        {sertif.title}
                      </motion.h3>

                      <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{
                          duration: 1,
                          ease: 'easeInOut',
                          delay: 0.4,
                        }}
                        viewport={{
                          once: false,
                          amount: 0.5,
                          margin: '0px 0px -200px 0px',
                        }}
                        className={`${popins.className} text-start text-sm md:text-base leading-wider`}
                      >
                        {sertif.description}
                      </motion.p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
