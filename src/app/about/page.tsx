import type { Metadata } from 'next'

import SiteAbout from '@/components/site/site-about'

export async function generateMetadata(): Promise<Metadata | undefined> {
  return {
    metadataBase: new URL('https://purwa-widnyana.vercel.app/'),
    title: 'About | Portfolio of Purwa Wiadnyana, Full-Stack Web Developer',
    description:
      'Motivated as Web Developer with a background in programming languages and web technologies. Experienced in creating and maintaining websites and applications. Committed to working with teams to achieve project goals and enhance technical skills.',

    openGraph: {
      type: 'website',
      url: 'https://purwa-widnyana.vercel.app/about',
      title: 'About | Portfolio of Purwa Wiadnyana, Full-Stack Web Developer',
      description:
        'Motivated as Web Developer with a background in programming languages and web technologies. Experienced in creating and maintaining websites and applications. Committed to working with teams to achieve project goals and enhance technical skills.',

      images: [
        {
          url: '/images/opengraph-profile.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About | Portfolio of Purwa Wiadnyana, Full-Stack Web Developer',
      description:
        'Motivated as Web Developer with a background in programming languages and web technologies. Experienced in creating and maintaining websites and applications. Committed to working with teams to achieve project goals and enhance technical skills.',

      images: ['/images/opengraph-profile.jpg'],
    },
  }
}

export default function About() {
  return (
    <>
      <SiteAbout />
    </>
  )
}
