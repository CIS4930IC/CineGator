import Image from "next/image"

export default function Navbar() {
    return (
        <nav class="bg-white dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center">
                    <Image src="/images/logo.png" alt="Flowbite Logo" height={1} width={190} />
                </a>
                <div class="flex md:order-2">
                    <button type="button" class="text-red-700 md:dark:text-red-500 hover:text-red-900 dark:hover:text-red-800 bg-transparent focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 ">Log In</button>
                    <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-700 dark:hover:bg-red-800">Sign Up</button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Browse</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}