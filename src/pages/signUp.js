import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import Head from 'next/head';
const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleHomeClick = () => {
    router.push('/'); 
  };
    // Function to handle go back to home

  const handleSignUpClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Sign Up Successfully");
      alert("Sign Up Successfully");
    } catch (err) {
      setError(err.message);
      alert('some thing wrong please try again', err);
    }
    setLoading(false);
  }
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Head>
          <title>Sign Up Your Amazon0.2 Account</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Sign up to your Amazon Account</h2>

          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">First Name </label>
              <input
                type="name"
                className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block"
                placeholder="Enter your First Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Last Name </label>
              <input
                type="name"
                className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block"
                placeholder="Enter your Last Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="name"
                className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      {/* Back to Home Page Button */}
      <div className="flex justify-center mt-3 mb-3">
        <button
          className='bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-none'
          onClick={handleHomeClick}
        >
          Back To HomePage
        </button>
      </div>
    </>
  );
};

export default SignUp;
