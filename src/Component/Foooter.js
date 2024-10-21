import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            {/* Main Footer */}
            <div className='flex flex-col md:flex-row bg-amazon_blue-Footer text-white h-auto justify-evenly p-5'>
                {/* Column 1 */}
                <ul className='mb-5 md:mb-0'>
                    <li className='mt-[30px] text-white font-bold'>Get to Know Us</li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Careers</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Amazon Newsletter</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">About Amazon</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Accessibility</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Sustainability</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Press Center</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Investor Relations</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Amazon Devices</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Amazon Science</a></li>
                </ul>

                {/* Column 2 */}
                <ul className='mb-5 md:mb-0'>
                    <li className='mt-[30px] text-white font-bold'>Make Money with Us</li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Sell products on Amazon</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Sell on Amazon Business</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Sell apps on Amazon</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Become an Affiliate</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Advertise Your Products</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Self-Publish with Us</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Host an Amazon Hub</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">See More Make Money with Us</a></li>
                </ul>

                {/* Column 3 */}
                <ul className='mb-5 md:mb-0'>
                    <li className='mt-[30px] text-white font-bold'>Amazon Payment Products</li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Amazon Business Card</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Shop with Points</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Reload Your Balance</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Amazon Currency Converter</a></li>
                </ul>

                {/* Column 4 */}
                <ul className='mb-5 md:mb-0'>
                    <li className='mt-[30px] text-white font-bold'>Let Us Help You</li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Amazon and COVID-19</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Your Account</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Your Orders</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Shipping Rates & Policies</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Return & Replacements</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Manage Your Content and Devices</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Amazon Assistant</a></li>
                    <li><a className='block no-underline list-none text-[0.85rem] mt-[10px] text-white hover:underline' href="#">Help</a></li>
                </ul>
            </div>

            {/* Divider */}
            <hr />

            {/* Amazon Logo Section */}
            <div className='flex bg-amazon_blue-Footer justify-center'>
                <Image
                    src='https://links.papareact.com/f90'
                    width={100}
                    height={40}
                    objectFit='contain'
                    className='cursor-pointer mt-7'
                />
            </div>
            
            {/* Bottom Links Section */}
            <div className='flex flex-col items-center bg-amazon_blue-FooterLastPart justify-center text-white h-auto py-3 font-bold'>
                <div className='flex justify-center space-y-2 md:space-y-0 md:space-x-6 flex-col md:flex-row'>
                    <a className='no-underline text-white text-[0.7rem] hover:underline' href="#">Conditions of Use</a>
                    <a className='no-underline text-white text-[0.7rem] hover:underline' href="#">Privacy Notice</a>
                    <a className='no-underline text-white text-[0.7rem] hover:underline' href="#">Your Ads Privacy Choices</a>
                </div>
                <div className='mt-[5px] text-[0.8rem] text-center'>
                    © 1996-2024, Amazon.com, Inc. or its affiliates
                </div>
            </div>
        </>
    );
}
export default Footer;
