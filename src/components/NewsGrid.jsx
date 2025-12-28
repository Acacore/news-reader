// src/components/NewsGrid.jsx
import NewsCard from './NewsCard';

export default function NewsGrid({ articles }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {articles.map((article) => (
        <NewsCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}