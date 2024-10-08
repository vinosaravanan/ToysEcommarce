import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectproductDetails,
  fetchAllproductsByidAsync,
  clearProductDetails,
} from "../../features/products/ProductsSlice";
import {AddToCard} from '../../features/card/CardSlice'

const ProductDitails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector(SelectproductDetails);
  
   const [quantity , setQuantity] = useState(1)
   const min = 1
   const max = 5

   const handleDecrement = () => {
      if (quantity > min) {
          setQuantity((quantity) => quantity -1)
      }
   }

   const handleIncrement = () => {
        
         if(quantity < max){
          setQuantity((quantity) => quantity + 1)
         }
   }

   const handleAddtoCard = async () => {
 
     dispatch(AddToCard({id, quantity: 1}))

 }


  useEffect(() => {
    console.log("FROM USEEFFECT", id);
    dispatch(fetchAllproductsByidAsync(id));

    return () => {
      dispatch(clearProductDetails());
    };
  }, [dispatch, id]);

  console.log(quantity);

  return (
    <>
      {[...Array(productDetails)].map((product) => (
        <div
          key={product._id}
          className="grid mt-24 mb-8 grid-cols-1 md:grid-cols-2 md:h-96 lg:grid-cols-2 lg:h-96"
        >
          <div className="flex justify-center">
            <img src={product.imagePath} alt="" />
          </div>

          <div className="grid md:ml-7 lg:ml-0">
            <h2 className="uppercase justify-self-center md:justify-self-start font-bold text-3xl">{product.name}</h2>

            <div className="mt-9">
              <p>{product.description}</p>
            </div>

            <h2 className="mt-6 uppercase text-2xl font-bold">
              ${product.price}
            </h2>

            <div className="flex items-center  mt-6">
              <button
                className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l hover:bg-gray-400 focus:outline-none"
                onClick={handleDecrement}
              >
                -
              </button>
              <input
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
                min={min}
                max={max}
                value={quantity}
              />
              <button
                className="bg-gray-300 text-gray-700 px-2 py-1 mr-8 rounded-r hover:bg-gray-400 focus:outline-none"
                onClick={handleIncrement}
              >
                +
              </button>
                 
               {/* //// add Card Button  */}
              
               <button onClick={handleAddtoCard} className="bg-violet-700  rounded text-slate-50 font-bold h-8 w-40 lg:w-60">ADD TO CARD</button>    

            </div>
              {/* for boy now button */}
              <div className="flex justify-center lg:justify-start">
                <button className="mt-7 h-7 w-60 rounded bg-amber-500 text-white font-bold text-sm lg:w-96">BUY NOW</button>         
              </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductDitails;
