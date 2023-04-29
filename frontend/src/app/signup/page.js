'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react'

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Email: " + email);
    console.log("Username: " + username);
    console.log("Password: " + password);

    // To-Do - Add validation

    // To-Do - Add API call to create user

    // If successful: router.push('/route');
  }

  return (
    <div class="flex min-h-full flex-col h-screen justify-center px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">Create an account</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Email address</label>
            <div class="mt-2">
              <input onChange={(event) => setEmail(event.target.value)} id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" />
            </div>
          </div>
          <div>
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Username</label>
            <div class="mt-2">
              <input onChange={(event) => setUsername(event.target.value)} id="username" name="username" autocomplete="username" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Password</label>
            </div>
            <div class="mt-2">
              <input onChange={(event) => setPassword(event.target.value)} id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" />
            </div>
          </div>

          <div>
            <button onClick={handleSubmit} type="submit" class="flex w-full justify-center rounded-md bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500 dark:text-white">
          Already have an account?
          <Link href='/login' class="font-semibold leading-6 text-red-600 hover:text-red-800 dark:hover:text-red-800"> Sign in.</Link>
        </p>
      </div>
    </div>
  )
}