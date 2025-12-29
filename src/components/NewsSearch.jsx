// src/components/NewsSearch.jsx
import { useState } from "react";

export default function NewsSearch({ onSearch, loading = false }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim() || loading) return;
    onSearch(query.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="mb-6 w-full">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <input
          type="search"
          placeholder="Search news by keyword..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl
            focus:ring-2 focus:ring-indigo-500 focus:border-transparent
            text-[#0a0f4a] disabled:bg-gray-100 w-full"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl
            hover:bg-indigo-700 transition disabled:opacity-50
            w-full sm:w-auto"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </div>
  );
}
