import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchProductAsync } from '../features/products/ProductsSlice'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import '../App.css'

const Search = React.memo(() => {
  const [searchTerms, setSearchTerms] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const { searchProducts } = useSelector((state) => state.product);
   
  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setDropdownVisible(false)
        setSearchTerms('')
        document.body.classList.remove('search-active')
      }
    }
    
    document.addEventListener('mousedown', handleClickOutSide)

    return () => {
      document.removeEventListener('mousedown', handleClickOutSide)
    }
  }, [searchRef])

  useEffect(() => {
    if (searchTerms) {
      setDropdownVisible(true)
      document.body.classList.add('search-active')
    } else {
      setDropdownVisible(false)
      document.body.classList.remove('search-active')
    }
  }, [searchTerms])

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

  const clearSearch = () => {
    setSearchTerms('');
    setDropdownVisible(false)
    document.body.classList.remove('search-active')
  }

  return (
    <div className="static w-full md:w-[300px] lg:w-[600px]" ref={searchRef}>
      <div className="relative z-50">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerms}
          onChange={(e) => setSearchTerms(e.target.value)}
        />
        <CiSearch className="absolute w-5 left-3 top-1/2 transform -translate-y-1/2 text-violet-500" />

        {searchTerms && (
          <IoCloseOutline
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          />
        )}
      </div>
      
      {isDropdownVisible && searchProducts.length > 0 && searchTerms && (
        <div className="absolute z-50 mt-2 w-screen left-0 bg-white border border-gray-300 rounded-md shadow-lg max-h-96 overflow-y-auto md:h-auto">
          <h2 className="text-xl font-semibold p-4 text-center">Results for "{searchTerms}"</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 p-4 grid-rows-1">
            {searchProducts.map((product) => (
              <div key={product._id} className="border rounded-lg overflow-hidden">
                <Link to={`/productDetails/${product._id}`}
                      onClick={() => {setDropdownVisible(false); setSearchTerms(''); document.body.classList.remove('search-active')}}
                >
                  <img src={product.imagePath} alt={product.name} className="w-full h-32 object-cover object-fill" />
                  <div className="p-2">
                    <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                    <p className="text-xs text-gray-600">{product.description.substring(0, 40)}</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-indigo-600 font-semibold text-sm">₹{product.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
})

export default Search











