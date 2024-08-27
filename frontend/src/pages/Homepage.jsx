import React from 'react'
import Banner from '../components/Banner'
import BestSeller from './BestSeller'
import ShopByinteRest from './ShopByinteRest'



//// png format images 
const Homepage = () => {
  return (
    <div>
        <Banner/>

       <div className='text-center mt-9'>
          <h1 className='font-bold text-2xl'>BEST <span className='text-violet-600'>SELLER</span></h1>
       </div>

        <BestSeller/>

        <div className='text-center mt-6'>
          <h1 className='font-bold text-2xl'>SHOP BY <span className='text-violet-600'>INTEREST</span></h1>
       </div>

      <ShopByinteRest/>
    </div>
  )
}

export default Homepage