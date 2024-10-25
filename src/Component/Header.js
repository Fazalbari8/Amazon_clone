import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useRouter } from 'next/router';
import { MdOutlineAdd } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Header = () => {
    const [logedin, setLogedin] = useState(false);
    const router = useRouter();
    const [modal, setModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('Pakistan'); // State for selected country
    const [zipCode, setZipCode] = useState('');

    // Function to close the modal
    const closeModal = () => {
        setIsOpen(false);
    };

    // Function to open/close the modal when clicking on the background
    const handleClickOutside = (e) => {
        if (e.target.id === "modalBackground") {
            closeModal();
        }
    };

    const handleSignInClick = () => {
        router.push('/signIn');
    };

    const handleHomeClick =() => {
        router.push('/home')
    }

   

    const handleAddProductClick = () => {
        router.push('/addProduct');
    };

    const handleDoneClick = () => {
        // Close modal and update displayed location
        setIsOpen(false);
        setModal(false); // Close the modal
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value); // Update selected country
    };

    return (
        <>
            <header>
                {/* Top Nav */}
                <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2' >
                    <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 ml-2 pr-2' onClick={handleHomeClick} >
                        <Image
                            src='https://links.papareact.com/f90'
                            width={100}
                            height={40}
                            objectFit='contain'
                            className='cursor-pointer'
                            
                        />
                    </div>
                    <div className="align-start justify-start cursor-pointer mr-2 hidden md:block"
                        onClick={() => setModal(!modal)}
                    >
                        {modal &&
                            <div
                                id="modalBackground"
                                className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
                                onClick={handleClickOutside}  // Listen for clicks on the modal background
                            >
                                <div
                                    className="bg-white rounded-lg w-full max-w-md p-6 relative"
                                    onClick={(e) => e.stopPropagation()} // Stop the event propagation when clicking inside the modal content
                                >
                                    {/* Close button */}
                                    <button
                                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                                        onClick={closeModal}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                    {/* Modal Content */}
                                    <h2 className="text-lg font-bold mb-4">Choose your location</h2>
                                    <p className="text-sm text-gray-600 mb-4">Delivery options and speeds may vary for different locations.</p>

                                    <div className="mb-4">
                                        <p className="text-blue-500 cursor-pointer">Manage address book</p>
                                        <div className="mt-2 text-gray-600 text-sm">
                                            or enter a US zip code
                                        </div>
                                        <div className="mt-2 flex space-x-2">
                                            <input
                                                type="text"
                                                placeholder="Enter US zip code"
                                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                                value={zipCode}
                                                onChange={(e) => setZipCode(e.target.value)} // Handle zip code input
                                            />
                                            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Apply</button>
                                        </div>
                                    </div>

                                    <div className="mb-4 text-sm text-gray-600">
                                        or ship outside the US
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <select
                                            className="border border-gray-300 rounded-md p-2 w-full"
                                            value={selectedCountry}
                                            onChange={handleCountryChange} // Update selected country
                                        >
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="United States">United States</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>

                                    {/* Done Button */}
                                    <div className="mt-6 flex justify-end">
                                        <button
                                            className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                                            onClick={handleDoneClick} // Handle done button click
                                        >
                                            Done
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }

                        <p className="text-gray-400 font-bold text-15px">Deliver to</p>
                        <div className="flex align-center items-center justify-between p-2">
                            <TbTruckDelivery className='text-white h-5 w-7' />
                            <p className="text-white font-extrabold hover:underline">{selectedCountry}</p> {/* Display selected country */}
                        </div>
                    </div>

                    {/* Search and Cart Section */}
                    <div className='hidden sm:flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer'>
                        <input
                            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
                            type="text"
                            placeholder='Search Amazon'
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
                {/* Bottom Nav */}
                <div className='flex justify-between items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
                    <div className='flex items-center space-x-3'>
                        <p className='link flex items-center'>
                            <IoMenu className='h-8 w-8 md:h-6 md:w-6' />
                            <span className='text-sm md:text-base'>All</span>
                        </p>
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
                    {/* Add Product Button */}
                    <button
                        onClick={handleAddProductClick}
                        className='link border-2 border-white px-2 py-1 rounded-full hidden sm:block'
                    >
                        <MdOutlineAdd className='h-5 w-5 inline' /> Add Product
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
