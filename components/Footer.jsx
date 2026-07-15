import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo"> CineStream Next</h2>

        <p className="footer-description">
          Discover trending and popular movies powered by TMDB.
        </p>

        <div className="footer-divider"></div>

        <p className="footer-credit">
          © {new Date().getFullYear()} CineStream Next • Built with Next.js 16 &
          TMDB API
        </p>
      </div>
    </footer>
  );
}