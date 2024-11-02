'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

import { notFoundText } from '@/lib/text'
import { NotFounds } from '@/components/ui/not-founds'
import MainLayout from '@/components/layout/page/main-layout'

export default function NotFound() {
  return (
    <MainLayout>
      <div className="w-full h-full flex justify-center items-center flex-col px-3 lg:px-0 overflow-x-hidden">
        <NotFounds
          className="pt-8"
          items={notFoundText}
          direction="right"
          speed="fast"
        />

        <div className="w-full h-auto flex justify-center">
          <Link href="/">
            <Button
              variant="link"
              className="p-4 md:p-6 xl:py-8 xl:px-12 dark:text-neutral-50 text-black border border-primary hover:bg-primary tracking-wider font-normal text-center text-[10px] md:text-base lg:text-lg"
            >
              RETURN HOME
            </Button>
          </Link>
        </div>

        <NotFounds items={notFoundText} direction="left" speed="fast" />
      </div>
    </MainLayout>
  )
}

{
  /*  */
}
