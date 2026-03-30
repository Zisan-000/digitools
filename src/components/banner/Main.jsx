import React from "react";
import user from "../../assets/user.png";
import pack from "../../assets/package.png";
import rocket from "../../assets/rocket.png";
import { FaCheck } from "react-icons/fa6";

const Main = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* SECTION 1: GET STARTED */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-1  border-blue-400 inline-block px-4 py-2">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-12 mt-4">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
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
              className="bg-white p-8 rounded-xl shadow-sm relative border border-gray-100 transition-hover hover:shadow-md"
            >
              {/* Step Badge */}
              <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {item.step}
              </span>

              {/* Icon Container */}
              <div className="mb-6 flex items-center justify-center bg-purple-50 w-20 h-20 rounded-2xl mx-auto">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 mb-16">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Starter */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-left">
              <h3 className="text-xl font-bold">Starter</h3>
              <p className="text-gray-500 text-sm mb-6">
                Perfect for getting started
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-400">/Month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center gap-1 ">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>{" "}
                  Access to 10 free tools
                </li>
                <li className="flex items-center gap-1 ">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>{" "}
                  Basic templates
                </li>
                <li className="flex items-center gap-1 ">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>{" "}
                  Community support
                </li>
                <li className="flex items-center gap-1 ">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>{" "}
                  1 project per month
                </li>
              </ul>
              <button className="w-full bg-linear-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
                Get Started Free
              </button>
            </div>

            {/* Pro - Featured */}
            <div className="bg-linear-to-br from-indigo-600 to-purple-500 p-8 rounded-2xl text-white text-left shadow-2xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
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
                <li className="flex items-center gap-1">
                  <FaCheck /> Access to all premium tools
                </li>
                <li className="flex items-center gap-1">
                  <FaCheck /> Unlimited templates
                </li>
                <li className="flex items-center gap-1">
                  <FaCheck /> Priority support
                </li>
                <li className="flex items-center gap-1">
                  <FaCheck /> Unlimited projects
                </li>
                <li className="flex items-center gap-1">
                  <FaCheck /> Cloud sync
                </li>
                <li className="flex items-center gap-1">
                  <FaCheck /> Advanced analytics
                </li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                Start Pro Trial
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-left">
              <h3 className="text-xl font-bold">Enterprise</h3>
              <p className="text-gray-500 text-sm mb-6">
                For teams and businesses
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-400">/Month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center gap-1 ">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>{" "}
                  Everything in Pro
                </li>
                <li className="flex items-center gap-1 ">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>{" "}
                  Team collaboration
                </li>
                <li className="flex items-center gap-1 ">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>{" "}
                  Custom integrations
                </li>
                <li className="flex items-center gap-1 ">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>{" "}
                  Dedicated support
                </li>
                <li className="flex items-center gap-1 ">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>{" "}
                  SLA guarantee
                </li>
                <li className="flex items-center gap-1 ">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>{" "}
                  Custom branding
                </li>
              </ul>
              <button className="w-full bg-linear-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="bg-linear-to-br from-indigo-600 to-purple-500 py-24 px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-100 mb-10 max-w-2xl mx-auto">
          Join thousands of professionals who are already using DigiTools to
          work smarter. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
            Explore Products
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
            View Pricing
          </button>
        </div>
        <p className="text-xs text-purple-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </section>
    </div>
  );
};

export default Main;
