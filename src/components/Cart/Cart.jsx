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
    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-100 rounded-3xl shadow-sm mt-10">
      <h2 className="text-xl font-bold mb-6 text-gray-900">Your Cart</h2>

      {/* Cart Items List */}
      <div className="space-y-3 mb-8">
        {selectedCart.length > 0 ? (
          selectedCart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-2xl border border-gray-50"
            >
              <div className="flex items-center gap-4">
                {/* Icon Container */}
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                {/* Item Details */}
                <div>
                  <h3 className="font-semibold text-gray-900 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm">${item.price}</p>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemove(item.id)}
                className="text-pink-500 text-sm font-semibold hover:text-pink-600 transition cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-10">Your cart is empty.</p>
        )}
      </div>

      {/* Total Section */}
      <div className="flex justify-between items-center mb-8 px-2">
        <span className="text-gray-500">Total:</span>
        <span className="text-2xl font-bold text-gray-900">${total}</span>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="w-full bg-[#7B22F9] text-white py-4 rounded-full font-bold text-lg hover:bg-[#6a1dd6] transition shadow-lg shadow-purple-200 cursor-pointer"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
