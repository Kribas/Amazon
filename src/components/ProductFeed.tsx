import dynamic from "next/dynamic";
import React from "react";
// import Product from "./Product";
const Product = dynamic(() => import("./Product"), { ssr: false });

type ProductFeedProps = {
  products: any;
};

const ProductFeed: React.FC<ProductFeedProps> = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto md:-mt-52">
      {products.slice(0, 4).map((product: any) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          category={product.category}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt="Amazon Image"
      />
      <div className="md:col-span-2">
        {products.slice(4, 5).map((product: any) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      {products.slice(5, products.length).map((product: any) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          category={product.category}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductFeed;
