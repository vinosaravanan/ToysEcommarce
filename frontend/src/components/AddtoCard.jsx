import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddToCard} from '../features/card/CardSlice'

const AddtoCard = ({productId}) => {
   const dispatch = useDispatch();
    const card = useSelector((state) => state.Card.CardItems)
    //  console.log('from cardComp...', card);
     
   const handleAddtoCard = async () => {
      console.log('button is working', productId);
       dispatch(AddToCard({productId, quantity: 1}))

   }

  return (
    <button 
    onClick={handleAddtoCard} 
    className="border-2 border-violet-900 text-violet-900 hover:bg-violet-900 hover:text-white rounded py-1 font-bold h-8 
               w-full max-w-xs md:max-w-md lg:max-w-lg
               md:ml-4 lg:ml-6 self-stretch ">
    ADD TO CART
  </button>
  )
}

export default AddtoCard









