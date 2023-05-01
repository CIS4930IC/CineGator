const api = "6ae531cd3f5d9e7a666941e3d3669e89"
import useSwr from "swr"
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useTrailer(id) {
    const { data, error } = useSwr(
        () => id && `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api}&language=en-US`,
        fetcher
    )

    const trailerLink = `https://www.youtube.com/embed/${data?.results?.[0]?.key}`;
    return {
        trailerLink,
        isLoading: !error && !data,
        isError: error,
    }
}
