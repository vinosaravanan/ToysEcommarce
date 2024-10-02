import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { SearchProductAsync } from '../features/products/ProductsSlice'


const Search = () => {
   const [searchTems, setSearchTems] = useState('')
   const dispatch = useDispatch()
   const { searchProducts, status } = useSelector((state) => state.product)

  const handleSearch = (e) => {
      setSearchTems(e.target.value);
      if(searchTems.trim()){
        dispatch(SearchProductAsync(searchTems))
      }
  }

  console.log(searchProducts);

  return (
        <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleSearch}
            />
          </div>
  )
}

export default Search