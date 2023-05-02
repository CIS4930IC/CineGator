import { NextResponse } from "next/server"
import { reviews } from "./testReviewData"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("movie_id")
  return NextResponse.json(
    reviews.filter(({ movieId }) => movieId === Number(id)).map(({ id }) => id)
  )
}
