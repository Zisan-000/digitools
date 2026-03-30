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
    <div>
      <div className="card w-96 bg-base-100 shadow-sm my-10">
        <div className="card-body">
          <div className="flex justify-between">
            <div className="w-12 h-12 rounded-full p-2 border-2 border-gray-200 bg-white flex items-center justify-center">
              <img
                src={product.icon}
                className="w-8 h-8 object-contain"
                alt=""
              />
            </div>
            <span
              className={`badge badge-lg rounded-3xl font-medium ${
                product.tag === "Best Seller"
                  ? "bg-yellow-100 text-yellow-600"
                  : product.tag === "New"
                    ? "bg-green-100 text-green-600"
                    : product.tag === "Popular"
                      ? "bg-purple-100 text-purple-600"
                      : ""
              }`}
            >
              {product.tag}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <span className="text-2xl">
              <span className="font-bold">${product.price}</span>{" "}
              <span className="text-sm ">/{product.period}</span>
            </span>
          </div>

          <ul className="mt-2 flex flex-col gap-2 text-xs text-gray-500">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
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
              <span>{product.features[0]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
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
              <span>{product.features[1]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
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
              <span>{product.features[2]}</span>
            </li>
          </ul>
          <div className="mt-6">
            <button
              onClick={() => {
                setCart(!cart);
                handleCart();
              }}
              disabled={cart ? true : false}
              className={`${cart === true ? "btn-error" : "bg-linear-to-r from-[#4F39F6] via-[#7B22F9] to-[#9514FA]"} btn btn-primary btn-block  rounded-4xl`}
            >
              {cart === true ? "Added to Cart" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
