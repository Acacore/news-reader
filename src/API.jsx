const API_URL = 'https://gnews.io/api/v4/top-headlines';
const COUNTRY = 'us';
const LANG = 'en';
const TOKEN = import.meta.env.VITE_GNEWS_TOKEN;

console.log('Loaded GNews token:', TOKEN ? 'Yes (hidden for security)' : 'No - still missing!');

if (!TOKEN || TOKEN.trim() === '' || TOKEN.includes('') || TOKEN.length < 20) {
  console.warn('⚠️ GNews token missing or invalid. Check .env and restart server.');
}



// Better warning: checks if missing or still default
if (!TOKEN || TOKEN.trim() === '' || TOKEN.includes('your_actual')) {
  console.warn('GNews API token is missing or invalid! Add VITE_GNEWS_TOKEN=your_token to .env file');
}

export async function fetchTopHeadlines() {
  if (!TOKEN) {
    throw new Error('GNews API token is missing. Please check your .env file.');
  }

  const url = `${API_URL}?country=${COUNTRY}&lang=${LANG}&token=${TOKEN}`;

  const response = await fetch(url);
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}\n${errorText}`);
  }

  const data = await response.json();
  
  // GNews returns { articles: [...] }
  return data.articles || [];
}