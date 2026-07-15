import Image from "next/image";
import { getMovie } from "../../../lib/tmdb";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const movie = await getMovie(id);

  return {
    title: `${movie.title} | CineStream Next`,
    description: movie.overview,
    openGraph: {
      title: movie.title,
      description: movie.overview,
      images: [`https://image.tmdb.org/t/p/w500${movie.poster_path}`],
    },
  };
}

export default async function MoviePage({ params }) {
  const { id } = await params;

  const movie = await getMovie(id);

  return (
    <main className="movie-page">
      <div className="movie-container">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={400}
          height={600}
          priority
        />

        <div className="movie-details">
          <h1>{movie.title}</h1>

          <p>{movie.overview}</p>

          <p>
            <strong>Rating:</strong> ⭐ {movie.vote_average.toFixed(1)}
          </p>

          <p>
            <strong>Release:</strong> {movie.release_date}
          </p>

          <p>
            <strong>Runtime:</strong> {movie.runtime} min
          </p>

          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
    </main>
  );
}