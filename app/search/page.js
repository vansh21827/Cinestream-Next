"use client";

import { useEffect, useState } from "react";
import MovieGrid from "../../components/MovieGrid";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query.trim()) {
        setMovies([]);
        return;
      }

      const res = await fetch(
        `/api/search?query=${encodeURIComponent(query)}`
      );

      const data = await res.json();

      setMovies(data);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <main className="container">
      <h1>Search Movies</h1>

      <input
        className="search-input"
        placeholder="Search any movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {movies.length > 0 && (
        <MovieGrid movies={movies} />
      )}
    </main>
  );
}