import fetch from 'node-fetch';

export default async function handler(req, res) {
 const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${process.env.NEWS_API_TOKEN}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
