// src/components/NewsCard.jsx
export default function NewsCard({ article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      )}
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 dark:text-white">
          {article.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-3">
          {article.description || "No description available"}
        </p>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {article.source_name} • {new Date(article.publishedAt).toLocaleDateString()}
        </div>
      </div>
    </a>
  );
}