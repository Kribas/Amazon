import React, { useState } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItemToBasket, selectItems } from "../slices/basketSlice";

type ProductProps = {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
};

const Product: React.FC<ProductProps> = ({
  id,
  title,
  category,
  price,
  description,
  image,
}) => {
  const MAX_RATING = 5;
  const MIN_RATING = 1;

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch(
      addItemToBasket({
        id,
        title,
        category,
        price,
        description,
        image,
        rating,
        hasPrime,
      })
    );
  };

  return (
    <div className="flex flex-col m-3 p-3 z-30 relative bg-white">
      <p className="absolute top-2 right-2 text-gray-400">{category}</p>
      <div className="mt-8 m-auto">
        <Image
          className="fill"
          width={150}
          height={150}
          style={{ objectFit: "contain" }}
          src={image}
          alt="Product Image"
          loading="lazy"
        />
      </div>
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill(rating)
          .map((_, i) => {
            return (
              <div key={i}>
                <AiFillStar className="h-5 text-yellow-500" />
              </div>
            );
          })}
      </div>
      <p className="text-xs line-clamp-2 my-2">{description}</p>
      <div className="mb-5">
        <small>$</small>
        <strong>{price}</strong>
      </div>
      {hasPrime && (
        <div className="flex space-x-3 items-center">
          <img
            className="w-10"
            src="https://links.papareact.com/fdw"
            alt="Has Prime Image"
          />
          <p className="text-xs">FREE Next-day delivery</p>
        </div>
      )}
      <button onClick={addToBasket} className="button mt-auto">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
