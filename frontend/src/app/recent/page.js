"use client"
import { useState, useEffect } from "react"
import useSwr from "swr"
import MovieCard from "../components/MovieCard"

const api = "6ae531cd3f5d9e7a666941e3d3669e89"
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Browse() {
    const [movieResult, setMovieResult] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedRuntime, setSelectedRuntime] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch('/backend/filter.php');
            const data = await res.json();
            setMovieResult(data);
        }
        fetchMovies();
    }, [])

    console.log(movieResult)

    let uniqueMovies = [];
    let movieIDs = new Set();
    for (let i = 0; i < movieResult.length; i++) {
        let movie = movieResult[i];
        if (!movieIDs.has(movie.movieID)) {
            uniqueMovies.push(movie);
            movieIDs.add(movie.movieID);
        }
    }

    let movieCards = [];
    for (let i = 0; i < Math.min(uniqueMovies.length, 20); i++) {
        let movie = uniqueMovies[i];
        movieCards.push(<MovieCard key={movie.movieID} id={movie.movieID} selectedGenre={selectedGenre} selectedRuntime={selectedRuntime} selectedLanguage={selectedLanguage} />);
    }

    return movieResult ? (
        <div className="relative mt-16 flex flex-1 w-full">
            <div className="mt-12 flex flex-col w-full">
                <h1 className="text-white text-4xl font-medium flex items-center justify-center">Recently Reviewed Movies</h1>
                <div className="flex justify-center mt-10 mb-8">
                    <div className="flex flex-row items-center">
                        <h2 className="text-white text-xl font-medium mb-5 mr-4">Filter by:</h2>
                        <div className="flex flex-wrap">
                            <select onChange={e => setSelectedGenre(e.target.value)} className="bg-gray-800 text-white px-4 py-2 rounded-md mr-4 mb-4" defaultValue="">
                                <option value="" disabled>Select a Genre</option>
                                <option value="">All Genres</option>
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Animation">Animation</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Crime">Crime</option>
                                <option value="Documentary">Documentary</option>
                                <option value="Drama">Drama</option>
                                <option value="Family">Family</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="History">History</option>
                                <option value="Horror">Horror</option>
                                <option value="Music">Music</option>
                                <option value="Mystery">Mystery</option>
                                <option value="Romance">Romance</option>
                                <option value="Science Fiction">Science Fiction</option>
                                <option value="Thriller">Thriller</option>
                                <option value="TV Movie">TV Movie</option>
                                <option value="War">War</option>
                                <option value="Western">Western</option>
                            </select>
                            <select onChange={e => setSelectedRuntime(e.target.value)} className="bg-gray-800 text-white px-4 py-2 rounded-md mr-4 mb-4" defaultValue="">
                                <option value="" disabled>Select a Max Runtime</option>
                                <option value="">All Runtimes</option>
                                <option value="60">1 hour</option>
                                <option value="90">1.5 hours</option>
                                <option value="120">2 hours</option>
                                <option value="150">2.5 hours</option>
                                <option value="180">3 hours</option>
                            </select>
                            <select onChange={e => setSelectedLanguage(e.target.value)} className="bg-gray-800 text-white px-4 py-2 rounded-md mr-4 mb-4" defaultValue="">
                                <option value="" disabled>Select a Language</option>
                                <option value="">All Languages</option>
                                <option value="English">English</option>
                                <option value="Mandarin">Mandarin</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Spanish">Spanish</option>
                                <option value="French">French</option>
                                <option value="Russian">Russian</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Korean">Korean</option>
                                <option value="German">German</option>
                                <option value="Italian">Italian</option>
                                <option value="Arabic">Arabic</option>
                                <option value="Turkish">Turkish</option>
                                <option value="Polish">Polish</option>
                                <option value="Dutch">Dutch</option>
                                <option value="Swedish">Swedish</option>
                            </select>

                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-10">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                        {movieCards}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="text-red-600 inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
        </div>
    )
}