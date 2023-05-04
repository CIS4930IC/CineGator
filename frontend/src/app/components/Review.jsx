import useSwr from "swr"
import { FilledStar, UnfilledStar } from "./Star"
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Review({ review }) {
  const { title, body, userID, rating } = review
  const { data, error } = useSwr(`/backend/user.php?id=${userID}`, fetcher)
  return (
    <article>
      <div className="flex items-center mb-4 space-x-4">
        <img
          className="w-10 h-10 rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
        <div className="space-y-1 font-medium dark:text-white">
          <p>{data?.username} </p>
        </div>
      </div>
      <div className="flex items-center mb-1">
        {Array.from({ length: 5 }).map((_, i) =>
          i + 1 <= rating ? <FilledStar /> : <UnfilledStar />
        )}
        <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Reviewed in the United Kingdom on{" "}
          <time dateTime="2017-03-03 19:00">March 3, 2017</time>
        </p>
      </footer>
      <p className="mb-2 text-gray-500 dark:text-gray-400">{body}</p>
      <a
        href="#"
        className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        Read more
      </a>
    </article>
  )
}
