import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Banner from "../Component/Banner";
import ProductFeed from "../Component/ProductFeed";
import BackToTop from "@/Component/Scroll";
import ProductGrid from "@/Component/productgrid";
const inter = Inter({ subsets: ["latin"] });
import { useDispatch } from 'react-redux';
import { add } from '@/Redux/Cartslice';
// import DashboardLayout from "@/Component/Dashboad";

export default function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    productFeed()
  }, [])
  const productFeed = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    setProducts(data)
    console.log('first')
  }
  const dispatch =useDispatch();
  
  return (

    <div>
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed Product={products} />
      </main>
      {/* <div className='productsWrapper'>
          {
            products.map((product)=>(
              <div key={product.id} className='card'>
                  <img src={product.image} alt='img'/>
                  <h4>{product.title}</h4>
                  <h5>{product.price}</h5>
                  <button className='btn' onClick={()=>handleadd(product)}>Add to cart</button>
              </div>
            ))
          }
    </div> */}

      <main>
        <ProductGrid />
        <BackToTop />
      </main>
    </div>
  );
}



