import useMovie from "../util/useMovie"

export default function MovieCard({ id }) {
    const { movie, isLoading } = useMovie(id);

    function formatDate(dateString) {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
    }

    if (isLoading || !movie) {
        return (
            <div className="max-w-[200px] flex justify-center items-center mt-10">
                <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                    <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-[200px]">
            <a href="#">
                <img className="rounded-t-lg" src={movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"} alt="" />
            </a>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{formatDate(movie.release_date)}</p>
            </div>
        </div>
    )
}