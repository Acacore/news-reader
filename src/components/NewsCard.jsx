// src/components/NewsCard.jsx
import { useNavigate } from 'react-router-dom';

export default function NewsCard({ article }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/article', { state: { article } })}
      className="
        bg-white dark:bg-gray-800 
        rounded-xl 
        shadow-md 
        overflow-hidden 
        hover:shadow-xl 
        transition-transform 
        duration-300 
        cursor-pointer 
        transform-gpu
      "
      style={{ transform: 'translateZ(0)' }} // GPU acceleration hint (helps mobile scroll smoothness)
    >
      {/* Image container with responsive height */}
      <div className="w-full h-40 sm:h-48 md:h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            loading="eager"           // eager for headlines (important ones)
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400 text-sm">No Image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 text-sm sm:text-base">
          {article.title}
        </h3>

        <div className="mt-2 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <span>{article.source_name || 'Unknown Source'}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}