'use client'
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useRouter } from 'next/navigation';
import Link from "next/link"

export default function Navbar({ user, setUser }) {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    function handleDropdownToggle() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);


    const handleSignout = async (e) => {
        const res = await fetch('/backend/logout');
        if (res.ok) {
            setUser(null);
            setIsDropdownOpen(false);
            router.push('/');
        }
    }

    if (user != null && user != '') {
        return (
            <nav className="bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href='/' className="flex items-center">
                        <Image src="/images/logo.png" alt="CineGator Logo" height={1} width={190} />
                    </Link>
                    <div className="flex flex-col items-center md:order-2 relative">
                        <button
                            type="button"
                            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-700"
                            id="user-menu-button"
                            data-dropdown-placement="bottom"
                            aria-expanded={isDropdownOpen}
                            onClick={handleDropdownToggle}
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-10 h-10 rounded-full"
                                src="/images/profile.jpg"
                                alt="user photo"
                            />
                        </button>
                        <div
                            className={`z-50 ${isDropdownOpen ? '' : 'hidden'
                                } min-w-max absolute mt-12 text-base list-none divide-y rounded-lg shadow bg-gray-700 divide-gray-600`}
                            id="user-dropdown"
                            ref={dropdownRef}
                        >
                            <div className="px-4 py-3">
                                <span className="block text-sm text-white">{user}</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
                                        onClick={handleSignout}
                                    >
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-black md:bg-black border-gray-700">
                            <li>
                                <Link href='/' className="block py-2 pl-3 pr-4  rounded  md:p-0 md:hover:text-red-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Home</Link>
                            </li>
                            <li>
                                <Link href='/browse' className="block py-2 pl-3 pr-4 rounded  md:p-0 md:hover:text-red-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Browse</Link>
                            </li>
                            <li>
                                <Link href='/recent' className="block py-2 pl-3 pr-4  rounded  md:p-0 md:hover:text-red-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Recent</Link>
                            </li>
                            <li>
                                <Link href='/about' className="block py-2 pl-3 pr-4  rounded  md:p-0 md:hover:text-red-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href='/' className="flex items-center">
                        <Image src="/images/logo.png" alt="CineGator Logo" height={1} width={190} />
                    </Link>
                    <div className="flex md:order-2">
                        <Link href='/login'>
                            <div className="text-red-700 md:text-red-500 hover:text-red-800 bg-transparent focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 ">Log In</div>
                        </Link>
                        <Link href='/signup'>
                            <div className="text-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-red-700 hover:bg-red-800">Sign Up</div>
                        </Link>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-black md:bg-black border-gray-700">
                            <li>
                                <Link href='/' className="block py-2 pl-3 pr-4  rounded  md:p-0 md:hover:text-red-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Home</Link>
                            </li>
                            <li>
                                <Link href='/browse' className="block py-2 pl-3 pr-4 rounded  md:p-0 md:hover:text-red-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Browse</Link>
                            </li>
                            <li>
                                <Link href='/recent' className="block py-2 pl-3 pr-4  rounded  md:p-0 md:hover:text-red-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Recent</Link>
                            </li>
                            <li>
                                <Link href='/about' className="block py-2 pl-3 pr-4  rounded  md:p-0 md:hover:text-red-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}