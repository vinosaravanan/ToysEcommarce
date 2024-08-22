import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { SelectproductDetails, fetchAllproductsByidAsync, clearProductDetails } from '../../features/products/ProductsSlice'

const ProductDitails = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const productDetails = useSelector(SelectproductDetails)
  
  
  useEffect(() => {
     console.log('FROM USEEFFECT', id);
     dispatch(fetchAllproductsByidAsync(id))

     return () => {
       dispatch(clearProductDetails())
     }
 
  },[dispatch, id])

   console.log(productDetails);
   
  
   
  return (
    <>
      {productDetails.map((product) => (

         <img src={product.imagePath} alt="" />
        //  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        //       <div >
        //            <img src={product.imagePath} alt="" />
        //       </div>

        //  </div>
      ))}
    </>
  )
}

export default ProductDitails