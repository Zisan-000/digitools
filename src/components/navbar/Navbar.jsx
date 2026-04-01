import React from "react";

const Navbar = ({ cartValue }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50 px-4 md:px-8">
        {/* Navbar Start: Logo & Mobile Menu */}
        <div className="navbar-start">
          {/* Mobile Hamburger Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <a className="btn btn-ghost p-0 normal-case">
            <span className="text-2xl md:text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
              DigiTools
            </span>
          </a>
        </div>

        {/* Navbar Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-sm">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>

        {/* Navbar End: Cart & Actions */}
        <div className="navbar-end gap-2 md:gap-4">
          {/* Cart Icon */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartValue > 0 && (
                  <span className="badge badge-sm indicator-item rounded-full border-2 border-indigo-400 bg-white text-indigo-600 font-bold">
                    {cartValue}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Buttons: Hidden/Simplified on small mobile */}
          <div className="flex items-center gap-1 md:gap-3">
            <button className="btn btn-ghost btn-sm md:btn-md font-bold hidden sm:flex">
              Login
            </button>
            <button className="btn btn-sm md:btn-md rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none px-4 md:px-6">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
