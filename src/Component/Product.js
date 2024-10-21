import Image from "next/image";
import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const Max_RATING = 5;
const Min_RATING = 1;

function ProductComp({ id, title, price, description, category, image }) {
    const [rating, setRating] = useState(Min_RATING); // Initialize with a fixed value
    const [hasPrime, setHasPrime] = useState(false); // Initialize with a default value
    const [toogle, setToogle] = useState(false);

    useEffect(() => {
        // Run on the client-side
        setRating(Math.floor(Math.random() * (Max_RATING - Min_RATING + 1)) + Min_RATING);
        setHasPrime(Math.random() < 0.5);
    }, []);

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-2xl transform transition-transform duration-300 hover:-translate-y-6 hover:shadow-xl ">


            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>


            <Image className="image"  src={image} height={150} width={200} objectFit="contain" alt={title} />

            <h4 className="my-3 line-clamp-1">{title}</h4>

            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
            </div>

            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
                <Currency quantity={price} currency="USD" />
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img
                        loading="lazy"
                        className="w-12 "
                        src="https://links.papareact.com/fdw"
                        alt=""
                    />
                    <p className="text-xs text-gray-500 mb-5">FREE Next-day Delivery</p>
                </div>
            )}
            <button className="mt-auto button">Add to Basket</button>
        </div>
    );
}

export default ProductComp;
