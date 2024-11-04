import Link from 'next/link';
import ProductComp from "./ProductComp"; 
import Head from "next/head";

const ProductFeed = ({ Product }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      <Head>
        <title>Amazon 2.0 Clone</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      {Product && Product.length > 0 ? Product.map(({ id, title, price, description, category, image }) => (
        <Link key={id} href={`/product/${id}`} passHref>
          <div>
            <ProductComp
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          </div>
        </Link>
      )) : <h1>No Product Found</h1>}

      <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />
    </div>
  );
};

export default ProductFeed;
