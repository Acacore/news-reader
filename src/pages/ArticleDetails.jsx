import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function ArticleDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const article = state?.article;

 
  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <p className="text-lg text-gray-600 mb-6">
            We couldn’t find the article you’re looking for.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Go Back
          </button>
        </div>
      </main>
    );
  }


  const {
    title,
    description,
    image,
    image_url,
    url,
    link,
    source,
    published_at,
    publishedAt,
    pubDate,
  } = article;

  const publishedDate = published_at || publishedAt || pubDate;
  const articleImage = image || image_url;
  const articleUrl = url || link;
  const sourceName = typeof source === "object" ? source?.name : source;

 
  return (
    <div className="min-h-screen bg-gray-50">

      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">
            Article Details
          </h1>
        </div>
      </header>


      <article className="max-w-5xl mx-auto px-4 py-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
          {title}
        </h2>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
          {sourceName && (
            <span className="font-medium">Source: {sourceName}</span>
          )}
          {publishedDate && (
            <>
              <span className="hidden sm:inline">•</span>
              <time dateTime={publishedDate}>
                {new Date(publishedDate).toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </>
          )}
        </div>

        {/* Image */}
        {articleImage && (
          <div className="mb-10">
            <img
              src={articleImage}
              alt={title}
              loading="lazy"
              className="w-full max-h-[420px] object-cover rounded-xl shadow-md"
            />
          </div>
        )}

        {/* Summary */}
        {description && (
          <section className="bg-white rounded-xl shadow-sm p-6 mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Summary
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {description}
            </p>
          </section>
        )}

        {/* CTA */}
        {articleUrl && (
          <div className="text-center">
            <a
              href={articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition shadow-md"
            >
              Read Full Article
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </a>
          </div>
        )}
      </article>
    </div>
  );
}
