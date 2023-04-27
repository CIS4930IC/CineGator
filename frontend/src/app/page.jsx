import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "./page.module.css"
import Link from "next/link"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <header>
      <nav
        className="fixed z-10 top-0 inset-x-0 flex w-full items-center justify-between py-2 text-neutral-600 shadow-lg focus:text-neutral-800 dark:text-neutral-200 md:flex-wrap md:justify-start"
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
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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

      <div
        className="relative h-96 overflow-hidden bg-cover bg-no-repeat p-12 text-center lg:h-screen"
        style={{ backgroundImage: "url(/images/home-background.jpg)" }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[rgba(2, 56, 53, 0.7)]"
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">
                A New Way to Find Movies
              </h2>
              <h4 className="mb-6 text-xl font-semibold">
                Discover ratings for thousands of movies, or create your own. Become part of the community today.
              </h4>
              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-7 pt-[8px] pb-[8px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
