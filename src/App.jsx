// src/App.jsx

import { useState, useEffect } from 'react';
import { fetchTopHeadlines } from './API.jsx';
import Headlines from './components/Headlines.jsx';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTopHeadlines()
      .then(setArticles)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleRefresh = () => {
    localStorage.removeItem('gnews_top_headlines_cache');
    setLoading(true);
    setError(null);
    setArticles([]);

    fetchTopHeadlines()
      .then(setArticles)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-8 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Top News Headlines
          </h1>
          <p className="mt-2 text-gray-600">Real-time updates from trusted sources</p>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '🔄 Refreshing...' : '🔄 Refresh Headlines'}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4">
        <Headlines articles={articles} loading={loading} error={error} />
      </main>
    </div>
  );
}

export default App;