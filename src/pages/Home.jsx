// src/pages/HomePage.jsx

import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import NewsSearch from "../components/NewsSearch";
import { fetchHotNews, fetchHeadlines, searchNews } from "../API";


// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomePage() {
  const navigate = useNavigate();

  /* -------------------- STATE -------------------- */
  const [hotNews, setHotNews] = useState([]);
  const [hotLoading, setHotLoading] = useState(true);
  const [hotError, setHotError] = useState(null);

  const [activeCategory, setActiveCategory] = useState("general");
  const [categoryHeadlines, setCategoryHeadlines] = useState([]);
  const [headlinesLoading, setHeadlinesLoading] = useState(true);
  const [headlinesError, setHeadlinesError] = useState(null);

  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  /* -------------------- EFFECTS -------------------- */

  // Fetch hot news
  useEffect(() => {
    loadHotNews();
  }, []);

  const loadHotNews = async () => {
    setHotLoading(true);
    try {
      const data = await fetchHotNews();
      setHotNews(data);
    } catch (err) {
      setHotError(err.message);
    } finally {
      setHotLoading(false);
    }
  };

  // Fetch headlines by category
  useEffect(() => {
    if (isSearching) return;

    setHeadlinesLoading(true);
    fetchHeadlines(activeCategory)
      .then(setCategoryHeadlines)
      .catch(err => setHeadlinesError(err.message))
      .finally(() => setHeadlinesLoading(false));
  }, [activeCategory, isSearching]);

  /* -------------------- HANDLERS -------------------- */

  const handleSearch = useCallback(async (query) => {
  setSearchLoading(true);
  setIsSearching(true);
  try {
    const data = await searchNews({ query });
    setSearchResults(data);
  } finally {
    setSearchLoading(false);
  }
}, []);


  const clearSearch = () => {
    setIsSearching(false);
    setSearchResults([]);
  };

  const refreshHotNews = () => {
    localStorage.removeItem("newsapi_cache_general_5");
    loadHotNews();
  };

  const refreshHeadlines = () => {
    localStorage.removeItem(`newsapi_cache_${activeCategory}_20`);
    setHeadlinesLoading(true);
    fetchHeadlines(activeCategory)
      .then(setCategoryHeadlines)
      .finally(() => setHeadlinesLoading(false));
  };

  /* -------------------- DISPLAYED DATA -------------------- */

  const displayedArticles = isSearching ? searchResults : categoryHeadlines;

  /* -------------------- RENDER -------------------- */
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">

      {/* Search */}
      <NewsSearch onSearch={handleSearch} loading={searchLoading} />

      {isSearching && (
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-500">Showing search results</p>
          <button
            onClick={clearSearch}
            className="text-sm text-indigo-600 hover:underline"
          >
            Clear search
          </button>
        </div>
      )}

      {/* ---------------- HOT NEWS ---------------- */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Breaking News</h1>
          <button
            onClick={refreshHotNews}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:scale-105 transition"
          >
            Refresh
          </button>
        </div>

        {hotLoading ? (
          <p className="text-center py-16 text-gray-500">Loading hot news...</p>
        ) : hotError ? (
          <p className="text-center text-red-600">{hotError}</p>
        ) : (
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            loop={hotNews.length > 1}
            breakpoints={{ 0: { slidesPerView: 1, spaceBetween: 15 } }}
          >
            {hotNews.map((article, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => navigate("/article", { state: { article } })}
                  className="relative h-72 rounded-xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex items-end">
                    <h2 className="text-white font-bold text-lg line-clamp-2">
                      {article.title}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>

      {/* ---------------- HEADLINES / SEARCH RESULTS ---------------- */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">
            {isSearching ? "Search Results" : "Headlines"}
          </h2>

          {!isSearching && (
            <button
              onClick={refreshHeadlines}
              className="px-3 py-1 bg-blue-600 text-white rounded-lg"
            >
              Refresh
            </button>
          )}
        </div>

        {(headlinesLoading || searchLoading) && (
          <p className="text-center text-gray-500 py-10">Loading articles...</p>
        )}

        {!headlinesLoading && displayedArticles.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            No articles found.
          </p>
        )}

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {displayedArticles.map((article, index) => (
    <div
      key={index}
      onClick={() => navigate("/article", { state: { article } })}
      className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden group"
    >
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-3 sm:p-4">
        <h3
          className="
            mb-2
            text-sm sm:text-base
            font-semibold
            text-gray-900 dark:text-white
            line-clamp-2
            transition-colors
            group-hover:text-indigo-600 dark:group-hover:text-indigo-400
          "
        >
          {article.title}
        </h3>

        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{article.source_name || "Unknown"}</span>
          <time dateTime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString()}
          </time>
        </div>
      </div>
    </div>
  ))}
</div>

      </section>
    </div>
  );
}
