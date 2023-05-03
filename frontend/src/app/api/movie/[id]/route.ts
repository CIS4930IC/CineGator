import { NextResponse, NextRequest } from "next/server"
const api = "6ae531cd3f5d9e7a666941e3d3669e89"
export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: string }
  }
) {
  const { id } = params
  const fetchMovie = fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api}`
  ).then(res => res.json())
  const fetchTrailer = fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api}&language=en-US`
  ).then(res => res.json())
  const formData = new URLSearchParams()
  formData.append("movieID", params.id)
  const fetchReview = fetch('/backend/reviews', {
    body: formData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: "POST",
  }).then(res => res.json())
  const [movie, trailer, reviews] = await Promise.all([
    fetchMovie,
    fetchTrailer,
    fetchReview,
  ])
  const videoId =
    trailer.results?.find(video => video.type === "Trailer")?.key ||
    trailer?.results?.[0]?.key
  const videoLink = `https://www.youtube.com/embed/${videoId}`
  return NextResponse.json({ ...movie, videoLink, reviews })
}
