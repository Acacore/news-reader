// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ArticleDetails from './pages/ArticleDetails'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>     {/* ← Only call Layout here */}
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
          {/* Add more pages here */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}