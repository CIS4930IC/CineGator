"use client"
import { useState } from "react"
import useSwr from "swr"
import MovieCard from "../components/MovieCard"

const api = "6ae531cd3f5d9e7a666941e3d3669e89"
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Browse() {
    const [movieResult, setMovieResult] = useState([])
    const [query, setQuery] = useState("")

    const { data, error } = useSwr(
        () => query && `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${query}`,
        fetcher
    )

    function search(e) {
        e.preventDefault();
        setMovieResult(data)
        console.log(movieResult)
    }

    return (
        <div className="relative mt-16 flex flex-1 w-full">
            <div className="mt-12 flex flex-col w-full">
                <h1 className="text-white text-4xl font-medium flex items-center justify-center">Search All Movies</h1>
                <form onSubmit={search}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative flex w-1/2 mt-8 mx-auto">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input onChange={(event) => setQuery(event.target.value)} type="text" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-100 border border-gray-700 rounded-lg bg-gray-900 focus:border-gray-500 placeholder-gray-400 focus:outline-none" placeholder="Search Movies..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700">Search</button>
                    </div>
                </form>
                <div className="flex justify-center mt-10">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                        {movieResult?.results?.map(movie => (
                            <MovieCard key={movie.id} id={movie.id} />
                        ))}
                    </div>
                </div>
                {/* <h1 className="text-white text-4xl font-medium flex items-center justify-center mt-20">Recently Reviewed</h1> */}
            </div>
        </div>

    )
}