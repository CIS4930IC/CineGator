'use client'
import './globals.css'
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import auth from './util/auth.js'

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await auth();
      setUser(res.username)
    }
    checkAuth();
    setIsLoading(false);
  }, [children]);

  if (isLoading) {
    return (
      <html lang="en">
        <head>
          <title>CineGator</title>
          <meta name="description" content="A movie app built with Tailwind CSS and React" />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
          <div className="flex justify-center items-center h-screen w-screen">
            <div className="text-red-600 inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
          </div>
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <head>
        <title>CineGator</title>
        <meta name="description" content="A movie app built with Tailwind CSS and React" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar user={user} setUser={setUser} />
        {children}
      </body>
    </html>
  )
}