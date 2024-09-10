import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const AddtoCard = ({productId}) => {
   const dispatch = useDispatch();

   const handleAddtoCard = () => {
      console.log('button is working');
      
   }

  return (
    <button onClick={handleAddtoCard} className="border-2 border-violet-900 text-violet-900 hover:bg-violet-900 hover:text-white rounded absolute left-3 py-1 font-bold h-8 w-48">ADD TO CARD</button>
  )
}

export default AddtoCard