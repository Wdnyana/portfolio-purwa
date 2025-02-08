import type { Metadata } from 'next'

import SiteProject from '@/components/site/site-project'

export async function generateMetadata(): Promise<Metadata | undefined> {
  return {
    metadataBase: new URL('https://purwa-widnyana.vercel.app/'),
    title: 'Project | Purwa Wiadnyana Portfolio',
    description:
      'Motivated as Web Developer with a background in programming languages and web technologies. Experienced in creating and maintaining websites and applications. Committed to working with teams to achieve project goals and enhance technical skills.',

    openGraph: {
      type: 'website',
      url: 'https://purwa-widnyana.vercel.app/projects',
      title: 'Project',
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
      title: 'Project',
      description:
        'Motivated as Web Developer with a background in programming languages and web technologies. Experienced in creating and maintaining websites and applications. Committed to working with teams to achieve project goals and enhance technical skills.',

      images: ['/images/opengraph-profile.jpg'],
    },
  }
}

export default function Projects() {
  return (
    <>
      <SiteProject />
    </>
  )
}
