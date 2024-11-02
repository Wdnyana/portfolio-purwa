'use client'

import { useState } from 'react'

import { MenuItem } from '@/components/ui/menu-items'
import { cn } from '@/lib/utils'

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div
      className={cn(
        'fixed z-[5] py-1 px-3 md:px-0 inset-x-0 md:container w-full mx-auto',
        className,
      )}
    >
      <MenuItem setActive={setActive} active={active} />
    </div>
  )
}
