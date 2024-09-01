import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoMdHeartEmpty } from "react-icons/io";

function Header() {
  return (
    <>
      <header className="bg-white shadow-md ">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold ml-0">
            <a href="/" className="text-gray-800">
              TOY shop
            </a>
          </div>
          


          <div className="flex items-center space-x-4">
            
            {/* <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            /> */}

            <a href="/cart" className="text-gray-600 hover:text-gray-800">
                  <BsCart2 className="text-2xl"/>
            </a>
            <a href="#" className="text-2xl ">
              <CgProfile />
            </a>

            <a href="#" className="text-2xl ">
                <IoMdHeartEmpty/>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
