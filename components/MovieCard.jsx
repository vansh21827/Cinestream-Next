import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE;

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`} className="movie-card">
      <div className="poster-wrapper">
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />

        <FavoriteButton movie={movie} />
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p className="rating">
          ⭐ {movie.vote_average.toFixed(1)}
        </p>

        <p className="year">
          {movie.release_date?.slice(0, 4)}
        </p>
      </div>
    </Link>
  );
}