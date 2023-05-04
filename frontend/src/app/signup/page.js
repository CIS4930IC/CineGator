'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import auth from '../util/auth';

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Authenticate user.
  const checkAuth = async () => {
    const res = await auth();
    if (res.success) {
      router.push('/browse');
    }
  }
  checkAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address.")
      return;
    }

    // Username validation
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    if (!usernameRegex.test(username)) {
      setError("Username must be between 3 and 16 characters long and can only contain letters, numbers, and underscores.")
      return;
    }

    // Password validation
    const passwordRegex = /^[a-zA-Z0-9&%@$!]+$/;
    if (password.length < 6 || !passwordRegex.test(password)) {
      setError("Password must be at least 6 characters long and only contain letters, numbers, and &, %, @, $, or ! characters.");
      return;
    }

    // API call to create user
    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);

    const res = await fetch('/backend/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      setError(null);
      router.refresh();
      router.push('/browse');
    } else {
      setError(data.message);
    }
  }

  return (
    <div className="flex min-h-full flex-col h-screen justify-center px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">Create an account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Email address</label>
            <div className="mt-2">
              <input onChange={(event) => setEmail(event.target.value)} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" />
            </div>
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Username</label>
            <div className="mt-2">
              <input onChange={(event) => setUsername(event.target.value)} id="username" name="username" autoComplete="username" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Password</label>
            </div>
            <div className="mt-2">
              <input onChange={(event) => setPassword(event.target.value)} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" />
            </div>
          </div>
          <div className="flex">
            {error && <div className="text-red-600 text-sm">{error}</div>}
          </div>

          <div>
            <button onClick={handleSubmit} type="submit" className="flex w-full justify-center rounded-md bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500 dark:text-white">
          Already have an account?
          <Link href='/login' className="font-semibold leading-6 text-red-600 hover:text-red-800 dark:hover:text-red-800"> Sign in.</Link>
        </p>
      </div>
    </div>
  )
}
