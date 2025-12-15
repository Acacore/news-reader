// src/API.jsx

const API_URL = 'https://gnews.io/api/v4/top-headlines';
const COUNTRY = 'us';
const LANG = 'en';
const TOKEN = import.meta.env.VITE_GNEWS_TOKEN;

// Debug log (safe – never exposes the full token)
console.log('GNews token loaded:', TOKEN ? 'Yes (hidden)' : 'No – missing or invalid');

if (!TOKEN || TOKEN.trim() === '' || TOKEN.length < 20) {
  console.warn('⚠️ GNews API token is missing, empty, or too short. Set VITE_GNEWS_TOKEN=your_real_token in .env and restart the server.');
}

const CACHE_KEY = 'gnews_top_headlines_cache';
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes (adjust as needed: 5–15 min is ideal)

export async function fetchTopHeadlines() {
  // Throw early if token is completely missing
  if (!TOKEN || TOKEN.trim() === '') {
    throw new Error('GNews API token is missing. Check your .env file and restart the dev server.');
  }

  // === Caching logic ===
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    try {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        console.log('🟢 Serving headlines from cache');
        return data;
      }
      console.log('🟡 Cache expired – fetching fresh data');
    } catch (e) {
      console.warn('Failed to parse cache, fetching fresh data');
    }
  }

  // === Fresh fetch ===
  // NOTE: GNews now requires &apikey= (not &token=)
  const url = `${API_URL}?country=${COUNTRY}&lang=${LANG}&apikey=${TOKEN}`;

  console.log('🌐 Fetching fresh headlines from GNews');

  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}\n${errorText}`);
  }

  const json = await response.json();
  const articles = json.articles || [];

  // === Save to cache ===
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        data: articles,
        timestamp: Date.now(),
      })
    );
    console.log('💾 Fresh headlines cached for 10 minutes');
  } catch (e) {
    console.warn('Could not cache data (storage full or disabled)');
  }

  return articles;
}