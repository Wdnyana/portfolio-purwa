import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

import { DarkmodeToggle } from './darkmode-toggle'
import { HamburgerToggle } from './hambuger-toggle'
import {
  navbarBackground,
  openTransition,
  textHighlight,
  variantsNavLink,
} from '@/lib/animation'

import { LogoBlack, LogoWhite } from '../../../public/images'
import {
  TypesNavMenuDesktop,
  TypesNavMenuMobile,
  TypesPageTransition,
} from '@/types/type'
import { Button } from './button'

function timingTransition(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const NavbarMenuDesktop = ({
  active,
  navLinks,
  setActive,
  ...props
}: TypesNavMenuDesktop) => {
  const router = useRouter()

  async function handleClickLink(transition: TypesPageTransition) {
    const body = document.querySelector('body')

    try {
      body?.classList.add('page-transition')
      await timingTransition(500)

      setActive(transition.href)
      router.push(transition.href)

      await timingTransition(500)
      body?.classList.remove('page-transition')
    } catch (err) {
      console.error('Error when Navigate: ', err)
      body?.classList.remove('page-transition')
    }
  }
  return (
    <div className="flex items-center justify-between w-full">
      <div className="h-full w-[40px]  overflow-hidden">
        <Link href="/">
          <motion.div
            variants={textHighlight}
            initial="initial"
            animate="animate"
          >
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
          </motion.div>
        </Link>
      </div>

      <div className="relative flex items-center lg:auto gap-2 ">
        {navLinks.map((links, index) => (
          <motion.div
            key={index}
            className="flex items-center md:justify-start text-center w-full"
          >
            <Link
              onClick={(e) => {
                e.preventDefault()
                handleClickLink({
                  href: links.navLink,
                })
              }}
              passHref
              href={links.navLink}
              {...props}
              className={`lg:py-[8px] lg:px-9 md:text-lg tracking-wider font-normal text-center dark:text-neutral-50 hover:opacity-75 transition ease-in-out duration-300 ${
                active === links.navLink
                  ? 'dark:bg-secondary bg-secondary transition duration-300 ease-in-out rounded-lg overflow-hidden'
                  : ''
              }`}
            >
              <motion.span
                variants={textHighlight}
                initial="initial"
                animate="animate"
                className="block"
              >
                {`${links.navTitle}`}
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="flex gap-3 items-center"
        variants={textHighlight}
        initial="initial"
        animate="animate"
      >
        <DarkmodeToggle />

        <Link
          href="https://drive.google.com/file/d/1rnxKazgujLR1VvAGznJbazz1IrLeg0Ej/view?usp=sharing"
          rel="noreferrer"
          target="__blank"
        >
          <Button variant="default" className="tracking-wider text-base py-5">
            Download CV
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}

export const NavbarMobile = ({
  active,
  navLinks,
  setActive,
  toggleOpen,
  isOpen,
  ...props
}: TypesNavMenuMobile) => {
  const router = useRouter()

  async function handleClickLink(transition: TypesPageTransition) {
    const body = document.querySelector('body')

    try {
      body?.classList.add('page-transition')
      await timingTransition(500)

      setActive(transition.href)
      router.push(transition.href)

      await timingTransition(500)
      body?.classList.remove('page-transition')
    } catch (err) {
      console.error('Error when Navigate: ', err)
      body?.classList.remove('page-transition')
    }
  }

  return (
    <>
      <div
        className={`w-full flex justify-between items-center relative pe-6 ${
          isOpen ? 'z-[6]' : ''
        }`}
      >
        <div className="ms-4 h-full w-[40px] overflow-hidden">
          <Link href="/">
            <motion.div
              variants={textHighlight}
              initial="initial"
              animate="animate"
            >
              <Image
                src={LogoWhite}
                className="hidden dark:block h-full w-full drop-shadow-xl"
                alt="Logo Purwa White"
              />
              <Image
                src={LogoBlack}
                className="block dark:hidden h-full w-full drop-shadow-xl"
                alt="Logo Purwa Black"
              />
            </motion.div>
          </Link>
        </div>
        <div>
          <motion.div
            variants={textHighlight}
            initial="initial"
            animate="animate"
            className="flex"
          ></motion.div>
        </div>

        <div className="relative h-full overflow-hidden flex items-center justify-center gap-[15px]">
          <motion.div
            variants={textHighlight}
            initial="initial"
            animate="animate"
            className="flex"
          >
            <div className="-mt-[22.5px] md:-mt-[4px]">
              <DarkmodeToggle />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                type: 'spring',
                duration: 1.8,
                delay: 3.75,
              },
            }}
          >
            <HamburgerToggle toggle={() => toggleOpen()} />
          </motion.div>
        </div>
      </div>

      <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
        <motion.div
          className={`fixed inset-0 dark:bg-background bg-background shadow-input shadow-md w-full h-screen z-[5]`}
          variants={navbarBackground}
        >
          <motion.div
            className={`absolute inset-0 flex w-full flex-col items-center justify-center h-screen gap-8`}
            variants={openTransition}
          >
            {navLinks.map((links, index) => (
              <motion.div
                key={index}
                variants={variantsNavLink}
                className={`w-3/4 py-[10px] px-11 text-base tracking-wider font-normal text-center dark:text-neutral-50 hover:opacity-75 transition ease-in-out duration-300 ${
                  active === links.navLink
                    ? 'w-3/4 dark:bg-secondary bg-secondary transition duration-300 ease-in-out rounded-lg dark:text-neutral-50'
                    : ''
                }`}
              >
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    handleClickLink({
                      href: links.navLink,
                    })
                  }}
                  href={links.navLink}
                  {...props}
                  className="w-full h-full flex items-center justify-center"
                >
                  {links.navTitle}
                </Link>
              </motion.div>
            ))}

            <motion.a
              className="mt-5"
              variants={variantsNavLink}
              href="https://drive.google.com/uc?export=download&id=1DbXHb737qtcb6KhLYiKq3xokwuT1uJQ4"
              rel="noreferrer"
              target="__blank"
            >
              <Button
                variant="default"
                className="tracking-wider text-base py-5"
              >
                Download CV
              </Button>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.nav>
    </>
  )
}
