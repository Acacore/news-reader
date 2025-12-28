// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import ArticleDetails from './pages/ArticleDetails.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPage.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import { useLoading } from './contexts/LoadingContext.jsx';
import CategoryPage from './pages/CategoryPages.jsx';
import { useState } from 'react';

export default function App() {
  const { loading } = useLoading();
  const [darkMode, setDarkMode] = useState(true); // dark mode by default

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* Loading spinner */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-indigo-600"></div>
        </div>
      )}

      {/* Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded z-50"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* App routing */}
      <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
            
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/article" element={<ArticleDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/:category" element={<CategoryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
