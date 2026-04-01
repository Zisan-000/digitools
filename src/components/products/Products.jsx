import React, { use, useState } from "react";
import AvailableProducts from "../AvailableProducts/AvailableProducts";
import Cart from "../Cart/Cart";

const Products = ({ productPromise, setCartValue, cartValue }) => {
  const products = use(productPromise);
  // console.log(products);
  const [select, setSelect] = useState("products");
  const [selectedCart, setSelectedCart] = useState([]);
  // console.log(select);
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10 md:mt-16">
      <div className="text-center mb-10 md:mb-16">
        {/* Responsive Heading */}
        <h1 className="text-3xl md:text-5xl font-bold pb-4 md:pb-6 leading-tight">
          Premium Digital Tools
        </h1>

        {/* Responsive Paragraph: removed hard <br /> for natural flow */}
        <p className="text-gray-500 pb-8 text-sm md:text-base max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        {/* Toggle Switch Container */}
        <div className="flex justify-center p-1 bg-gray-100 w-fit mx-auto rounded-full shadow-inner">
          <button
            onClick={() => setSelect("products")}
            className={`px-6 md:px-8 py-2 md:py-3 font-bold transition-all duration-300 rounded-full cursor-pointer text-sm md:text-base ${
              select === "products"
                ? "text-white shadow-lg bg-linear-to-r from-[#4F39F6] via-[#7B22F9] to-[#9514FA]"
                : "text-gray-500 hover:text-purple-700 bg-transparent border-none"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setSelect("cart")}
            className={`px-6 md:px-8 py-2 md:py-3 font-bold transition-all duration-300 rounded-full cursor-pointer text-sm md:text-base ${
              select === "cart"
                ? "text-white shadow-lg bg-linear-to-r from-[#4F39F6] via-[#7B22F9] to-[#9514FA]"
                : "text-gray-500 hover:text-purple-700 bg-transparent border-none"
            }`}
          >
            Cart{" "}
            {cartValue > 0 ? (
              <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                {cartValue}
              </span>
            ) : (
              ""
            )}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="transition-opacity duration-300">
        {select === "products" ? (
          <AvailableProducts
            products={products}
            cartValue={cartValue}
            setCartValue={setCartValue}
            selectedCart={selectedCart}
            setSelectedCart={setSelectedCart}
          />
        ) : (
          <Cart
            selectedCart={selectedCart}
            setSelectedCart={setSelectedCart}
            setCartValue={setCartValue}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
