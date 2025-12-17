// /api/news.js
export default async function handler(req, res) {
  try {
    const { category = '', pageSize = '10' } = req.query;
    const token = process.env.NEWS_API_TOKEN;

    if (!token) {
      return res.status(500).json({ error: 'NEWS_API_TOKEN is missing' });
    }

    const url = new URL('https://newsapi.org/v2/top-headlines');
    url.searchParams.set('apiKey', token);
    url.searchParams.set('country', 'us');
    url.searchParams.set('pageSize', pageSize);
    if (category) url.searchParams.set('category', category);

    const response = await fetch(url.toString());
    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: text });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
