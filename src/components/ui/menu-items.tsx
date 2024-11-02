/* eslint-disable prefer-const */
'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useDimensions } from '@/lib/use-dimention'
import { navbarLink } from '@/lib/navbar-links'
import { NavbarMenuDesktop, NavbarMobile } from './nav-menu'

export const MenuItem = ({
  setActive,
  active,
}: {
  setActive: (items: string | null) => void
  active: string | null
}) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  let pathname = usePathname()

  useEffect(() => {
    const activeItem = navbarLink.find((item) => item.navLink === pathname)
    setActive(activeItem ? activeItem.navLink : null)
  }, [pathname, setActive])

  return (
    <>
      {/* navbar desktop */}
      <motion.nav className="relative hidden lg:flex justify-center space-x-4 px-8 md:py-[0.35rem] xl:py-3 mx-3 xl:mx-0">
        <NavbarMenuDesktop
          navLinks={navbarLink}
          setActive={setActive}
          active={active}
        />
      </motion.nav>
      {/* end navbar desktop */}

      {/* navbar mobile */}
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        className={`lg:hidden m-0 p-0 relative top-2 right-0 bottom-0 py-2`}
      >
        <NavbarMobile
          navLinks={navbarLink}
          setActive={setActive}
          active={active}
          toggleOpen={toggleOpen}
          isOpen={isOpen}
        />
      </motion.nav>
      {/* end navbar mobile */}
    </>
  )
}
