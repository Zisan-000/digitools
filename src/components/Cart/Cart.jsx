import React from "react";
import { Bounce, toast, Zoom } from "react-toastify";

const Cart = ({ selectedCart, setSelectedCart, setCartValue }) => {
  const total = selectedCart.reduce((acc, item) => acc + item.price, 0);

  const handleRemove = (id) => {
    console.log(id);
    const updatedCart = selectedCart.filter((item) => item.id !== id);
    setSelectedCart(updatedCart);
    setCartValue(updatedCart.length);
    toast.error("Item removed from the Cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  };

  const handleCheckout = () => {
    setSelectedCart([]);
    setCartValue(0);
    toast.success("Payment Successful! Your cart has been cleared.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white border border-gray-100 rounded-3xl shadow-sm mt-6 md:mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4 border-gray-50">
        Your Cart
      </h2>

      {/* Cart Items List */}
      <div className="space-y-4 mb-8">
        {selectedCart.length > 0 ? (
          selectedCart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-[#F9FAFB] rounded-2xl border border-gray-50 gap-4"
            >
              {/* Left Side: Icon & Details */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                {/* Icon Container - Fixed size so it doesn't shrink */}
                <div className="shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                {/* Item Details */}
                <div className="grow">
                  <h3 className="font-bold text-gray-900 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-medium">
                    ${item.price} <span className="mx-1">•</span> Digital
                    License
                  </p>
                </div>
              </div>

              {/* Right Side: Remove Button */}
              <div className="w-full sm:w-auto flex justify-end border-t sm:border-t-0 border-gray-200 pt-3 sm:pt-0">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-400 text-xs md:text-sm font-bold uppercase tracking-wider hover:text-red-600 transition-colors cursor-pointer p-2 -mr-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16 px-4">
            <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <p className="text-gray-400 font-medium">Your cart feels lonely.</p>
            <p className="text-gray-300 text-sm">
              Add some tools to get started!
            </p>
          </div>
        )}
      </div>

      {/* Total Section */}
      <div className="bg-gray-50 rounded-2xl p-6 mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-500 font-medium">Subtotal</span>
          <span className="font-semibold text-gray-900">${total}</span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="text-gray-900 font-bold text-lg">Total Amount</span>
          <span className="text-3xl font-black text-[#7B22F9]">${total}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        disabled={selectedCart.length === 0}
        className="w-full bg-[#7B22F9] disabled:bg-gray-200 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#6a1dd6] transition-all transform active:scale-[0.98] shadow-xl shadow-purple-100 cursor-pointer"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
