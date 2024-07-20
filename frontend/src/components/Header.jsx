import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <>
      <header className="bg-white shadow-md ">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <a href="/" className="text-gray-800">
              eShop
            </a>
          </div>
          <nav className="flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="/shop" className="text-gray-600 hover:text-gray-800">
              Shop
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            
            {/* <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            /> */}

            <a href="/cart" className="text-gray-600 hover:text-gray-800">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293a1 1 0 01-.707.207H4a1 1 0 01-1-1V5.4a1 1 0 01.207-.707L4.586 3H21M7 13v6a2 2 0 104 0v-6m6 0v6a2 2 0 104 0v-6"
                />
              </svg>
            </a>
            <AccountCircleIcon/>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
