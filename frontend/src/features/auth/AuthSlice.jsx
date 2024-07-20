import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {CreateUser} from './AuthApi'

const initialState = {
    status:'idie',
    userInfo:null,
    error:null
}


export const registerUser = createAsyncThunk(
    'user/registerUser', 
    async (userdata, {rejectWithValue}) => {
       try {
         const response = await CreateUser(userdata);
         console.log('from register Action',response);
         return response.data

       } catch (error) {
         return rejectWithValue(error.response.data)
       }
})


const AuthSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
          state.status = 'loading'
          state.error = null
        })
        
        builder.addCase(registerUser.fulfilled, (state, action) => {
             state.status = 'succeeded'
             state.userInfo = action.payload
             state.error = null
        })

        builder.addCase(registerUser.rejected, (state, action) => {
              state.status = 'error',
              state.userInfo = null
              state.error = action.payload
        })
    }
})


 export default AuthSlice.reducer