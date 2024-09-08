import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <a href="/" className="text-gray-800">
              TOY shop
            </a>
          </div>

          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="/cart" className="text-gray-600 hover:text-gray-800">
              <BsCart2 className="text-2xl mr-2" />
            </a>
            <a href="#" className="text-2xl mr-2">
              <CgProfile />
            </a>
            <a href="#" className="text-2xl">
              <IoMdHeartEmpty />
            </a>
          </div>

          <div className="md:hidden ml-3">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="flex justify-end">
            <div className="flex flex-col w-28 px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/cart" className="mr-3">
                Profile
              </a>

              <a href="#" className="mr-3 py-1">
                Card
              </a>

              <a href="#" className="mr-3 py-1">
                dasboard
              </a>

              <a href="#" className="mr-3 py-1">
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
