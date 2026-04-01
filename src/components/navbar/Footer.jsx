import React from "react";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-400 py-12 border-t-8 border-purple-600">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Layout: 1 col on mobile, 2 on tablet, 6 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-12 mb-16">
          {/* 1. Brand Info - Spans 2 columns on large screens */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="text-white text-3xl font-bold mb-6">DigiTools</h2>
            <p className="max-w-sm leading-relaxed text-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* 2. Product */}
          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition">
                Features
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Pricing
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Templates
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Integrations
              </li>
            </ul>
          </div>

          {/* 3. Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition">
                About
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Blog
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Press
              </li>
            </ul>
          </div>

          {/* 4. Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition">
                Documentation
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Help Center
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Community
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* 5. Social */}
          <div>
            <h3 className="text-white font-semibold mb-6">Social Links</h3>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-gray-200 transition">
                <CiInstagram size={18} />
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-gray-200 transition">
                <CiFacebook size={18} />
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-gray-200 transition">
                <FaXTwitter size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-center md:text-left gap-4">
          <p>© 2026 Digitools. All rights reserved.</p>

          {/* Policy Links: Wrapped in a flex-wrap for very small screens */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <span className="hover:text-white cursor-pointer whitespace-nowrap">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer whitespace-nowrap">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer whitespace-nowrap">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
