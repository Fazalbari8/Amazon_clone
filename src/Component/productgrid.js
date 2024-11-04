"use client"
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { StarIcon } from "@heroicons/react/solid";
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
 import { addToCart } from '@/Redux/Cartslice';
 import { useRouter } from 'next/navigation';


const Max_RATING = 5;
const Min_RATING = 1;
const Card = ({ id, name, price, imageUrl, brand, category, description, warranty }) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const handleAddToCart = () => {
        dispatch(addToCart({ id, name, price, imageUrl, brand, category, description, warranty }));
        router.push('/cart');
    };
    const [rating, setRating] = useState(Min_RATING);
    const [hasPrime, setHasPrime] = useState(false); // Initialize with a default value


    useEffect(() => {
        // Run on the client-side
        setRating(Math.floor(Math.random() * (Max_RATING - Min_RATING + 1)) + Min_RATING);
        setHasPrime(Math.random() < 0.5);
    }, []);

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-6 sm:p-10 shadow-2xl transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
    <Link href={`/products/${id}`}>

        {/* Category Text */}
        <p className="absolute top-2 right-2 text-xs sm:text-sm italic text-gray-400">{category}</p>

        {/* Image */}
        <Image 
            className="image" 
            src={imageUrl[0]} 
            height={150} 
            width={200} 
            objectFit="contain" 
            alt={name} 
        />

        {/* Product Name */}
        <h4 className="my-2 sm:my-3 line-clamp-1 text-sm sm:text-base">{name}</h4>

        {/* Rating */}
        <div className="flex">
            {Array(rating)
                .fill()
                .map((_, i) => (
                    <StarIcon key={i} className="h-4 sm:h-5 text-yellow-500" />
                ))}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm my-1 sm:my-2 line-clamp-2">{description}</p>

        {/* Price */}
        <div className="mb-3 sm:mb-5">
            <p className="text-sm sm:text-base">${price}</p>
        </div>

        {/* Prime or Warranty Info */}
        {hasPrime ? (
            <div className="flex items-center space-x-2 -mt-3 sm:-mt-5">
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-5">{brand}</p>
            </div>
        ) : (
            <div className="flex items-center space-x-2 -mt-3 sm:-mt-5">
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-5">{warranty}</p>
            </div>
        )}
    </Link>

    {/* Add to Basket Button */}
    <button className="mt-auto button px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm" onClick={handleAddToCart}>
        Add to Basket
    </button>
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
                <Card key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductGrid;



// Card Component
// const Card = ({ id, name, price, imageUrl, brand, category, description, warranty }) => {
//     const [rating, setRating] = useState(Min_RATING);
//     const [hasPrime, setHasPrime] = useState(false);
// console.log(id,name,price,imageUrl,brand,category,description,warranty)
//     useEffect(() => {
//         setRating(Math.floor(Math.random() * (Max_RATING - Min_RATING + 1)) + Min_RATING);
//         setHasPrime(Math.random() < 0.5);
//     }, []);

//     return (
//         <Link href={`/productDetail/${id}`} passHref> {/* Add Link to navigate to dynamic route */}
//             <div className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-2xl transform transition-transform duration-300 hover:-translate-y-6 hover:shadow-xl cursor-pointer">
//                 <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
//                 {/* <Image className="image" src={imageUrl[0]} height={150} width={200} objectFit="contain" alt={name} /> */}
//                 <h4 className="my-3 line-clamp-1">{name}</h4>
//                 <div className="flex">
//                     {Array(rating)
//                         .fill()
//                         .map((_, i) => (
//                             <StarIcon key={i} className="h-5 text-yellow-500" />
//                         ))}
//                 </div>
//                 <p className="text-xs my-2 line-clamp-2">{description}</p>
//                 <div className="mb-5">
//                     <p>${price}</p>
//                 </div>
//                 {hasPrime ? (
//                     <div className="flex items-center space-x-2 -mt-5">
//                         <p className="text-xs text-gray-500 mb-5">{brand}</p>
//                     </div>
//                 ) : (
//                     <div className="flex items-center space-x-2 -mt-5">
//                         <p className="text-xs text-gray-500 mb-5">{warranty}</p>
//                     </div>
//                 )}
//                 <button className="mt-auto button">Add to Basket</button>
//             </div>
//         </Link>
//     );
// };
// export default Card