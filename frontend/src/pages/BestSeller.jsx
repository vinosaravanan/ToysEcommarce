import React from "react";
import {Link} from 'react-router-dom'
import Bestseller from "../assets/BestSeller";

const BestSeller = () => {
  console.log(Bestseller);

  return (
    <div className="flex justify-center flex-col items-center mt-8 750px:grid 750px:grid-cols-2 750px:justify-items-center 1020px:flex 1020px:flex-row "> 
         

      {Bestseller.map((product) => (

        <div class="max-w-sm mr-5 mb-5 h-96 w-52  overflow-clip bg-white border border-gray-200 rounded-lg shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  dark:border-gray-200">
          <Link to={`/productList`}>
            <img
              className={`rounded-t-lg h-52 w-52 object-fill object-cover`}
              src={product.image}
              alt=""
            />
          </Link>

          <div class="p-3">
            <Link to={`/productList`}>
              <h5 class="mb-1 text-sm font-bold tracking-tight text-violet-900">
                {product.name}
              </h5>
            </Link>

            <p class="mb-3 font-normal text-gray-900 dark:text-gray-700 lowercase">
              {product.description}
            </p>

            <h2 className="font-bold mb-2">
                  ₹{product.price} 
              <span className="text-[15px] ml-1  dark:text-gray-500 line-through">
                 ₹{product.price}
              </span>
                <span className="text-[17px] ml-1  dark:text-green-500">
                  {product.discount}% off
                </span>

                </h2>
          </div>
        </div>

      ))}

    </div>
  );
};

export default BestSeller;
