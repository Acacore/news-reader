// src/components/NewsGrid.jsx
import NewsCard from './NewsCard';

export default function NewsGrid({ articles }) {
  return (
    <div 
      className="
        grid 
        grid-cols-1           // 1 column on mobile (<640px)
        sm:grid-cols-2        // 2 columns on tablet/small screens (≥640px)
        lg:grid-cols-3        // 4 columns on desktop/large screens (≥1024px)
        gap-5                 // base gap
        sm:gap-6              // slightly larger on tablet
        lg:gap-6              // comfortable on desktop
      "
    >
      {articles.map((article) => (
        <NewsCard 
          key={article.article_id || article.url} 
          article={article} 
        />
      ))}
    </div>
  );
}