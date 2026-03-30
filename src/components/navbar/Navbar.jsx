import React from "react";

const Navbar = ({ cartValue }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="max-w-328 mx-auto">
          <a className="btn btn-ghost p-0">
            <span className="text-4xl  bg-linear-to-r  from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text  ">
              DigiTools
            </span>
          </a>
        </div>
        <div className="flex text-sm font-semibold">
          <ul className="menu menu-horizontal">
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
        <div className="flex gap-4 max-w-328 mx-auto">
          <div className=" dropdown dropdown-end">
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
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                {cartValue === 0 ? (
                  ""
                ) : (
                  <span className="badge badge-sm indicator-item rounded-full border-2 border-indigo-400">
                    {cartValue}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="btn bg-transparent border-none font-bold">
              Login
            </button>
            <button className="btn rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
