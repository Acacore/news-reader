// src/App.jsx (unchanged)
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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-8 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Top News Headlines
          </h1>
          <p className="mt-2 text-gray-600">Real-time updates from trusted sources worldwide</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4">
        <Headlines articles={articles} loading={loading} error={error} />
      </main>
    </div>
  );
}

export default App;