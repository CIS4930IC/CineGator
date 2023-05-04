import useSwr from "swr"
import { FilledStar, UnfilledStar } from "./Star"
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Review({ review }) {
  const { title, body, userID, rating } = review
  const { data, error } = useSwr(`/backend/user.php?id=${userID}`, fetcher)
  return (
    <article>
      <div className="flex items-center mb-3 space-x-2">
        <img
          className="w-8 h-8 rounded-full"
          src="/images/profile.jpg"
          alt=""
        />
        <div className="space-y-1 font-medium text-white">
          {data?.username}
        </div>
      </div>
      <div className="flex items-center mb-1">
        {Array.from({ length: 5 }).map((_, i) =>
          i + 1 <= rating ? <FilledStar /> : <UnfilledStar />
        )}
        <h3 className="ml-2 text-sm font-semibold text-white">
          {title}
        </h3>
      </div>
      <p className="pb-8 text-gray-400">{body}</p>
    </article>
  )
}
