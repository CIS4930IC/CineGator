"use client"
import { Inter } from "next/font/google"
import Review from "../../components/Review"
import useMovie from "../../util/useMovie"
import { useRouter } from "next/navigation"
const inter = Inter({ subsets: ["latin"] })

export default function Movie({ params }) {
  const { movie } = useMovie(params.id)
  const router = useRouter()

  const handleReview = () => {
    router.push(`/movie/${params.id}/review`)
  }
  let hasReview = movie?.reviews?.length > 0
  return movie ? (
    <div className="mt-24">
      <div className="bg-red-900 mx-8 my-12 rounded-md shadow-lg p-6 md:p-8 flex flex-col md:flex-row">
        <div className="flex-1 md:pr-6 my-8 mx-4 pl-4 pr-10">
          <h1 className="text-5xl font-bold mb-2 text-white">{movie.title}</h1>
          <div className="flex items-center mt-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 text-yellow-500 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M10 15.936l4.142 2.296-.99-4.856 3.326-2.876-4.598-.397L10 6.104 8.12 10.107l-4.598.397 3.326 2.876-.99 4.856L10 15.936z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-lg mr-1 text-white">4.5</p>
            <p className="text-sm text-white">(42 ratings)</p>
          </div>
          <p className="text-lg text-white max-w-lg">{movie.overview}</p>
        </div>
        <div className="flex-1">
          {movie.videoLink ? (
            <iframe
              width="1280"
              height="720"
              className="w-full h-auto object-cover rounded-md shadow-lg aspect-video"
              src={movie.videoLink}
            ></iframe>
          ) : (
            <img
              src="https://via.placeholder.com/1280x720"
              alt="Movie poster"
              className="w-full h-auto object-cover rounded-md shadow-lg aspect-video"
              width="1280"
              height="720"
            />
          )}
        </div>
      </div>
      <div className="m-9">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-semibold">User Reviews</h2>
          <button
            onClick={handleReview}
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
          >
            Add Review
          </button>
        </div>
        <hr className="mb-6" />
        {hasReview ? (
          movie.reviews.map?.(review => (
            <Review
              title={review.title}
              body={review.body}
              rating={review.rating}
              key={review.id}
            ></Review>
          ))
        ) : (
          <p>No reviews, write one!</p>
        )}
      </div>
    </div>
  ) : (
    <div></div>
  )
}
