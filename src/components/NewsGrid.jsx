// // src/components/NewsGrid.jsx
// import NewsCard from './NewsCard';

// export default function NewsGrid({ articles }) {
//   return (
//     <div 
//       className="
//       grid
//       grid-cols-1
//       sm:grid-cols-2
//       md:grid-cols-4
//       lg:grid-cols-4
//       gap-4
//       sm:gap-6
//       lg:gap-8             // comfortable on desktop
//     ">
//       {articles.map((article) => (
//         <NewsCard 
//           key={article.article_id || article.url} 
//           article={article} 
//         />
//       ))}
//     </div>
//   );
// }



// src/components/NewsGrid.jsx
import NewsCard from './NewsCard';

export default function NewsGrid({ articles = [] }) {
  if (!articles.length) return null;

  return (
    <section
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
        sm:gap-6
        lg:gap-8
      "
    >
      {articles.map((article) => (
        <NewsCard
          key={article.article_id || article.url}
          article={article}
        />
      ))}
    </section>
  );
}
