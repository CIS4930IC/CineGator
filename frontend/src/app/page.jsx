import { Inter } from "next/font/google"
import Image from "next/image"      
import Link from "next/link"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
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
            <h4 className="mb-8 text-xl font-semibold">
              Discover ratings for thousands of movies, or create your own. Become part of the community today.
            </h4>
            <button
              type="button"
              className="rounded border-2 border-neutral-50 px-7 pt-[8px] pb-[8px] text-sm font-medium uppercase leading-normal text-neutral-50 dark:hover:text-neutral-800 transition duration-350 hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Link href='/signup'>Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
