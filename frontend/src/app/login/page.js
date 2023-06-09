'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import auth from '../util/auth';

export default function Login() {
  const router = useRouter();
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

    // To-Do - Add validation

    // To-Do - Add API call to sign in user
    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);

    const res = await fetch('/backend/login.php', {
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

    // If successful: router.push('/route');
  }

  return (
    <div className="flex min-h-full flex-col h-screen justify-center px-6 pb-24 lg:px-8 bg-black">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor='username' className="block text-sm font-medium leading-6 text-white">Username</label>
            <div className="mt-2">
              <input onChange={(event) => setUsername(event.target.value)} id="username" name="username" type="username" autoComplete="username" required className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 bg-gray-800" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
            </div>
            <div className="mt-2">
              <input onChange={(event) => setPassword(event.target.value)} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 bg-gray-800" />
            </div>
          </div>
          <div className="flex">
            {error && <div className="text-red-600 text-sm">{error}</div>}
          </div>

          <div>
            <button onClick={handleSubmit} type="submit" className="flex w-full justify-center rounded-md bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-white">
          Not a user?
          <Link href='/signup' className="font-semibold leading-6 text-red-600 hover:text-red-800"> Sign up for an account.</Link>
        </p>
      </div>
    </div>
  )
}
