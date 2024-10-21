import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import Head from 'next/head';

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const handleHomeClick = () => {
    router.push('/'); 
  };
      // Function to handle go back to home

  const handleSignUpClick = () => {
    router.push('/signUp');

  }
  const handleSignInClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user,"user");
      })
      console.log("Sign In Successfully");
      router.push('/');
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
          <title>Sign In Your Amazon 2.0 Account</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Sign in to your Amazon Account</h2>

          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
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
              onClick={handleSignInClick}
            >
              Sign In
            </button>

            <p className="mt-4 text-sm text-center text-gray-600">
              Don't have an account?{" "}
              <div onClick={handleSignUpClick} className="text-indigo-600 hover:underline cursor-pointer" >
                Sign Up
              </div>
            </p>
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

export default SignIn;
