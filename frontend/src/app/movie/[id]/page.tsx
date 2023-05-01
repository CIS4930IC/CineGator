"use client"
import { Inter } from "next/font/google"
import Review from "../../components/Review"
import useMovie from "../../util/useMovie"
const inter = Inter({ subsets: ["latin"] })

export default function Movie({ params }) {
  const { movie } = useMovie(params.id)
  return movie ? (
    <div>
      <nav
        className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 md:flex-wrap md:justify-start"
        data-te-navbar-ref
      >
        <div className="px-6">
          <button
            className="border-0 bg-transparent py-3 px-2 text-xl leading-none md:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentO"
            aria-controls="navbarSupportedContentO"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </button>
          <div
            className="!visible hidden grow basis-[100%] items-center md:!flex md:basis-auto"
            id="navbarSupportedContentO"
            data-te-collapse-item
          >
            <ul
              className="mr-auto flex flex-col md:flex-row"
              data-te-navbar-nav-ref
            >
              <li data-te-nav-item-ref>
                <a
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
                  href="#!"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Home
                </a>
              </li>
              <li data-te-nav-item-ref>
                <a
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
                  href="#!"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Features
                </a>
              </li>
              <li data-te-nav-item-ref>
                <a
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
                  href="#!"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Pricing
                </a>
              </li>
              <li data-te-nav-item-ref>
                <a
                  className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary "
                  href="#!"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-white mx-8 my-12 rounded-md shadow-lg p-6 md:p-8 flex flex-col md:flex-row">
        <div className="flex-1 md:pr-6 my-8 mx-4 pl-4 pr-10">
          <h1 className="text-5xl font-bold mb-2 text-gray-800">
            {movie.title}
          </h1>
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
            <p className="text-lg mr-1 text-gray-600">4.5</p>
            <p className="text-sm text-gray-500">(42 ratings)</p>
          </div>
          <p className="text-lg text-gray-800 max-w-lg">{movie.overview}</p>
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
        <Review></Review>
      </div>
    </div>
  ) : (
    <div></div>
  )
}
