import useMovie from "../util/useMovie"
import { useRouter } from "next/navigation"

export default function MovieCard({ id }) {
    const { movie, isLoading } = useMovie(id);
    const router = useRouter();

    function formatDate(dateString) {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        if (!dateString) return "Undated";
        return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
    }

    const handleClick = () => {
        router.push(`/movie/${id}`);
    }

    if (isLoading || !movie) {
        return (
            <div className="max-w-[200px] flex justify-center items-center mt-10">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-[200px] transform transition duration-500 hover:scale-105 hover:cursor-pointer" onClick={handleClick}>
            <img className="rounded-t-lg" src={movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"} alt="" />
            <div className="p-3">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
                <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">{formatDate(movie.release_date)}</p>
            </div>
        </div>
    )
}