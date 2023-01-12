import React from "react";
import Header from "../src/components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../src/slices/basketSlice";

const checkout = () => {
  const cart = useSelector(selectItems);

  console.log("cart", cart);

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            alt="Checkout Page Banner"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col space-y-10 p-5 bg-white">
          <h1 className="text-3xl border-b pb-4">
            {cart.length === 0
              ? "Your Amazon Basket is empty"
              : "Shopping Basket"}
          </h1>
        </div>
      </main>
    </div>
  );
};

export default checkout;
