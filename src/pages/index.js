import { useEffect ,useState} from "react";
import { Inter } from "next/font/google";
import Banner from "../Component/Banner";
import ProductFeed from "../Component/ProductFeed";
import HomePage from "@/Component/Scroll";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [products,setProducts] = useState([])
  useEffect(() => {
    productFeed()
  }, [])
  const productFeed = async() => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    setProducts(data)
    console.log('first')
  }
  return (

    <div>
     
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner  */}
        <Banner />
        <ProductFeed Product={products} />
      </main>
      <main>
      <HomePage/>
   
      </main>


    </div>


  );
}

// Get https://fakestoreapi.com/products


