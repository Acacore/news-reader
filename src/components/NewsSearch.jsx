// src/components/NewsSearch.jsx
import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

export default function NewsSearch({ onSearch, loading }) {
  const [query, setQuery] = useState("");

  // Debounce the input to avoid API spam
  const debouncedQuery = useDebounce(query, 600);

  // Auto-search when user stops typing
  useEffect(() => {
    if (!debouncedQuery.trim()) return;
    onSearch(debouncedQuery.trim());
  }, [debouncedQuery, onSearch]);

  return (
    <div className="w-full mb-8">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {/* Input */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search news, topics, keywords..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 pr-12 rounded-xl text-white placeholder-gray-400 bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
          />

          {/* Loading Indicator */}
          {loading && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 animate-pulse">
              Searching…
            </span>
          )}
        </div>

        {/* Search Button */}
        <button
          onClick={() => query.trim() && onSearch(query.trim())}
          disabled={loading}
          className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
}
