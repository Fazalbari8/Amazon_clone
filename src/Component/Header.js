import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useRouter } from 'next/router';  // Import useRouter
import { MdOutlineAdd } from "react-icons/md";


const Header = () => {
    const [logedin, setLogedin] = useState(false);
    const router = useRouter(); // Initialize the useRouter

    const handleSignInClick = () => {
        router.push('/signIn'); // With the exact case
    };

    const handleAddProductClick = () => {
        router.push('/addProduct');
    }

    return (
        <>
            <header>
                {/* Top Nav */}
                <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
                    <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 ml-2 pr-2'>
                        <Image
                            src='https://links.papareact.com/f90'
                            width={100}
                            height={40}
                            objectFit='contain'
                            className='cursor-pointer'
                        />
                    </div>
                    <div className='hidden sm:flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer'>
                        <input
                            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
                            type="text"
                            placeholder='Search Your Products Here'
                        />
                        <FaSearch className='h-5 m-3' />
                    </div>
                    <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                        {logedin ? (
                            <div className='link'>
                                <p>Hello Fazal.</p>
                                <p className='font-extrabold md:text-sm'>Account & Lists</p>
                            </div>
                        ) : (
                            <div className='link' onClick={handleSignInClick}>
                                {/* OnClick function will redirect to Sign in page */}
                                <p className='font-extrabold md:text-sm'>Sign in</p>
                            </div>
                        )}
                        <div className='link'>
                            <p>Returns</p>
                            <p className='font-extrabold md:text-sm'>& Orders</p>
                        </div>
                        <div className='relative flex items-center cursor-pointer link'>
                            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center text-black font-bold rounded-full'>0</span>
                            <FaShoppingCart className='h-10' />
                            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
                    <div className='flex items-center space-x-3'>
                        <p className='link flex items-center'>
                            <IoMenu className='h-8 w-8 md:h-6 md:w-6' />
                            <span className='text-sm md:text-base'>All</span>                    </p>
                        <p className='link'>Prime Video</p>
                        <p className='link'>Amazon Business</p>
                        <p className='link'>Today's Deals</p>
                        <p className='link hidden lg:inline-flex'>Electronics</p>
                        <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                        <p className='link hidden lg:inline-flex'>Prime</p>
                        <p className='link hidden lg:inline-flex'>Buy Again</p>
                        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
                        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
                    </div>
                    {/* Add Product Button aligned to the right and visible on mobile */}
                    {/* <button className='link border-2 p-2 flex items-center hover:no-underline rounded-md hover:text-black hover:bg-slate-400 font-bold'>
                        <MdOutlineAdd className='h-6 w-6 mr-2' /> 
                        Add Product
                    </button> */}
                    <button
                        onClick={handleAddProductClick}
                        className='link border-2 p-2 flex items-center justify-center space-x-1 hover:no-underline rounded-md hover:text-black hover:bg-slate-400 font-bold'>
                        <MdOutlineAdd className='h-5 w-5' /> {/* Icon */}
                        <span className='hidden sm:inline text-xs sm:text-sm md:text-base'>Add</span> {/* Hidden on mobile */}
                        <span className='text-xs sm:text-sm md:text-base'>Product</span> {/* Always visible */}
                    </button>

                </div>

            </header>
        </>
    );
};

export default Header;


