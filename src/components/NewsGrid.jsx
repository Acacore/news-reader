// src/components/NewsGrid.jsx
import NewsCard from './NewsCard';

export default function NewsGrid({ articles }) {
  return (
    <div 
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-4
      sm:gap-6
      lg:gap-8             // comfortable on desktop
    ">
      {articles.map((article) => (
        <NewsCard 
          key={article.article_id || article.url} 
          article={article} 
        />
      ))}
    </div>
  );
}