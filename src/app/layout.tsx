import type { Metadata } from 'next'

import { popins } from '@/lib/font'
import './styles/globals.css'

import { ThemeProvider } from '@/components/providers/theme-provider'

export async function generateMetadata(): Promise<Metadata | undefined> {
  return {
    metadataBase: new URL('https://purwa-widnyana.vercel.app/'),
    title: 'Home | Portfolio Purwa Purwa Wiadnyana',
    description:
      'Motivated as Web Developer with a background in programming languages and web technologies. Experienced in creating and maintaining websites and applications. Committed to working with teams to achieve project goals and enhance technical skills.',

    openGraph: {
      type: 'website',
      url: 'https://purwa-widnyana.vercel.app/',
      title: 'Home',
      description:
        'Motivated as Web Developer with a background in programming languages and web technologies. Experienced in creating and maintaining websites and applications. Committed to working with teams to achieve project goals and enhance technical skills.',

      images: ['/images/opengraph-profile.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Home',
      description:
        'Motivated as Web Developer with a background in programming languages and web technologies. Experienced in creating and maintaining websites and applications. Committed to working with teams to achieve project goals and enhance technical skills.',

      images: ['/images/opengraph-profile.jpg'],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        {/* metadata disini*/}
      </head>

      <body className={`${popins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
