import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FiMapPin, FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const items = useSelector(selectItems);
  const router = useRouter();

  return (
    <>
      <div className="flex items-center flex-grow bg-amazon_blue p-1">
        <div className="flex flex-grow sm:flex-grow-0 mt-2">
          <Image
            src="https://links.papareact.com/f90"
            className="cursor-pointer mx-2"
            alt="Header Logo"
            width={120}
            height={20}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="text-white flex items-center text-xs mr-3 hover:underline cursor-pointer rounded-md">
          <FiMapPin className="mr-2 " />
          <div>
            <p>Deliver to, Kribas</p>
            <p>Lalitpur 44700</p>
          </div>
        </div>
        <div className="hidden sm:flex flex-grow rounded-md h-10 items-center cursor-pointer bg-yellow-400 hover:bg-yellow-500 mr-3">
          <input
            type="text"
            className="h-full p-2 w-6 rounded-l-md flex-grow flex-shrink focus:outline-none"
          />
          <div className="p-4">
            <FiSearch className="h-12" />
          </div>
        </div>
        <div className="flex text-white text-xs mr-3 space-x-9">
          <div className="hover:underline cursor-pointer">
            <p>Hello, Kribas</p>
            <p>Accounts & Lists</p>
          </div>
          <div className="hover:underline cursor-pointer">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="hover:underline relative cursor-pointer">
            <span className="absolute top-0 right-0 h-4 bg-yellow-400 rounded-lg text-center w-4">
              {items.length}
            </span>

            <FiShoppingCart className="h-5 w-5" />
            <p
              onClick={() => router.push("/checkout")}
              className="font-extrabold md:text-sm"
            >
              Cart
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
