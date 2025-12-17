// src/API.jsx

const THENEWS_URL = 'https://api.thenewsapi.com/v1/news/headlines';
const GNEWS_URL = 'https://gnews.io/api/v4/top-headlines';

const THENEWS_TOKEN = import.meta.env.VITE_THENEWSAPI_TOKEN;
const GNEWS_TOKEN = import.meta.env.VITE_GNEWS_TOKEN;

console.log('API tokens loaded:', {
  thenewsapi: THENEWS_TOKEN ? 'Yes' : 'No',
  gnews: GNEWS_TOKEN ? 'Yes' : 'No'
});

const CACHE_KEY = 'news_headlines_cache';
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

// In fetchFromTheNewsAPI()

// In fetchFromGNews() – optional, but add category for consistency


async function fetchFromTheNewsAPI() {
  const url = `${THENEWS_URL}?locale=us&language=en&api_token=${THENEWS_TOKEN}&limit=50`;
  //const url = `${THENEWS_URL}?locale=us&language=en&categories=general&api_token=${THENEWS_TOKEN}&limit=9`;
  //const url = `${THENEWS_URL.replace('headlines', 'top')}?locale=us&language=en&api_token=${THENEWS_TOKEN}&limit=50`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('The News API failed');
  const json = await res.json();
  console.log('The News API full response:', json);
  console.log(json.data)
  return json.data || [];
}

async function fetchFromGNews() {
  const url = `${GNEWS_URL}?category=general&country=us&lang=en&max=9&apikey=${GNEWS_TOKEN}`;
  //const url = `${GNEWS_URL}?country=us&lang=en&category=general&apikey=${GNEWS_TOKEN}`;
  console.log('Fetching from GNews:', url.replace(GNEWS_TOKEN, '***')); // Safe debug log

  const res = await fetch(url);
  // if (!res.ok) {
  //   console.error('GNews error status:', res.status);
  //   throw new Error(`GNews failed: ${res.status}`);
  // }
  if (!res.ok) {
  const errorText = await res.text();
  console.error('API Error Response:', errorText);
  throw new Error(`API failed: ${res.status} – ${errorText}`);
}
  const json = await res.json();
  console.log('GNews raw response:', json); // Optional: remove later
  return json.articles || [];
}

export async function fetchTopHeadlines() {
  // Check cache first
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    try {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        console.log('Serving from cache');
        console.log(data)
        return data;
      }
    } catch (e) {
      console.log(e)
    }
  }

  // Try The News API first
  if (THENEWS_TOKEN && THENEWS_TOKEN.trim() !== '') {
    try {
      console.log('Trying The News API...');
      const articles = await fetchFromTheNewsAPI();
      if (articles.length > 0) {
        cacheAndReturn(articles, 'The News API');
        return articles;
      }
    } catch (e) {
      console.warn('The News API failed, falling back to GNews');
    }
  }

  // Fallback to GNews
  if (GNEWS_TOKEN && GNEWS_TOKEN.trim() !== '') {
    try {
      console.log('Trying GNews as fallback...');
      const articles = await fetchFromGNews();
      if (articles.length > 0) {
        cacheAndReturn(articles, 'GNews');
        return articles;
      }
    } catch (e) {
      console.warn('GNews also failed');
    }
  }

  throw new Error('Both news APIs unavailable. Check tokens or connection.');
}

function cacheAndReturn(articles, source) {
  console.log(`Loaded ${articles.length} headlines from ${source}`);
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data: articles,
      timestamp: Date.now(),
    }));
  } catch (e) {}
}