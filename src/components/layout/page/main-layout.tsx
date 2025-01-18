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

      <main className="flex-1 relative px-3 lg:px-6">{children}</main>

      <footer className="bg-secondary">
        <Footer />
      </footer>
    </div>
  )
}
