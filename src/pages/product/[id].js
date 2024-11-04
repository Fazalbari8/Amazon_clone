import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
const ProductDetail = () => {
    const { id } = useParams();
    const router = useRouter();

    console.log(id)
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const productFeed = async () => {
            const res = await fetch('https://fakestoreapi.com/products/' + id)
            const data = await res?.json()
            setProduct(data)
            console.log('first')
        }
        productFeed()
    }, []);



    return (
        <div className="flex flex-col md:flex-row items-start p-5 bg-gray-100 shadow-lg rounded-lg">
        {/* Image Section */}
        {product?.image && (
            <img
                className="flex-shrink-0 w-full md:w-1/3 h-auto md:h-[500px] object-contain rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                src={product.image}
                alt={product.title}
            />
        )}
    
        {/* Text Content Section */}
        <div className="flex flex-col justify-start md:ml-5 mt-5 md:mt-0 w-full md:w-2/3">
            <h1 className="text-3xl font-bold text-gray-800">{product?.title}</h1>
            <p className="mt-2 text-gray-600">{product?.description}</p>
            <p className="mt-4 text-xl font-semibold text-teal-600">Price: ${product?.price}</p>
            <p className="mt-2 text-gray-500">Category: {product?.category}</p>
    
            {/* Additional Info Section */}
            <div className="mt-4 border-t border-gray-300 pt-4">
                <h2 className="text-xl font-semibold text-gray-800">Additional Information</h2>
                <p className="mt-2 text-gray-600">Warranty: {product?.warranty || 'Not specified'}</p>
                <p className="mt-2 text-gray-600">Brand: {product?.brand || 'Not specified'}</p>
                <p className="mt-2 text-gray-600">Prime Shipping: {product?.hasPrime ? 'Available' : 'Not Available'}</p>
            </div>
    
            {/* Add to Cart Button */}
            <button className="mt-5 bg-teal-600 text-white font-bold py-2 px-4 rounded hover:bg-teal-700 transition duration-200 m-7">
                Add to Basket
            </button>
        </div>
    </div>
    

    );
};

export default ProductDetail;
