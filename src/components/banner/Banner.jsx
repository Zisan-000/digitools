import React from "react";
import banner from "../../assets/banner.png";
import play from "../../assets/Play.png";
import { FaRegCircleDot } from "react-icons/fa6";
import CountUp from "react-countup";

const Banner = () => {
  return (
    <>
      {/* section 1 */}
      <div className="flex justify-between max-w-328 mx-auto mt-20 items-center">
        <div>
          <button className="bg-[#E1E7FF] rounded-4xl p-2 flex items-center gap-2 text-purple-700 mb-4 text-sm">
            <FaRegCircleDot className="" />
            New: AI-Powered Tools Available
          </button>
          <h1 className="font-bold text-7xl pb-4">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-gray-500 pb-6">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
          <div className="flex gap-2">
            <button className="btn rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
              Explore Products
            </button>
            <button className="btn flex rounded-4xl bg-transparent border-purple-500 text-purple-500">
              <img src={play} alt="" />
              Watch Demo
            </button>
          </div>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
      {/* section 2 */}
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-16 my-20 text-white">
        <div className="flex justify-between max-w-328 mx-auto ">
          <div className="px-32 border-r">
            <div className="font-bold text-6xl">50k+</div>
            <br />
            <br /> <span className="font-medium text-2xl">Active Users</span>
          </div>
          <p className="px-32 border-r">
            <span className="font-bold text-6xl">200+</span> <br />
            <br />
            <span className="font-medium text-2xl">Premium Tools</span>
          </p>
          <p className="px-32">
            <span className="font-bold text-6xl">4.9</span> <br />
            <br />
            <span className="font-medium text-2xl">Rating</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
