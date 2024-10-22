import { useState } from 'react';
import { db, storage } from '../firebase'; // Make sure this path is correct
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Head from 'next/head'; // Import the Head component

export default function AddProduct() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [brand, setBrand] = useState('No Brand');
  const [brandName, setBrandName] = useState('');
  const [warranty, setWarranty] = useState('No Warranty');
  const [warrantyPeriod, setWarrantyPeriod] = useState('');
  const [highlights, setHighlights] = useState('');
  const [unit, setUnit] = useState('kg');
  const [images, setImages] = useState([]); // State for images
  // const SubmitData = async (e) => {
  //   e.preventDefault();
  //   console.log("sss")
  //   try {
  //     const docRef = await addDoc(collection(db, 'products'), {
  //       name: productName,
  //       price: parseFloat(price),
  //       description: description,
  //       weight: weight,
  //       height: height,
  //       highlights: highlights,
  //       warranty: warrantyPeriod,
  //       length: length,
  //       category: category,
  //       brand: brand === 'Brand' ? brandName : 'No Brand',
  //       warranty: warranty === 'Warranty' ? warrantyPeriod : 'No Warranty',

  //     });
  //     console.log("Document written with ID: ", docRef);
  //     // Reset the form or show a success message
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!images) {
  //     alert("Please upload an image.");
  //     return;
  //   }

  //   try {
  //     const storageRef = ref(storage, `images/${images.name}`);
  //     await uploadBytes(storageRef, images);
  //     const downloadURL = await getDownloadURL(storageRef);

  //     const docRef = await addDoc(collection(db, 'products'), {
  //       name: productName,
  //       category: category,
  //       brand: brand,
  //       warranty: warranty,
  //       weight: weight,
  //       height: height,
  //       length: length,
  //       width: width,
  //       price: parseFloat(price),
  //       description: description,
  //       imageUrl: downloadURL,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //     setProductName('');
  //     setPrice('');
  //     setDescription('');
  //     setImages(null);

  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }
  
    try {
      const imageUrls = await Promise.all(images.map(async (image) => {
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        return await getDownloadURL(storageRef);
      }));
  
      const docRef = await addDoc(collection(db, 'products'), {
        name: productName,
        price: parseFloat(price),
        description: description,
        weight: weight,
        height: height,
        length: length,
        width: width,
        category: category,
        brand: brand === 'Brand' ? brandName : 'No Brand',
        warranty: warranty === 'Warranty' ? warrantyPeriod : 'No Warranty',
        highlights: highlights,
        imageUrl: imageUrls, // Storing multiple image URLs
      });
  
      console.log("Document written with ID: ", docRef.id);
      setProductName('');
      setPrice('');
      setDescription('');
      setImages([]);
  
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  
  const backToHome = () => {
    window.location.href = '/';
  };

  const deleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index)); // Remove the image at the specified index
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 8) {
      alert("You can upload a maximum of 8 images.");
      return;
    }
    setImages((prevImages) => [...prevImages, ...files]);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <Head>
        <title>Add Product - Amazone 2.0</title> {/* Change the title here */}
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1 className="text-3xl font-bold text-center my-6 text-teal-600">Add New Product</h1>
      <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-md max-w-2xl mx-auto">

        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-teal-800 font-bold mb-2">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder='Enter product name'
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-teal-800 font-bold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder='Enter product description ...'
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-teal-800 font-bold mb-2">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder='Enter product price'
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-teal-800 font-bold mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          >
            <option value="">Please Select Category or Select with Keywords</option>
            <option value="0-6 Month Baby Accessories">0-6 Month Baby Accessories</option>
            <option value="Food Items">Food Items</option>
            <option value="Baby Boys Slippers & Shoes Collections">Baby Boys Slippers & Shoes Collections</option>
            <option value="Kids & Baby Fashion">Kids & Baby Fashion</option>
            <option value="Computers & Laptops">Computers & Laptops</option>
            <option value="Cameras">Cameras</option>
            <option value="Health & Beauty">Health & Beauty</option>
            <option value="Media, Music & Books">Media, Music & Books</option>
            <option value="Furniture & Decor">Furniture & Decor</option>
            <option value="Groceries">Groceries</option>
            <option value="Mother & Baby">Mother & Baby</option>
            <option value="Bedding & Bath">Bedding & Bath</option>
            <option value="Stationery & Craft">Stationery & Craft</option>
            <option value="Motors">Motors</option>
          </select>
        </div>

        {/* Dimensions */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-teal-800 font-bold mb-2">Weight</label>
            <div className="flex">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder='Enter product weight'
                required
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="ml-2 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                <option value="kg">kg</option>
                <option value="g">grams</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-teal-800 font-bold mb-2">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder='Enter product height'
              required
            />
          </div>
          <div>
            <label className="block text-teal-800 font-bold mb-2">Width (cm)</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder='Enter product width'
              required
            />
          </div>
          <div>
            <label className="block text-teal-800 font-bold mb-2">Length (cm)</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder='Enter product length'
              required
            />
          </div>
        </div>

        {/* Brand */}
        <div className="mb-4">
          <label className="block text-teal-800 font-bold mb-2">Brand</label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option value="No Brand">No Brand</option>
            <option value="Brand">Brand</option>
          </select>
          {brand === 'Brand' && (
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 mt-2"
              placeholder='Enter brand name'
              required
            />
          )}
        </div>

        {/* Warranty */}
        <div className="mb-4">
          <label className="block text-teal-800 font-bold mb-2">Warranty</label>
          <select
            value={warranty}
            onChange={(e) => setWarranty(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option value="No Warranty">No Warranty</option>
            <option value="Warranty">Warranty</option>
          </select>
          {warranty === 'Warranty' && (
            <input
              type="text"
              value={warrantyPeriod}
              onChange={(e) => setWarrantyPeriod(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 mt-2"
              placeholder='Enter warranty period'
              required
            />
          )}
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <label className="block text-teal-800 font-bold mb-2">Highlights</label>
          <textarea
            value={highlights}
            onChange={(e) => setHighlights(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder='Enter product highlights ...'
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-teal-800 font-bold mb-2">Upload Images (Max: 8)</label>
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            accept="image/*"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Image Previews */}
        <div className="mb-4">
          {images.length > 0 && (
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Product Image ${index + 1}`}
                    className="w-full h-32 object-cover rounded border"
                  />
                  <button
                    onClick={() => deleteImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs"
                  >
                    delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={backToHome}
            className="bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-600 transition duration-200"
          >
            Back to Home
          </button>
          <button
            type="submit"
            className="bg-teal-600 text-white font-bold py-2 px-4 rounded hover:bg-teal-700 transition duration-200"
            onSubmit={handleSubmit}
          >
            Submit Product
          </button>
        </div>
      </form>
    </div>
  );
}
