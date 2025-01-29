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

export type TypesStickyScroll = {
  content: {
    title: string
    description: string
    content?: React.ReactNode | any
  }[]
  contentClassName?: string
}

export type Project = {
  _id: string
  title: string
  description: string
  technologies: string[]
  demo: string | null
  github: string | null
  img: any[]
}
