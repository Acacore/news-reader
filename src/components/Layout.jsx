import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    // 'relative' here helps fix mobile painting issues
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 relative">
      <Header />
      {/* Removed 'relative z-0' - this is usually what causes the "solid color" glitch */}
      <main className="flex-1 w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}