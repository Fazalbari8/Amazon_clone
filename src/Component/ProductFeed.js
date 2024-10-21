import ProductComp from "./Product"
import Head from "next/head"

const productFeed = ({ Product }) => {
  console.log(Product, 'failed21')
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      <Head>
        <title>Amazon 2.0 Clone</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      

      {Product  !== undefined && Product !== null && Product !== "" && Product.length > 0 ? Product.map(({ id, title, price, description, category, image  }) => (
        <ProductComp
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}

        />
      )):<h1>No Product Found</h1>}

      <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />


    
      
   
    </div>
  )
}

export default productFeed