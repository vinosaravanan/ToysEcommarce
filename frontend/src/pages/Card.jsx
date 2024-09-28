import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import {RemoveItemsFromCard} from '../features/card/CardSlice'

const Card = () => {
  const dispatch = useDispatch();
  const cardItems = useSelector((state) => state.Card.CardItems);
  console.log(cardItems);

  const handleRemoveItem = (productId) => { 
     console.log(productId);
     
       dispatch(RemoveItemsFromCard(productId))
  }


  return (
    <>
      <div className="col-span-1 p-4 rounded md:col-span-2  lg:col-span-3 mt-20 md:mt-20">
        <div className="grid grid-cols-1 justify-items-center md:justify-items-stretch  md:grid-cols-2 lg:grid-cols-5 ">
          {cardItems.map((card, i) => (
            // card?.product?.imagePath

            <div key={card?.product?._id} className="max-w-60  mr-5 mb-5 h-[26rem]  overflow-clip bg-gray-50 border border-gray-200 rounded-lg shadow dark:border-gray-200">
              <Link to={`/productDetails/${card?.product?._id}`}>
                <img
                  className={`rounded-t-lg h-52 w-full object-fill object-cover`}
                  src={card?.product?.imagePath}
                  alt=""
                />
              </Link>

              <div className="p-3">
                <Link to={`/productDetails/${card?.product?._id}`}>
                  <h5 className="mb-1 mt-0 text-sm font-bold tracking-tight text-gray-900">
                    {card?.product?.name}
                  </h5>
                </Link>

                <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">
                  {card?.product?.description.substring(0, 40)}
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
                    className="size-4  fill-yellow-500"
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
                    className="size-4  fill-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                {/* this for rating demo */}

                <h2 className="font-bold mb-2">₹{card?.product?.price}
                <span className="ml-10">
                quantity: {card?.quantity}
                </span>
                </h2>

                <div className="relative ">
                  <button onClick={()=> handleRemoveItem(card?.product?._id)} className="border-2 border-violet-900 text-violet-900 hover:bg-violet-900 hover:text-white rounded absolute left-3 py-1 font-bold h-8 w-48">REMOVE CARD</button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
