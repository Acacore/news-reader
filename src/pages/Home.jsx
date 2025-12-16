// src/pages/Home.jsx
import { useState, useEffect } from 'react'
import { fetchTopHeadlines } from '../API'

export default function Home() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Load news on mount
  useEffect(() => {
    loadNews()
  }, [])

  const loadNews = () => {
    setLoading(true)
    setError(null)

    fetchTopHeadlines()
      .then((data) => {
        setArticles(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message || 'Failed to load news. Please try again.')
        setLoading(false)
      })
  }

  const handleRefresh = () => {
    localStorage.removeItem('news_headlines_cache') // Clear cache
    loadNews()
  }

  // Loading State
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen -mt-32">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-indigo-600"></div>
        <p className="mt-8 text-2xl text-gray-600 font-medium">Loading latest news...</p>
      </div>
    )
  }

  // Error State
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen -mt-32 text-center px-4">
        <p className="text-3xl font-bold text-red-600 mb-6">Oops! Something went wrong</p>
        <p className="text-xl text-gray-700 mb-8 max-w-md">{error}</p>
        <button
          onClick={handleRefresh}
          className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-xl shadow-lg transition transform hover:scale-105"
        >
          Try Again
        </button>
      </div>
    )
  }

  // Success State - News Grid
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Refresh Button */}
      <div className="text-center mb-12">
        <button
          onClick={handleRefresh}
          disabled={loading}
          className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-60 text-white font-bold text-lg rounded-xl shadow-2xl transition transform hover:scale-105"
        >
          {loading ? 'Refreshing...' : 'Refresh News'}
        </button>
      </div>

      {/* Articles Grid */}
      {articles.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-600">No articles available at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <article
              key={article.uuid || article.url || article.title}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 flex flex-col"
            >
              {/* Image - supports both GNews (urlToImage) and TheNewsAPI (image) */}
              {(article.urlToImage || article.image) && (
                <div className="h-56 overflow-hidden bg-gray-100">
                  <img
                    src={article.urlToImage || article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { e.target.style.display = 'none' }} // Hide broken images gracefully
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-3">
                  {article.title}
                </h2>

                <p className="text-gray-600 mb-6 line-clamp-4 flex-1">
                  {article.description || article.snippet || 'No preview available.'}
                </p>

                {/* Meta Info */}
                <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                  <span className="font-semibold">
                    {typeof article.source === 'object' ? article.source.name : article.source || 'Unknown Source'}
                  </span>
                  <span>
                    {new Date(article.published_at || article.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                {/* Read More Link */}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center text-indigo-600 hover:text-indigo-800 font-bold text-lg transition"
                >
                  Read full article
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}