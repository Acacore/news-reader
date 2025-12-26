import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// export default function Layout() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
//       <Header />
//       <main className="flex-1 relative z-0">
//         <Outlet /> {/* Pages like Home, ArticleDetails render here */}
//       </main>
//       <Footer />
//     </div>
//   )
// }

export default function Layout() {
  return (
    // 'w-full' ensures the layout doesn't shrink smaller than the viewport width
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 w-full overflow-x-hidden">
      <Header />
      {/* Removed 'relative z-0' to avoid stacking context issues on mobile */}
      <main className="flex-1">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  )
}