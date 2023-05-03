'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import auth from '../../../util/auth';
import useMovie from "../../../util/useMovie";

export default function Review({ params }) {
    const { movie } = useMovie(params.id)
    const router = useRouter();
    const [userID, setUserID] = useState(null);
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState(null);

    // Authenticate user.
    const checkAuth = async () => {
        const res = await auth();
        if (!res.success) {
            router.push('/login');
        } else {
            setUserID(res.userID)
        }
    }
    checkAuth();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Title validation
        if (title.trim().length < 1 || title.trim().length > 70) {
            setError("Title must be between 1 and 70 characters long.")
            return;
        }

        // Rating validation
        if (rating == "") {
            setError("Please select a rating.")
            return;
        }

        // Body validation
        if (body.trim().length < 1 || body.trim().length > 500) {
            setError("Body must be between 1 and 500 characters long.")
            return;
        }

        // API call to create review
        const formData = new URLSearchParams();
        formData.append('userID', userID);
        formData.append('movieID', params.id);
        formData.append('title', title.trim());
        formData.append('rating', rating);
        formData.append('body', body.trim());

        const res = await fetch('/backend/writeReview.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        });

        if(res.ok) {
            setError(null);
            router.push(`/movie/${params.id}`)
        } else {
            setError(res.message);
        }
    }

    return movie ? (
        <div className="flex mt-24 flex-col justify-center px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">Create a Review</h2>
                <h2 className="text-center text-xl font-bold leading-9 tracking-tight text-red-600">{movie.title}</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Title</label>
                        <div className="mt-2">
                            <input onChange={(e) => setTitle(e.target.value)} id="title" name="title" type="title" autoComplete="title" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset sm:text-sm sm:leading-6 px-3" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                        <select id="countries" className="border border-white text-white text-sm rounded-lg block w-full p-2.5 focus:ring-white focus:border-white" defaultValue="" onChange={(e) => setRating(e.target.value)}>
                            <option value="" disabled>Select a rating</option>
                            <option value="1">★</option>
                            <option value="2">★★</option>
                            <option value="3">★★★</option>
                            <option value="4">★★★★</option>
                            <option value="5">★★★★★</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
                        <textarea onChange={(e) => setBody(e.target.value)} id="body" rows="4" className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-white dark:placeholder-gray-400 dark:text-white" placeholder=""></textarea>
                    </div>
                    <div className="flex">
                        {error && <div className="text-red-600 text-sm">{error}</div>}
                    </div>

                    <div>
                        <button onClick={handleSubmit} type="submit" className="flex w-full justify-center rounded-md bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Submit Review</button>
                    </div>
                </form>
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