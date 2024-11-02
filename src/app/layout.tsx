import type { Metadata } from 'next'

import { popins } from '@/lib/font'
import './styles/globals.css'

import { ThemeProvider } from '@/components/providers/theme-provider'

export const metadata: Metadata = {
  title: 'Portfolio | Purwa Wiadnyana',
  description:
    'Motivated as Web Developer with a background in programming languages and web technologies. Experienced in creating and maintaining websites and applications. Committed to working with teams to achieve project goals and enhance technical skills.',
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
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
