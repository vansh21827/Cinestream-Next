import { searchMovies } from "../../../lib/tmdb";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json([]);
  }

  const data = await searchMovies(query);

  return NextResponse.json(data.results);
}