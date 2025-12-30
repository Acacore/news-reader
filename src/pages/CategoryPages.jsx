// // src/pages/CategoryPage.jsx
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchHeadlines } from '../API';

// export default function CategoryPage() {
//   const { category } = useParams(); // "technology", "business", etc.

//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const validCategory = category?.toLowerCase();

//     if (!['business','entertainment','sports','technology'].includes(validCategory)) {
//       setError("Category not supported");
//       setLoading(false);
//       return;
//     }

//     let mounted = true;

//     async function load() {
//       try {
//         setLoading(true);
//         const data = await fetchHeadlines(validCategory);
//         if (mounted) setArticles(data);
//       } catch (err) {
//         if (mounted) setError(err.message);
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     }

//     load();

//     return () => { mounted = false; };
//   }, [category]);

//   const pageTitle = category 
//     ? category.charAt(0).toUpperCase() + category.slice(1)
//     : 'Latest News';

//   if (loading) return <div className="text-center py-20">Loading {pageTitle}...</div>;
//   if (error) return <div className="text-center py-20 text-red-600">Error: {error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">{pageTitle}</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {articles.map(article => (
//           <div key={article.article_id} className="border rounded-lg overflow-hidden">
//             {article.urlToImage && (
//               <img 
//                 src={article.urlToImage} 
//                 alt={article.title}
//                 className="w-full h-48 object-cover"
//               />
//             )}
//             <div className="p-4">
//               <h3 className="font-bold mb-2">{article.title}</h3>
//               <p className="text-sm text-gray-600 mb-2">{article.description}</p>
//               <div className="text-xs text-gray-500">
//                 {article.source_name} • {new Date(article.publishedAt).toLocaleDateString()}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// src/pages/CategoryPage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchHeadlines } from '../API';
import NewsGrid from '../components/NewsGrid';


const SUPPORTED_CATEGORIES = [
  'business',
  'entertainment',
  'sports',
  'technology',
];

export default function CategoryPage() {
  const { category } = useParams();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const validCategory = category?.toLowerCase();

    if (!SUPPORTED_CATEGORIES.includes(validCategory)) {
      setError('Category not supported');
      setLoading(false);
      return;
    }

    let isMounted = true;

    async function loadNews() {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchHeadlines(validCategory);

        if (isMounted) {
          setArticles(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to load news');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadNews();

    return () => {
      isMounted = false;
    };
  }, [category]);

  const pageTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : 'Latest News';

  // ----------------------------
  // Render states
  // ----------------------------

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading {pageTitle}...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="">
      
      <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {pageTitle}
      </h1>

      <NewsGrid articles={articles} />
    </main>
    </div>
  );
}
