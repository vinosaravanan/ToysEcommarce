import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { fetchAllproducts, 
         fetchAllproductsByid,
         FetchCategory, 
         FetchBrand, 
         FetchRating, 
         FetchPrice, 
         paginationFetch,
         SearchProducts} from './ProductsApi';


const initialState = {
    products: [],
    searchProducts:[],
    productDetails:[],
    brand:[],
    category:[],
    ratingRanges:[],
    priceRanges:[],
    totalpages:0,
    currentpages:1,
    status:'idle'
}

export const fetchAllproductsAsync = createAsyncThunk(
    'product/fetchAllproducts',
    async (rejectWithValue) => {
        try {
          const response = await fetchAllproducts();
           console.log(response);
           
          return response.product    

        } catch (error) {
            return rejectWithValue(error.response.data)
        } 
         
    }
)

export const fetchAllproductsByidAsync = createAsyncThunk(
    'product/fetchAllproductsByid',
    async (id,{rejectWithValue}) => {
        try {
          const response = await fetchAllproductsByid(id);
        //    console.log(response);
           
          return response.product    

        } catch (error) {
            return rejectWithValue(error.response.data)
        } 
         
    }
)

/// search Products
export const SearchProductAsync = createAsyncThunk(
    'product/SearchProduct',
    async(searchTerm, {rejectWithValue}) => {
      try {

        const response = await SearchProducts(searchTerm)
        return response.products

      } catch (error) {
        rejectWithValue(error)
      }
    }

)


export const CategoryFilterAsync = createAsyncThunk(
     'product/CategoryFilter',
     async (filterValue ,{rejectWithValue}) => {
        try {
         const response = await FetchCategory(filterValue)
           console.log(response, 'from CategoryFilterAsync');
           
          return response.products
        } catch (error) {
          return rejectWithValue(error)
        }
     }
)

export const brandFilterAsync = createAsyncThunk(
     'product/brandFilter',
     async (filterValue ,{rejectWithValue}) => {
        try {
         const response = await FetchBrand(filterValue) 
          return response.products
        } catch (error) {
          return rejectWithValue(error)
        }
     }
)

export const RatingFilterAsync = createAsyncThunk(
     'product/RatingFilter',
     async (filterValue ,{rejectWithValue}) => {
        try {
         const response = await FetchRating(filterValue) 
          return response.products
        } catch (error) {
          return rejectWithValue(error)
        }
     }
)

export const PriceFilterAsync = createAsyncThunk(
     'product/PriceFilter',
     async (PriceValue,{rejectWithValue}) => {
        try {
            console.log(PriceValue, 'PriceFilterAsync');
            
          const response = await FetchPrice(PriceValue) 
          return response.products
        } catch (error) {
          return rejectWithValue(error)
        }
     }
)

export const FetchPaginationProducts = createAsyncThunk(
        'product/pagination',
        async ({page, limit}, {rejectWithValue}) => {
           try {
              const response = await paginationFetch(page, limit) 
               console.log('PAGENATION',response);
               
               return response

           } catch (error) {
               return rejectWithValue(error)
           }
        }
)



const ProductsSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
           setpage(state, action) {
                state.currentpages = action.payload;
           },

           clearProductDetails(state, action) {
              state.productDetails = []
              state.status = 'idle'
           }
    },

     extraReducers: (builder) => {
        builder.addCase(fetchAllproductsAsync.pending, (state, action) => {
              state.status = 'loading'
        })
 
        builder.addCase(fetchAllproductsAsync.fulfilled, (state,action) => {
            state.status = 'succeeded'
            state.products = action.payload
        })

        builder.addCase(fetchAllproductsByidAsync.pending, (state, action) => {
              state.status = 'loading'
        })
 
        builder.addCase(fetchAllproductsByidAsync.fulfilled, (state,action) => {
            state.status = 'succeeded'
            state.productDetails = action.payload
        })
        
        //// search products
         builder.addCase(SearchProductAsync.pending, (state, action) => {
             state.status = 'loading'

         })

         builder.addCase(SearchProductAsync.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.searchProducts = action.payload

         })


        builder.addCase(CategoryFilterAsync.pending, (state, action) => {
            state.status = 'loading'
            
        })

        builder.addCase(CategoryFilterAsync.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.products = action.payload
            state.category = action.payload
        })

        builder.addCase(brandFilterAsync.pending, (state, action) => {
            state.status = 'loading'
            
        })

        builder.addCase(brandFilterAsync.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.products = action.payload
            state.brand = action.payload
        })

        builder.addCase(RatingFilterAsync.pending, (state, action) => {
            state.status = 'loading'
        })

        builder.addCase(RatingFilterAsync.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.products = action.payload
            state.ratingRanges = action.payload
        })

        builder.addCase(PriceFilterAsync.pending, (state, action) => {
            state.status = 'loading'
        })

        builder.addCase(PriceFilterAsync.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.products = action.payload
            state.priceRanges = action.payload
        })

        builder.addCase(FetchPaginationProducts.pending, (state, action) => {
            state.status = 'loading'
        })

        builder.addCase(FetchPaginationProducts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.products = action.payload.products
            state.totalpages = action.payload.totalpages
            state.currentpages = action.payload.currentpage
        })



     }
})

export const {setpage, clearProductDetails} = ProductsSlice.actions 

export const SelectAllproducts = (state) => state.product.products
export const SelectproductDetails = (state) => state.product.productDetails

export default ProductsSlice.reducer