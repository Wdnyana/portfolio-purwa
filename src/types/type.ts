export type TypesNavbar = {
  navTitle: string
  navLink: string
}

export type TypesInfinityScroll = {
  items: {
    text: string
    className?: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'slow'
  className?: string
}

export type TypesPageTransition = {
  href: string
  onTransitionStart?: () => Promise<void>
  onTransitionEnd?: () => Promise<void>
}

export type TypesNavMenuDesktop = {
  setActive: (items: string | null) => void
  active: string | null
  navLinks: TypesNavbar[]
  pageTransition?: (transition: TypesPageTransition) => Promise<void>
}

export type TypesNavMenuMobile = TypesNavMenuDesktop & {
  toggleOpen: any
  isOpen: any
}
