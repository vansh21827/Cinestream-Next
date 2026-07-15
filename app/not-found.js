import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container">
      <h1>404</h1>
      <p>Movie not found.</p>

      <Link href="/">Go Home</Link>
    </main>
  );
}