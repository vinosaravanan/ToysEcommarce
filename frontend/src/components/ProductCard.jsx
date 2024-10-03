import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllproductsAsync,
  SelectAllproducts,
} from "../features/products/ProductsSlice";

import Pagination from "./Pagination";
import {Link} from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import AddtoCard from "./AddtoCard";

const ProductCard = () => {
  const products = useSelector(SelectAllproducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllproductsAsync());
  }, []);


  // console.log("from product card", products);

  return (
    <>
    
       <div className="grid grid-cols-1 justify-items-center md:justify-items-stretch  md:grid-cols-2 lg:grid-cols-3 md:mt-20 lg:mt-20">

       {products.map((product) => (

        <div key={product._id} class="max-w-60  mr-5 mb-5 h-auto md:h-auto overflow-clip bg-gray-50 border border-gray-200 rounded-lg shadow dark:border-gray-200">
           <div className="flex justify-end">
            <button >
             <CiHeart className="text-2xl"/>
           </button>
           </div>

          <Link to={`/productDetails/${product._id}`}>
            <img
              className={`rounded-t-lg h-52 w-full object-fill object-cover`}
              src={product.imagePath}
              alt=""
            />
          </Link>
         

          <div class="p-3">

           
            <Link to={`/productDetails/${product._id}`}>
              <h5 class="mb-1 mt-0 text-sm font-bold tracking-tight text-gray-900">
                 {product.name}
              </h5>
             </Link>
            

            <p class="mb-1 text-sm text-gray-700 dark:text-gray-400">
               {product.description.substring(0, 40)}
            </p>
 
            {/* this for rating demo */}

             <div className="flex mb-1"> 

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 fill-yellow-500">
              <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4  fill-yellow-500">
             <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
              </svg>


             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4  fill-yellow-500">
             <path fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clip-rule="evenodd" />
             </svg>

             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4  fill-yellow-500">
             <path fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clip-rule="evenodd" />
             </svg>

             </div>
           {/* this for rating demo */}

            <h2 className="font-bold mb-2">₹{product.price}</h2>


        
          <div className="flex justify-start items-center relative">
            {/* <button className="border-2 border-violet-900 text-violet-900 hover:bg-violet-900 hover:text-white rounded absolute left-3 py-1 font-bold h-8 w-48">ADD TO CARD</button> */}
            <AddtoCard productId={product._id}/>
          </div>
           

          </div>


        </div>

      ))}
       
    </div>
      {/* <hr className=" h-0.5 bg-gray-300 mb-3"/> */}
                <Pagination/>
   
    </>
  )

};

export default ProductCard;





