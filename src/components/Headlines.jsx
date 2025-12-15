export default function Headlines({ articles = [], loading = false, error = null }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-xl text-gray-600">Loading top headlines...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-2xl font-semibold text-red-600 mb-4">Something went wrong</p>
        <p className="text-gray-600 max-w-md mx-auto">
          {error}
          <br />
          Please check your internet connection or try again later.
        </p>
      </div>
    );
  }

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
          key={article.uuid || article.url || article.title} // Handles both APIs (uuid from The News API, url from GNews)
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
        >
          {/* Image – works with both image_url (The News API) and image (GNews) */}
          {(article.image || article.image_url) && (
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img
                src={article.image || article.image_url}
                alt={article.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </a>
          )}

          <div className="p-6 flex flex-col flex-grow">
            <header className="mb-4">
              <h2 className="text-lg font-bold text-gray-900 line-clamp-3 hover:text-blue-600 transition-colors">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h2>
            </header>

            {article.description && (
              <p className="text-gray-700 text-sm mb-4 line-clamp-3 flex-grow">
                {article.description}
              </p>
            )}

            <footer className="mt-auto text-xs text-gray-500 flex justify-between items-center">
              {/* Source – handles object (GNews) or string (The News API) */}
              <span className="font-medium">
                {typeof article.source === 'object' ? article.source.name : article.source}
              </span>

              {/* Published date – handles published_at or publishedAt */}
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