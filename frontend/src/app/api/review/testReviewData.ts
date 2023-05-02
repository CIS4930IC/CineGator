interface Review {
  id: number
  userId: number
  movieId: number
  title: string
  rating: number
  body: string
}

const reviews: Review[] = [
  {
    id: 1,
    userId: 1,
    movieId: 12,
    title: "This movie is great!",
    rating: 5,
    body: "I really enjoyed this movie. It was great!",
  },
  {
    id: 2,
    userId: 2,
    movieId: 12,
    title: "I love Nemo",
    rating: 4,
    body: "I loved it when I was a kid, and I still love it now!",
  }
]
export { reviews }
