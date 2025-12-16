// src/components/Layout.jsx
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Headlines from './Headlines'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Headlines />                  {/* ← Your big title/banner here */}
      <main className="flex-1">
        <Outlet />                  {/* ← Pages like Home, ArticleDetails render here */}
      </main>
      <Footer />
    </div>
  )
}