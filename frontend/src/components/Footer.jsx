import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-50 h-96 mt-2 flex flex-col items-center md:flex-row'>
           <div className='mb-5 mt-5 md:mr-12 lg:w-64'>
                <h2>eShop</h2>
           </div>

            <div className='grid grid-cols-4 gap-x-8 gap-y-4 md:grid-rows-1 md:grid-flow-col md:gap-x-2 md:col-auto lg:grid-rows-1 lg:grid-flow-col lg:gap-x-2 lg:col-auto lg:w-full'>

              <div className='mt-6 col-span-2 md:col-auto'>
              <h1 className='mb-1 font-bold'>PRODUCT</h1>
                 <p>Features</p>
                 <p>Integrations</p>
                 <p>Pricing</p>
                 <p>FAQ</p>
              </div>

              <div className='mt-6 col-span-2 md:col-auto'> 
              <h1 className='mb-1 font-bold'>COMPANY</h1>
                 <p>Privacy</p>
                 <p>Terms of Service</p>
              </div>

              <div className='mt-6 col-span-2 md:ml-7 md:col-auto'>
              <h1 className='mb-1 font-bold'>DEVELOPERS</h1>
                 <p>public API</p>
                 <p>Documentation</p>
                 <p>Guides</p>
              </div>

            </div>
    </div>
  )
}

export default Footer