import React from "react";
import sportimg from "../assets/img/CategoryImg/sport1.png";
import actionimg from '../assets/img/CategoryImg/action2.png'
import constructionimg from '../assets/img/CategoryImg/constrution.png'
import Educationalimg from '../assets/img/CategoryImg/Educational.png'
import Electronicimg from '../assets/img/CategoryImg/Electronic.png'
import {Link} from 'react-router-dom'

const ShopByinteRest = () => {
  return (
    <div className="mt-14 mb-28 flex justify-center items-center flex-col md:flex-row">

      <div className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 w-36 h-28 mr-5  rounded-lg relative">
       <Link to={'/productList'}>
        <img
          src={sportimg}
          alt="Example"
          className="absolute top-5  transform  -translate-y-1/2 max-[1148px]:-translate-y-16"
        />
        <p className="text-center absolute shopByinterst left-8 font-bold bottom-3">
          Sports toys
        </p>
        </Link>
      </div>

      {/* 2 */}

      <div className="bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 w-36 h-28 mr-5 mt-20 rounded-lg relative md:mt-0">
      <Link to={'/productList'}>
        <img
          src={actionimg}
          alt="Example"
          className="absolute top-5 h-36  left-8  transform  -translate-y-20 max-[1148px]:-translate-y-24"
        />
        <p className="text-center absolute shopByinterst left-6 font-bold bottom-3">
            Action figures
        </p>
        </Link>
      </div>

      {/* 3 */}

      <div className="bg-gradient-to-r from-purple-300 via-purple-100 to-purple-300 w-36 h-28 mr-5 mt-14 rounded-lg relative md:mt-0">
        <Link to={'/productList'}>
        <img
          src={constructionimg}
          alt="Example"
          className="absolute top-5  transform  -translate-y-1/2"
        />
        <p className="text-center absolute shopByinterst left-6 font-bold bottom-3">
          Construction 
        </p>
        </Link>
      </div>

      {/* 4 */}

      <div className="bg-gradient-to-r from-green-300 via-green-100 to-green-300 w-36 h-28 mr-5 mt-16  rounded-lg relative md:mt-0">
        <Link to={'/productList'}>
        <img
          src={Educationalimg}
          alt="Example"
          className="absolute top-5  transform  -translate-y-20"
        />
        <p className="text-center absolute left-8  font-bold bottom-3 ">
        Educational 
        </p>
        </Link>
      </div>

      {/* 5 */}
      <div className="bg-gradient-to-r from-red-300 via-red-100 to-red-300 w-36 h-28 mr-5 mt-16 rounded-lg relative md:mt-0">
       
       <Link to={'/productList'}>
         <img
          src={Electronicimg}
          alt="Example"
          className="absolute top-5  transform  -translate-y-1/2"
        />
        <p className="text-center absolute shopByinterst left-9 font-bold bottom-3">
             Electronic 
        </p>
        </Link> 
      </div>


    </div>
  );
};

export default ShopByinteRest;
