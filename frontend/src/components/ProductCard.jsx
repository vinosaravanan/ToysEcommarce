import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllproductsAsync,
  SelectAllproducts,
} from "../features/products/ProductsSlice";

import Pagination from "./Pagination";
import {Link} from 'react-router-dom'

const ProductCard = () => {
  const products = useSelector(SelectAllproducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllproductsAsync());
  }, []);


  console.log("from product card", products);

  return (
    <>
    
       <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">

       {products.map((product) => (

        <div class="max-w-sm mr-5 mb-5 h-80  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         
          <Link to={`/productDetails/${product._id}`}>
            <img
              className={`rounded-t-lg h-40 w-full object-fill object-cover`}
              src={product.imagePath}
              alt=""
            />
          </Link>
         

          <div class="p-5">

           
            <Link to={`/productDetails/${product._id}`}>
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
      <hr className=" h-0.5 bg-gray-300 mb-3"/>
                <Pagination/>
   
    </>
  )

};

export default ProductCard;
