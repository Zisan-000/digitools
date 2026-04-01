import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";

const Card = ({
  product,
  cartValue,
  setCartValue,
  selectedCart,
  setSelectedCart,
}) => {
  const [cart, setCart] = useState(false);
  const handleCart = () => {
    setCart(true);
    setCartValue(cartValue + 1);
    setSelectedCart([...selectedCart, product]);
    toast.info("Cart Added Successfully!!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="flex justify-center h-full">
      {/* Changed w-96 to w-full max-w-md to ensure it fits mobile but doesn't get too huge on desktop */}
      <div className="card w-full max-w-md bg-base-100 shadow-sm hover:shadow-md transition-shadow border border-gray-100 my-4 flex flex-col">
        <div className="card-body p-6 md:p-8 flex flex-col h-full">
          {/* Header: Icon & Badge */}
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-2xl p-2 border border-gray-100 bg-purple-50 flex items-center justify-center">
              <img
                src={product.icon}
                className="w-8 h-8 object-contain"
                alt={product.name}
              />
            </div>
            <span
              className={`badge badge-md py-3 px-4 rounded-full font-bold text-[10px] uppercase tracking-wider ${
                product.tag === "Best Seller"
                  ? "bg-yellow-100 text-yellow-700 border-none"
                  : product.tag === "New"
                    ? "bg-green-100 text-green-700 border-none"
                    : "bg-purple-100 text-purple-700 border-none"
              }`}
            >
              {product.tag}
            </span>
          </div>

          {/* Product Content */}
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {product.name}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              {product.description}
            </p>

            <div className="mt-2">
              <span className="text-3xl font-black text-gray-900">
                ${product.price}
              </span>
              <span className="text-gray-400 text-sm font-medium">
                /{product.period}
              </span>
            </div>
          </div>

          {/* Features List - Pushes the button to the bottom */}
          <ul className="grow space-y-3 mb-8">
            {product.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start text-sm text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 me-3 text-green-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <div className="card-actions mt-auto">
            <button
              onClick={() => {
                setCart(!cart);
                handleCart();
              }}
              disabled={cart}
              className={`btn btn-block rounded-xl font-bold border-none transition-all duration-300 ${
                cart
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-linear-to-r from-[#4F39F6] via-[#7B22F9] to-[#9514FA] text-white hover:opacity-90 shadow-lg shadow-purple-200"
              }`}
            >
              {cart ? (
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Added to Cart
                </span>
              ) : (
                "Buy Now"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
