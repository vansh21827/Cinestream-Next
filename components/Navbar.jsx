"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">
          CINESTREAM NEXT 
        </Link>

        <nav>
          <Link
            href="/"
            className={pathname === "/" ? "active" : ""}
          >
            Home
          </Link>

          <Link
            href="/favorites"
            className={pathname === "/favorites" ? "active" : ""}
          >
            Favorites
          </Link>

          <Link
            href="/search"
            className={pathname === "/search" ? "active" : ""}
          >
            Search
          </Link>
        </nav>
      </div>
    </header>
  );
}