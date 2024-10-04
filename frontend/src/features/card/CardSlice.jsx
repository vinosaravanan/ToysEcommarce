import {createSlice, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit';
import axios from 'axios';
// import {useSelector} from 'react-redux'
// import {selectUserLoggedInUser} from '../auth/AuthSlice'

const initialState = {
    CardItems:JSON.parse(localStorage.getItem('CardItems')) || [],
    status:'idie',
    error:null
}

//  const user = useSelector(selectUserLoggedInUser)


export const AddToCard = createAsyncThunk(
    'card/AddToCard',
    async ({ productId, quantity }, { rejectWithValue, getState }) => {
        try {
          const user = getState().Auth?.LoggedInUserToken;
    
          // Log token and request body
          console.log('User token:', user?.token);
       
          const response = await axios.post(
            'https://toys-ecommarce-backend.onrender.com/api/v1/card',
            { productId, quantity },
            {
              headers: {
                Authorization: `Bearer ${user?.token}`,
              },
            }
          );
    
          // Log response for debugging
          console.log('Response from AddToCard:', response.data);
    
          return { ...response.data, productId };
        } catch (error) {
          // Log error details to diagnose the issue
          console.error('Error in AddToCard thunk:', error);
          return rejectWithValue(
            error.response?.data || error.message || 'Unknown error occurred'
          );
        }
      }







)


const CardSlice = createSlice({
    name:'card',
    initialState,
    reducers:{
        RemoveItemsFromCard: (state, action) => {
                    
                   
                state.CardItems = state.CardItems.filter(item => {
                    return item.product && item.product._id !== action.payload;    
                });


                localStorage.setItem('CardItems', JSON.stringify(state.CardItems))
        }
    },
    extraReducers:(builder) => {

          builder.addCase(AddToCard.pending, (state) => {
             state.status = 'loading'
              console.log('PENDING');
              
          }) 

          builder.addCase(AddToCard.fulfilled, (state, action) => {
                //   console.log('from bulter', action.payload.items.find(item => item.product._id === action.payload.productId));
                //   console.log('test from builter', action.payload.productId);
                console.error('AddToCard rejected:', action.payload);
                console.log(action.payload);
                
                ////// new code 1
                if (!action.payload?.items?.length) {
                    console.error('Items array is missing or empty in the payload');
                    return;
                  } 

                  //// new code 2
                  const newItem = action.payload.items.find((item) => item?.product?._id === action.payload?.productId);
       
                  //// new code 3
                  if (!newItem) {
                    console.error('No matching item found for productId:', action.payload?.productId);
                    return; 
                  }
                  
                  console.log('new item', newItem?.product?._id);

            ///// new code 4
             const existingItem = state.CardItems.find((item) => item?.product?._id === newItem?.product?._id);
                 
            //    const newItem = action.payload?.items.find((item) => item?.product?._id === action.payload.productId);
            //    console.log('new item ', newItem.product._id);
               
            //    const existingItem = state.CardItems.find((item) => item?.product?._id === newItem.product._id)

               if (existingItem) {
                   existingItem.quantity += newItem.quantity
               } else {
                 state.CardItems.push(newItem)
               }
                 
                state.status = 'succeeded'
                 console.log('from bulterxxxxx',);
                 
                localStorage.setItem('CardItems', JSON.stringify(state.CardItems))

          })

          builder.addCase(AddToCard.rejected, (state, action) => {
                 state.status = 'failed';
                 state.error = action.payload
          })


    }
})

export const selectTotallCardItems = (state) => {
    return state.Card.CardItems.length
}



export const {RemoveItemsFromCard} = CardSlice.actions;

export default CardSlice.reducer;
