// src/components/Headlines.jsx

import { useNavigate } from 'react-router-dom';   // ← ADD THIS LINE AT THE TOP

export default function Headlines({ articles = [], loading = false, error = null }) {
  const navigate = useNavigate();   // ← ADD THIS LINE (inside the component)

  // ... your loading, error, and empty states remain unchanged ...

  if (articles.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-600">No headlines available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {articles.map((article) => (
        <article
          key={article.uuid || article.url || article.title}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer group"
          onClick={() => navigate('/article', { state: { article } })}  // ← CHANGE THIS LINE
        >
          {/* Image */}
          {(article.image || article.image_url) && (
            <img
              src={article.image || article.image_url}
              alt={article.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
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
              <span className="font-medium">
                {typeof article.source === 'object' ? article.source.name : article.source}
              </span>

              <time>
                {new Date(article.published_at || article.publishedAt).toLocaleDateString(undefined, {
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