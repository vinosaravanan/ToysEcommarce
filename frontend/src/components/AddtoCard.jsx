import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddToCard} from '../features/card/CardSlice'

const AddtoCard = ({productId}) => {
   const dispatch = useDispatch();
    const card = useSelector((state) => state.Card.CardItems)
     console.log('from cardComp...', card);
     
   const handleAddtoCard = async () => {
      console.log('button is working', productId);
       dispatch(AddToCard({productId, quantity: 1}))

   }

  return (
    <button onClick={handleAddtoCard} className="border-2 border-violet-900 text-violet-900 hover:bg-violet-900 hover:text-white rounded absolute left-3 py-1 font-bold h-8 w-48">ADD TO CARD</button>
  )
}

export default AddtoCard









