const api = "6ae531cd3f5d9e7a666941e3d3669e89"
import useSwr from "swr"
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useMovie(id) {
  const { data, error } = useSwr(
    () => id && `/api/movie/${id}`,
    fetcher
  )
  return {
    movie: data,
    isLoading: !error && !data,
    isError: error,
  }
}
