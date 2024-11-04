// src/pages/products/[id].js
import { useParams } from 'next/navigation';
import { db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import BackToTop from '@/Component/Scroll';
import { StarIcon } from "@heroicons/react/solid";

const Max_RATING = 5;
const Min_RATING = 1;
const ProductDetail = () => {

  const [rating, setRating] = useState(Min_RATING); // Initialize with a fixed value
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  console.log(id)
  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProductData(docSnap.data());
        } else {
          console.error("No product found!");
        }
      }
    };
    fetchProduct();
  }, [id]);

  if (!productData) return <p>Loading...</p>;

  const backToHome = () => {
    window.location.href = '/';
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-start p-5 bg-gray-100 shadow-lg rounded-lg">
        {/* Image Section */}
        {productData?.imageUrl && (
          <img
            className="flex-shrink-0 w-full md:w-1/3 h-auto md:h-[500px] object-contain rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            src={productData.imageUrl[0]}
            alt={productData.name}
          />

        )}

        {/* Text Content Section */}
        <div className="flex flex-col justify-start md:ml-5 mt-5 md:mt-0 w-full md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800">{productData.name}</h1>
          <p className="mt-4 text-xl font-semibold text-teal-600">Price: ${productData.price}</p>
          <p className="mt-2 text-gray-500">Category: {productData.category}</p>
          <h1 className="text-3xl font-bold text-gray-800">Description</h1>
          <p className="mt-2 text-gray-600">{productData.description}</p>
          {/* Add to Cart Button */}
          <button className="mt-5 bg-teal-600 text-white font-bold py-2 px-4 rounded hover:bg-teal-700 transition duration-200 m-7">
            Add to Basket
          </button>
          {/* Additional Info Section */}
          <div className="mt-4 border-t border-gray-300 pt-4">
            <h2 className="text-xl font-semibold text-gray-800">Additional Information</h2>
            <p className="mt-2 text-gray-600">Warranty: {productData?.warranty || 'Not specified'}</p>
            <p className="mt-2 text-gray-600">Brand: {productData?.brand || 'Not specified'}</p>
            <p className="mt-2 text-gray-600">Prime Shipping: {productData?.hasPrime ? 'Available' : 'Not Available'}</p>
            <p className="mt-2 text-gray-600">Product Dimensions: {productData?.length || 'Not specified'} x {productData?.width || 'Not specified'} x {productData?.height || 'Not specified'} {productData?.unit || ('cm') || 'Not specified'}</p>
            <p className=" flexmt-2 text-gray-600">Rating: {productData?.rating}
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </p>
            <p className="mt-2 text-gray-600">Available in {productData?.country || 'In All Country'} only.</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Highlights</h1>
            <p className="mt-2 text-gray-600">{productData.highlights}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={backToHome}
          className="flex items-center bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-600 transition duration-200 m-7"
        >
          Back to Home
        </button>
      </div>
      <div>
        <BackToTop />
      </div>
    </>
  );
};

export default ProductDetail;
