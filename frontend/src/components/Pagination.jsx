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
    <div className='flex justify-center items-center'>
       <button
         className='mr-2 flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
         onClick={() => handlepageChange(currentpage - 1)}
         disabled={currentpage === 1}
       >
         Previous
       </button>
      {
        [...Array(totalpages)].map((_, index) => (
              <button
                 className={` mr-1 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white active:bg-gray-100 active:text-white`}
                 key={index + 1}
                 onClick={()=> handlepageChange(index + 1)}
                  // className={currentpage === index + 1 ? 'active' : '' }
              >

                {index + 1}
              </button>

        ))
      }
       <button
         className='ml-2 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
         onClick={() => handlepageChange(currentpage + 1)}
         disabled={currentpage === totalpages}
       >
        next
       </button>


    </div>
  )
}

export default Pagination