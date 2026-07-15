"use client";

import { useEffect, useState } from "react";
import MovieGrid from "../../components/MovieGrid";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    function loadFavorites() {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

      setFavorites(storedFavorites);
    }

    // Load favorites on page load
    loadFavorites();

    // Refresh favorites whenever they are updated
    window.addEventListener("favoritesUpdated", loadFavorites);

    return () => {
      window.removeEventListener(
        "favoritesUpdated",
        loadFavorites
      );
    };
  }, []);

  return (
    <main className="container">
      <h1>❤️ My Favorite Movies</h1>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <h2>No favorites yet</h2>
          <p>
            Click the heart icon on any movie to add it to your favorites.
          </p>
        </div>
      ) : (
        <MovieGrid movies={favorites} />
      )}
    </main>
  );
}