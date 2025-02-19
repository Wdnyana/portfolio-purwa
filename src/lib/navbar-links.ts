import { TypesNavbar } from '@/types/type'

const navItems = [
  {
    navTitle: 'Home',
    navLink: '/',
  },
  {
    navTitle: 'About',
    navLink: '/about',
  },
  {
    navTitle: 'Projects',
    navLink: '/projects',
  },
]

const [home, about, projects] = navItems

export function getNavItems(item: TypesNavbar[]): TypesNavbar | undefined {
  const items = new Set(item)

  return navItems.find((nav) => !items.has(nav))
}

export const navbarLink = [home, about, projects]
