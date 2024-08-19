import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { fetchAllproducts } from './ProductsApi';


const initialState = {
    products: [],
    brand:[],
    category:[],
    ratingRanges:[],
    priceRanges:[],
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



const ProductsSlice = createSlice({
    name:'product',
    initialState,
    reducers:() => {

    },

     extraReducers: (builder) => {
        builder.addCase(fetchAllproductsAsync.pending, (state, action) => {
              state.status = 'loading'
        })
 
        builder.addCase(fetchAllproductsAsync.fulfilled, (state,action) => {
            state.status = 'succeeded'
            state.products = action.payload
        })

     }
})


export const SelectAllproducts = (state) => state.product.products

export default ProductsSlice.reducer