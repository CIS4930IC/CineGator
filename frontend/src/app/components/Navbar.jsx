'use client'
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from 'next/navigation';
import Link from "next/link"
import auth from "../util/auth";

export default function Navbar({ username }) {
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // useEffect(() => {
    //     const checkAuth = async () => {
    //         const res = await authenticate();
    //         if (res.status === 200) {
    //             setLoggedIn(true);
    //         } else {
    //             setLoggedIn(false);
    //         }
    //     }
    //     checkAuth();
    // }, [])

    function handleDropdownToggle() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleSignout = async (e) => {
        const res = await fetch('/backend/logout');
        const data = await res.json();
        console.log(data)
        router.push('/');
    }

    if (username != null && username != undefined && username != '') {
        return (
            <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href='/' className="flex items-center">
                        <Image src="/images/logo.png" alt="CineGator Logo" height={1} width={190} />
                    </Link>
                    <div className="flex flex-col items-center md:order-2 relative">
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700" id="user-menu-button" data-dropdown-placement="bottom" aria-expanded={isDropdownOpen} onClick={handleDropdownToggle}>
                            <span className="sr-only">Open user menu</span>
                            <img className="w-10 h-10 rounded-full" src="/images/profile.jpg" alt="user photo" />
                        </button>
                        <div className={`z-50 ${isDropdownOpen ? '' : 'hidden'} absolute mt-12 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">{username}</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={handleSignout}>Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
                            <li>
                                <Link href='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                            </li>
                            <li>
                                <Link href='/browse' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Browse</Link>
                            </li>
                            <li>
                                <Link href='/about' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    return (
        <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href='/' className="flex items-center">
                    <Image src="/images/logo.png" alt="CineGator Logo" height={1} width={190} />
                </Link>
                <div className="flex md:order-2">
                    <Link href='/login'>
                        <div className="text-red-700 md:dark:text-red-500 hover:text-red-900 dark:hover:text-red-800 bg-transparent focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 ">Log In</div>
                    </Link>
                    <Link href='/signup'>
                        <div className="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-700 dark:hover:bg-red-800">Sign Up</div>
                    </Link>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
                        <li>
                            <Link href='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                        </li>
                        <li>
                            <Link href='/browse' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Browse</Link>
                        </li>
                        <li>
                            <Link href='/about' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}