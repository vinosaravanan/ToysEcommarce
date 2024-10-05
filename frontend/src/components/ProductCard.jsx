import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllproductsAsync,
  SelectAllproducts,
  SelectproductsLoading,
} from "../features/products/ProductsSlice";

import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import AddtoCard from "./AddtoCard";
import loading from "../assets/img/Logo/loading.gif";

const ProductCard = () => {
  const products = useSelector(SelectAllproducts);
  const loading = useSelector(SelectproductsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllproductsAsync());
  }, []);

  // console.log("from product card", products);

  return (
    <>
      {loading === "loading" ? (
        <div className="flex items-center justify-center h-72">
          <div role="status">
            <svg
              aria-hidden="true"
              class="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-violet-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          {console.log(loading)}
          <div className="grid grid-cols-1 justify-items-center md:justify-items-stretch  md:grid-cols-2 lg:grid-cols-3 md:mt-20 lg:mt-20">
            {products.map((product) => (
              <div
                key={product._id}
                class="max-w-60  mr-5 mb-5 h-auto md:h-auto overflow-clip bg-gray-50 border border-gray-200 rounded-lg shadow dark:border-gray-200"
              >
                <div className="flex justify-end">
                  <button>
                    <CiHeart className="text-2xl" />
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-4 fill-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-4  fill-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="size-4  fill-yellow-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="size-4  fill-yellow-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  {/* this for rating demo */}

                  <h2 className="font-bold mb-2">₹{product.price}</h2>

                  <div className="flex justify-start items-center relative">
                    {/* <button className="border-2 border-violet-900 text-violet-900 hover:bg-violet-900 hover:text-white rounded absolute left-3 py-1 font-bold h-8 w-48">ADD TO CARD</button> */}
                    <AddtoCard productId={product._id} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <hr className=" h-0.5 bg-gray-300 mb-3"/> */}
          <Pagination />
        </div>
      )}
    </>
  );
};

export default ProductCard;
