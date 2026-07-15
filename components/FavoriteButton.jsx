"use client";

import { useEffect, useState } from "react";

export default function FavoriteButton({ movie }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorite(favorites.some((m) => m.id === movie.id));
  }, [movie.id]);

  function toggleFavorite(e) {
    e.preventDefault(); // Prevent navigation when clicking the heart

    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    let updated;

    if (favorites.some((m) => m.id === movie.id)) {
      updated = favorites.filter((m) => m.id !== movie.id);
      setFavorite(false);
    } else {
      updated = [...favorites, movie];
      setFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    window.dispatchEvent(new Event("favoritesUpdated"));
  }

  return (
    <button
      onClick={toggleFavorite}
      className="favorite-btn"
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
    >
      {favorite ? "❤️" : "🤍"}
    </button>
  );
}