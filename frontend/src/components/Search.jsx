// import React, {useState, useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import { SearchProductAsync } from '../features/products/ProductsSlice'


// const Search = React.memo(() => {
//    const [searchTems, setSearchTems] = useState('')
//    const dispatch = useDispatch()
//    const { searchProducts, status } = useSelector((state) => state.product)
//    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTems)

//    useEffect(() => {
//        const handler = setTimeout(() => {
//             setDebouncedSearchTerm(searchTems)
//        }, 500)
 
//        return () => {
//             clearTimeout(handler)
//         }

//    }, [searchTems])

//    useEffect(() => {
//      if (debouncedSearchTerm.trim()) {
//         dispatch(SearchProductAsync(debouncedSearchTerm))
//      }

//    }, [debouncedSearchTerm, dispatch])

// console.log(searchProducts);

//   return (
//         <div className="w-full md:w-1/3">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               onChange={(e) => setSearchTems(e.target.value)}
//             />
//           </div>
//   )
// })

// export default Search





import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchProductAsync } from '../features/products/ProductsSlice'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Search = React.memo(() => {
  const [searchTerms, setSearchTerms] = useState('')
  const dispatch = useDispatch()
  const { searchProducts } = useSelector((state) => state.product)

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerms.trim()) {
        dispatch(SearchProductAsync(searchTerms))
      }
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [searchTerms, dispatch])

  return (
    <div className="relative w-full">
      <div className="relative w-full  md:w-[700px] md:mr-20 md:left-8">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerms}
          onChange={(e) => setSearchTerms(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      
      {searchProducts.length > 0 && searchTerms && (
        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <h2 className="text-xl font-semibold p-4">Results for "{searchTerms}"</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 grid-rows-1">
            {searchProducts.map((product) => (
              <div key={product._id} className="border rounded-lg overflow-hidden ">
                <img src={product.imagePath} alt={product.name} className="w-full h-32 object-cover" />
                <div className="p-2">
                  <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-600">{product.description.substring(0, 40)}</p>
                  <div className="flex justify-between items-center mt-1">
                    {/* <p className="text-gray-500 line-through text-xs">₹{product.originalPrice}</p> */}
                    <p className="text-indigo-600 font-semibold text-sm">₹{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
         
        </div>
      )}
    </div>
  )
})

export default Search




