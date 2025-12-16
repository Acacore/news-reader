
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline'; // Optional: install @heroicons/react if you want the icon

export default function ArticleDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">No article data found.</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="mr-4 p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Go back"
          >
            {/* Optional Heroicon - you can replace with text or emoji */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {/* Or just text: <span className="text-lg font-medium">← Back</span> */}
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Article Details</h1>
        </div>
      </header>

      <article className="max-w-5xl mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center text-sm text-gray-600 mb-8 gap-4">
          <span className="font-medium">
            Source: {typeof article.source === 'object' ? article.source.name : article.source}
          </span>
          <span>•</span>
          <time>
            {new Date(article.published_at || article.publishedAt || article.pubDate).toLocaleDateString(undefined, {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>

        {/* Main Image */}
        {(article.image || article.image_url) && (
          <img
            src={article.image || article.image_url}
            alt={article.title}
            className="w-full rounded-xl shadow-lg mb-8 object-cover max-h-96"
            loading="lazy"
          />
        )}

        {/* Description / Summary */}
        {article.description && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Summary</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {article.description}
            </p>
          </div>
        )}

        {/* Full Article Button */}
        <div className="text-center">
          <a
            href={article.url || article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition shadow-lg"
          >
            Read Full Article
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </article>
    </div>
  );
}