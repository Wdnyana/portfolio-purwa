import Footer from './footer'
import Navbar from './navbar'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      <main className="flex-1 relative">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
