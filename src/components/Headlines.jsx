// src/components/Headlines.jsx
import { useNavigate } from 'react-router-dom';

export default function Headlines({ articles = [], loading = false, error = null, type = 'hot' }) {
  // type = 'hot' | 'headlines'
  const navigate = useNavigate();

  // Loading State
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-xl text-gray-600">
          {type === 'hot' ? 'Loading hot news...' : 'Loading headlines...'}
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-2xl font-semibold text-red-600 mb-4">Something went wrong</p>
        <p className="text-gray-600 max-w-md mx-auto">
          {error}
          <br />
          Please try refreshing the page.
        </p>
      </div>
    );
  }


  // Render Hot News (cards with image + description)
  if (type === 'hot') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {articles.map((article, index) => (
          <article
            key={index}
            onClick={() => navigate('/article', { state: { article } })}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer group"
          >
            {/* Image */}
            {article.urlToImage ? (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">No Image</span>
              </div>
            )}

            <div className="p-6 flex flex-col flex-grow">
              <header className="mb-4">
                <h2 className="text-lg font-bold text-gray-900 line-clamp-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
              </header>

              {article.description && (
                <p className="text-gray-700 text-sm mb-4 line-clamp-3 flex-grow">
                  {article.description}
                </p>
              )}

              <footer className="mt-auto text-xs text-gray-500 flex justify-between items-center">
                <span className="font-medium">{article.source.name || 'Unknown Source'}</span>
                <time>
                  {new Date(article.publishedAt).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </footer>
            </div>
          </article>
        ))}
      </div>
    );
  }

  // Render Headlines (titles only)
  return (
    <ul className="space-y-4">
      {articles.map((article, index) => (
        <li
          key={index}
          onClick={() => navigate('/article', { state: { article } })}
          className="cursor-pointer hover:text-blue-600 transition-colors"
        >
          <h3 className="font-medium line-clamp-2">{article.title}</h3>
          <p className="text-xs text-gray-500">
            {article.source.name} •{' '}
            {new Date(article.publishedAt).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </li>
      ))}
    </ul>
  );
}
