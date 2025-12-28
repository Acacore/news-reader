import { useNavigate } from 'react-router-dom';

export default function NewsCard({ article }) {
  const navigate = useNavigate();

  // Early return for invalid/missing article
  if (!article?.title) return null;

  const imageUrl = article.urlToImage;
  const source = article.source_name || 'Unknown Source';
  const date = article.publishedAt 
    ? new Date(article.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    : 'Recent';

  return (
    <article
      onClick={() => navigate('/article', { state: { article } })}
      className={`
        group
        bg-white dark:bg-gray-800 
        rounded-xl 
        shadow-md 
        overflow-hidden 
        cursor-pointer 
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
      `}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden bg-gray-100 dark:bg-gray-700">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500 text-sm">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg leading-tight line-clamp-2 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {article.title}
        </h3>

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span className="font-medium">{source}</span>
          <time dateTime={article.publishedAt}>{date}</time>
        </div>
      </div>
    </article>
  );
}