// src/pages/HomePage.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Headlines from '../components/Headlines.jsx';
import { fetchHotNews, fetchHeadlines, categories } from '../API';
import React from 'react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HomePage() {
  const navigate = useNavigate();

  const [hotNews, setHotNews] = useState([]);
  const [hotLoading, setHotLoading] = useState(true);
  const [hotError, setHotError] = useState(null);

  const [activeCategory, setActiveCategory] = useState('general');
  const [categoryHeadlines, setCategoryHeadlines] = useState([]);
  const [headlinesLoading, setHeadlinesLoading] = useState(true);
  const [headlinesError, setHeadlinesError] = useState(null);

  // Fetch Hot News
  useEffect(() => {
    setHotLoading(true);
    fetchHotNews()
      .then(data => setHotNews(data))
      .catch(err => setHotError(err.message))
      .finally(() => setHotLoading(false));
  }, []);

  // Fetch Headlines for active category
  useEffect(() => {
    setHeadlinesLoading(true);
    fetchHeadlines(activeCategory)
      .then(data => setCategoryHeadlines(data))
      .catch(err => setHeadlinesError(err.message))
      .finally(() => setHeadlinesLoading(false));
  }, [activeCategory]);

  // Refresh Functions
  const refreshHotNews = () => {
    localStorage.removeItem('newsapi_cache_general_5');
    setHotLoading(true);
    fetchHotNews()
      .then(data => setHotNews(data))
      .catch(err => setHotError(err.message))
      .finally(() => setHotLoading(false));
  };

  const refreshHeadlines = () => {
    localStorage.removeItem(`newsapi_cache_${activeCategory}_20`);
    setHeadlinesLoading(true);
    fetchHeadlines(activeCategory)
      .then(data => setCategoryHeadlines(data))
      .catch(err => setHeadlinesError(err.message))
      .finally(() => setHeadlinesLoading(false));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10 sm:space-y-16">

      {/* Hot News Carousel */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Breaking News</h1>
          <button
            onClick={refreshHotNews}
            className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Refresh
          </button>
        </div>

        {hotLoading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-xl text-gray-600">Loading hot news...</p>
          </div>
        ) : hotError ? (
          <div className="text-center py-20 text-red-600">{hotError}</div>
        ) : hotNews.length === 0 ? (
          <div className="text-center py-20 text-gray-600">No hot news available.</div>
        ) : (
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {hotNews.map((article, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative w-full h-64 sm:h-72 md:h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => navigate('/article', { state: { article } })}
                >
                  {/* Image */}
                  {article.urlToImage ? (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <span className="inline-block bg-red-600 px-3 py-1 rounded-full text-xs font-semibold uppercase mb-2 animate-pulse">
                      Trending
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold line-clamp-2">{article.title}</h2>
                    {article.description && (
                      <p className="text-sm sm:text-base mt-2 line-clamp-3">{article.description}</p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>

      {/* Headlines Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Headlines</h2>
          <button
            onClick={refreshHeadlines}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition transform hover:scale-105"
          >
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {categoryHeadlines.map((article, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 cursor-pointer"
              onClick={() => navigate('/article', { state: { article } })}
            >
              {article.urlToImage ? (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover"
                />
              ) : (
                <div className="w-full h-40 sm:h-48 md:h-56 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">No Image</span>
                </div>
              )}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 text-sm sm:text-base">{article.title}</h3>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex justify-between">
                  <span>{article.source_name || 'Unknown'}</span>
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
