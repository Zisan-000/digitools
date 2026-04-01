import React from "react";
import user from "../../assets/user.png";
import pack from "../../assets/package.png";
import rocket from "../../assets/rocket.png";
import { FaCheck } from "react-icons/fa6";

const Main = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-50 overflow-x-hidden">
      {/* SECTION 1: GET STARTED */}
      <section className="py-12 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-1 inline-block px-4 py-2">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-8 md:mb-12 mt-4 max-w-lg mx-auto text-sm md:text-base">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Grid: 1 column on mobile, 3 on medium screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              step: "01",
              title: "Create Account",
              desc: "Sign up for free in seconds. No credit card required to get started.",
              icon: user,
            },
            {
              step: "02",
              title: "Choose Products",
              desc: "Browse our catalog and select the tools that fit your needs.",
              icon: pack,
            },
            {
              step: "03",
              title: "Start Creating",
              desc: "Download and start using your premium tools immediately.",
              icon: rocket,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm relative border border-gray-100 transition-all hover:shadow-md"
            >
              {/* Step Badge */}
              <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {item.step}
              </span>

              {/* Icon Container */}
              <div className="mb-6 flex items-center justify-center bg-purple-50 w-16 h-16 md:w-20 md:h-20 rounded-2xl mx-auto">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: PRICING */}
      <section className="py-12 md:py-20 bg-white px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 mb-10 md:mb-16 text-sm md:text-base">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>

          {/* Grid: Stacks vertically on mobile, 3 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Starter */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 text-left order-2 md:order-1">
              <h3 className="text-xl font-bold">Starter</h3>
              <p className="text-gray-500 text-sm mb-6">
                Perfect for getting started
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-400">/Month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" /> Access to 10 free tools
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" /> Basic templates
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" /> Community support
                </li>
              </ul>
              <button className="w-full bg-linear-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
                Get Started Free
              </button>
            </div>

            {/* Pro - Featured (Scales slightly on desktop only) */}
            <div className="bg-linear-to-br from-indigo-600 to-purple-500 p-8 rounded-2xl text-white text-left shadow-2xl md:scale-105 relative z-10 order-1 md:order-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                Most Popular
              </div>
              <h3 className="text-xl font-bold">Pro</h3>
              <p className="text-purple-200 text-sm mb-6">
                Best for professionals
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-purple-200">/Month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-purple-100">
                <li className="flex items-center gap-2">
                  <FaCheck /> All premium tools
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck /> Priority support
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck /> Unlimited projects
                </li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                Start Pro Trial
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 text-left order-3">
              <h3 className="text-xl font-bold">Enterprise</h3>
              <p className="text-gray-500 text-sm mb-6">
                For teams and businesses
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-400">/Month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" /> Everything in Pro
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" /> Custom branding
                </li>
              </ul>
              <button className="w-full bg-linear-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA */}
      <section className="bg-linear-to-br from-indigo-600 to-purple-500 py-16 md:py-24 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-100 mb-10 max-w-2xl mx-auto text-sm md:text-base">
          Join thousands of professionals who are already using DigiTools to
          work smarter.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="w-full sm:w-auto bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
            Explore Products
          </button>
          <button className="w-full sm:w-auto border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
            View Pricing
          </button>
        </div>
        <p className="text-[10px] md:text-xs text-purple-200 uppercase tracking-wide">
          14-day free trial • No credit card required
        </p>
      </section>
    </div>
  );
};

export default Main;
