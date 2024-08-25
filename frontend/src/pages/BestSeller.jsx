import React from "react";
import {Link} from 'react-router-dom'
import Bestseller from "../assets/BestSeller";

const BestSeller = () => {
  console.log(Bestseller);

  return (
    <div className="flex justify-center mt-10">
         

      {Bestseller.map((product) => (

        <div class="max-w-sm mr-5 mb-5 h-96 w-52 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={``}>
            <img
              className={`rounded-t-lg h-52 w-52 object-fill object-cover`}
              src={product.image}
              alt=""
            />
          </Link>

          <div class="p-5">
            <Link to={``}>
              <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
            </Link>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {product.description}
            </p>
          </div>
        </div>

      ))}

    </div>
  );
};

export default BestSeller;
