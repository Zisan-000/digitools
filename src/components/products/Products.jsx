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
    <div className="max-w-340 mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-bold pb-6">Premium Digital Tools</h1>
        <p className="text-gray-500 pb-5">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => setSelect("products")}
            className={`px-5 py-2  font-semibold ${select === "products" ? "text-white bg-linear-to-r from-[#4F39F6] via-[#7B22F9] to-[#9514FA]" : "text-purple-950 border-none bg-none"} cursor-pointer rounded-4xl border-none`}
          >
            Products
          </button>
          <button
            onClick={() => setSelect("cart")}
            className={`px-5 py-2 rounded-4xl ${select === "cart" ? "text-white bg-linear-to-r from-[#4F39F6] via-[#7B22F9] to-[#9514FA]" : "text-purple-950 border-none bg-none"} font-semibold cursor-pointer`}
          >
            Cart {cartValue > 0 ? `(${cartValue})` : ""}
          </button>
        </div>
      </div>

      {select === "products" ? (
        <AvailableProducts
          products={products}
          cartValue={cartValue}
          setCartValue={setCartValue}
          selectedCart={selectedCart}
          setSelectedCart={setSelectedCart}
        ></AvailableProducts>
      ) : (
        <Cart
          selectedCart={selectedCart}
          setSelectedCart={setSelectedCart}
          setCartValue={setCartValue}
        ></Cart>
      )}
    </div>
  );
};

export default Products;
