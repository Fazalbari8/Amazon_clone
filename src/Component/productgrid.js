"use client"
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { StarIcon } from "@heroicons/react/solid";
import Image from 'next/image';


const Max_RATING = 5;
const Min_RATING = 1;
const Card = ({ name, price, imageUrl, brand,category, description ,warranty }) => {
    console.log(imageUrl[0],)
    const [rating, setRating] = useState(Min_RATING);
    const [hasPrime, setHasPrime] = useState(false); // Initialize with a default value


    useEffect(() => {
        // Run on the client-side
        setRating(Math.floor(Math.random() * (Max_RATING - Min_RATING + 1)) + Min_RATING);
        setHasPrime(Math.random() < 0.5);
    }, []);
    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-2xl transform transition-transform duration-300 hover:-translate-y-6 hover:shadow-xl ">


            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>


            <Image className="image" src={imageUrl[0]} height={150} width={200} objectFit="contain" alt={name} />

            <h4 className="my-3 line-clamp-1">{name}</h4>

            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
            </div>

            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
              <p>${price}</p>
            </div>
            {hasPrime ? (
                <div className="flex items-center space-x-2 -mt-5">
                    <p className="text-xs text-gray-500 mb-5">{brand}</p>
                </div>
            ):(
                <div className="flex items-center space-x-2 -mt-5">
                    <p className="text-xs text-gray-500 mb-5">{warranty}</p>
                </div>
            )}
            <button className="mt-auto button">Add to Basket</button>
        </div>
    );
};

const ProductGrid = () => {
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        try {
            const productsCollection = collection(db, 'products'); // Make sure the collection name matches
            const productSnapshot = await getDocs(productsCollection);
            const productList = productSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log(productList, "ssss")
            setProducts(productList);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.map((product, index) => (
                <Card key={index} {...product}  />
            ))}
        </div>
    );
};

export default ProductGrid;

