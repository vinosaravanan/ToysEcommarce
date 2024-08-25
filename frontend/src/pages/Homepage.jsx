import React from 'react'
import Banner from '../components/Banner'
import BestSeller from './BestSeller'

const Homepage = () => {
  return (
    <div>
        <Banner/>

       <div className='text-center mt-9'>
          <h1 className='font-bold text-2xl'>BEST <span className='text-violet-600'>SELLER</span></h1>
       </div>

        <BestSeller/>

    </div>
  )
}

export default Homepage