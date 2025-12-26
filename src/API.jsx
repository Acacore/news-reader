// src/API.jsx - Client-side API wrapper calling Vercel serverless function

const CACHE_KEY_PREFIX = 'newsapi_cache_';
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

// Supported categories
export const categories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology'
];

/**
 * Generic fetch function for any category from serverless endpoint
 * @param {string} category - category name, '' for general
 * @param {number} pageSize - number of articles to fetch
 */
export async function fetchNews({ category = '', pageSize = 20 } = {}) {
  const cacheKey = `${CACHE_KEY_PREFIX}${category || 'general'}_${pageSize}`;
  const cached = localStorage.getItem(cacheKey);

  // Return cached data if available
  if (cached) {
    try {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        console.log(`🟢 Serving ${category || 'general'} news from cache`);
        return data;
      }
    } catch (e) {
      console.warn('Cache parse failed:', e);
    }
  }

  // Build URL for serverless endpoint
  const url = new URL('/api/news', window.location.origin);
  if (category) url.searchParams.set('category', category);
  url.searchParams.set('pageSize', pageSize);

  console.log(`🌐 Fetching fresh ${category || 'general'} news from serverless function`);

  const response = await fetch(url.toString());
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Serverless news request failed: ${response.status} – ${errorText}`);
  }

  const json = await response.json();
  const articles = json.articles || [];

  // Map articles to proper fields for cards and keep only those with images
  const mappedArticles = articles
    .filter(article => article.urlToImage
      &&
    article.urlToImage.startsWith('https://')
    )
    .map(article => ({
      article_id: article.url,
      title: article.title,
      description: article.description,
      urlToImage: article.urlToImage,
      source_name: article.source.name,
      publishedAt: article.publishedAt,
      url: article.url
    }));

  // Cache results
  try {
    localStorage.setItem(
      cacheKey,
      JSON.stringify({ data: mappedArticles, timestamp: Date.now() })
    );
    console.log(`💾 Cached ${mappedArticles.length} articles for ${category || 'general'}`);
  } catch (e) {
    console.warn('Failed to cache:', e);
  }

  return mappedArticles;
}

/**
 * Fetch hot news (top 5 general news)
 */
export function fetchHotNews() {
  return fetchNews({ category: 'general', pageSize: 5 });
}

/**
 * Fetch headlines for a category (includes images for cards)
 */
export function fetchHeadlines(category = '') {
  return fetchNews({ category, pageSize: 20 });
}
