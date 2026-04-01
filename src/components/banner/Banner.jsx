import React from "react";
import banner from "../../assets/banner.png";
import play from "../../assets/Play.png";
import { FaRegCircleDot } from "react-icons/fa6";
import CountUp from "react-countup";

const Banner = () => {
  return (
    <>
      {/* section 1: Hero */}
      <section className="px-6 md:px-10 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between max-w-6xl mx-auto mt-10 md:mt-20 items-center gap-12">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <button className="bg-[#E1E7FF] rounded-full px-4 py-2 mt-6 flex items-center gap-2 text-purple-700 mb-6 text-xs md:text-sm mx-auto lg:mx-0">
              <FaRegCircleDot className="animate-pulse" />
              <span>New: AI-Powered Tools Available</span>
            </button>

            {/* Heading - Adjusted from 7xl to responsive scale */}
            <h1 className="font-bold text-4xl md:text-6xl xl:text-7xl leading-tight pb-4">
              Supercharge Your <br className="hidden md:block" /> Digital
              Workflow
            </h1>

            {/* Description */}
            <p className="text-gray-500 pb-8 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-8 py-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold hover:opacity-90 transition shadow-lg">
                Explore Products
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-transparent border border-purple-500 text-purple-500 font-semibold hover:bg-purple-50 transition">
                <img src={play} alt="" className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Banner Image */}
          <div className="w-full max-w-2xl lg:max-w-none">
            <img
              src={banner}
              alt="Digital Workflow Banner"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* section 2: Stats */}
      <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12 md:py-16 my-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center text-center">
            {/* Stat 1 */}
            <div className="md:border-r border-white/20 py-4">
              <div className="font-bold text-5xl md:text-6xl mb-2">50k+</div>
              <div className="font-medium text-lg md:text-xl opacity-90">
                Active Users
              </div>
            </div>

            {/* Stat 2 */}
            <div className="md:border-r border-white/20 py-4">
              <div className="font-bold text-5xl md:text-6xl mb-2">200+</div>
              <div className="font-medium text-lg md:text-xl opacity-90">
                Premium Tools
              </div>
            </div>

            {/* Stat 3 */}
            <div className="py-4">
              <div className="font-bold text-5xl md:text-6xl mb-2">4.9</div>
              <div className="font-medium text-lg md:text-xl opacity-90">
                User Rating
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
