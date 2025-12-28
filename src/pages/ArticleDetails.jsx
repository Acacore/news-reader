// src/pages/ArticleDetails.jsx (or wherever you place it)
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  CalendarIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline'; // npm install @heroicons/react

export default function ArticleDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article?.title) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Article Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The requested article could not be loaded. It may have been removed or is temporarily unavailable.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Normalize fields (different APIs use different names)
  const title = article.title;
  const image = article.urlToImage || article.image || article.image_url;
  const description = article.description || article.summary || article.content;
  const source = article.source_name || (typeof article.source === 'object' ? article.source.name : article.source) || 'Unknown';
  const url = article.url || article.link;
  const date = article.publishedAt || article.published_at || article.pubDate;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Sticky Header with subtle blur */}
      <header className="sticky top-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm transition-all">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="mr-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Go back"
          >
            <ArrowLeftIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <span className="text-lg font-medium text-gray-800 dark:text-gray-200 truncate">
            Article
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6 text-gray-900 dark:text-white">
          {title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600 dark:text-gray-400 mb-10">
          <div className="flex items-center gap-2">
            <GlobeAltIcon className="w-5 h-5" />
            <span className="font-medium">{source}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            <time dateTime={date}>
              {date
                ? new Date(date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })
                : 'Date unavailable'}
            </time>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-10 bg-gray-200 dark:bg-gray-800">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-auto aspect-[16/9] object-cover"
              loading="lazy"
            />
          ) : (
            <div className="aspect-[16/9] flex items-center justify-center text-gray-500 dark:text-gray-500 text-xl font-medium">
              Featured Image Not Available
            </div>
          )}
        </div>

        {/* Summary / Lead */}
        {description && (
          <div className="prose dark:prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-5">Summary</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-lg rounded-xl shadow-lg transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Read the Full Article
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}