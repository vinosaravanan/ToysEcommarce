import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {FetchPaginationProducts, setpage} from '../features/products/ProductsSlice'

const Pagination = () => {
   const dispatch = useDispatch();
   const totalpages = useSelector((state) => state.product.totalpages);
   const currentpage = useSelector((state) => state.product.currentpages)

    const handlepageChange = (page) => {
         dispatch(setpage(page))
         dispatch(FetchPaginationProducts({page, limit:6}))
    }

  return (
    <div className='flex justify-center items-center mt-8'>
       <button
         className='mr-2 px-2 h-8 md:mr-3 text-2xl flex items-center justify-center md:px-3 md:h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-violet-500 dark:hover:text-white'
         onClick={() => handlepageChange(currentpage - 1)}
         disabled={currentpage === 1}
       >
          &lt;
       </button>
      {
        [...Array(totalpages)].map((_, index) => (
          
              <button
              className={`md:mr-1 px-2 h-8 flex items-center justify-center md:px-4 md:h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-violet-500 dark:hover:text-white ${
                currentpage === index + 1 ? 'bg-violet-500 text-white' : ''
              }`}
              key={index + 1}
              onClick={() => handlepageChange(index + 1)}
            >
              {index + 1}
            </button>

        ))
      }
       <button
         className='ml-1 px-2 h-8 md:ml-2 text-2xl flex items-center justify-center md:px-3 md:h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-violet-500 dark:hover:text-white'
         onClick={() => handlepageChange(currentpage + 1)}
         disabled={currentpage === totalpages}
       >
         &gt;
       </button>


    </div>
  )
}

export default Pagination