// src/components/Headlines.jsx

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
          Please check your internet connection or API token and try again.
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
          key={article.url} // Using url as a unique key (more reliable than index)
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
        >
          {article.image && (
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img
                src={article.image}
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
              <span className="font-medium">{article.source.name}</span>
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