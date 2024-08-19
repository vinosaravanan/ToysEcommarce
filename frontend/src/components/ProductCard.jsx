import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllproductsAsync,
  SelectAllproducts,
} from "../features/products/ProductsSlice";

const ProductCard = () => {
  const products = useSelector(SelectAllproducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllproductsAsync());
  }, []);


  console.log("from product card", products);

  return (
    <>
       <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (

        <div class="max-w-sm mr-5 mb-5 h-80  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className={`rounded-t-lg h-40 w-full object-fill object-cover`}
              src={product.imagePath}
              alt=""
            />
          </a>

          <div class="p-5">

            <a href="#">
              <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                 {product.name}
              </h5>
            </a>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {product.description}
            </p>

            {/* <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a> */}

          </div>
        </div>

      ))}
    </div>

    </>
  )

};

export default ProductCard;
