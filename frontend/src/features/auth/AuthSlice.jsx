import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {CreateUser, LoginUser} from './AuthApi'

const initialState = {
    status:'idie',
    userInfo:null,
    error:null,
    LoggedInUserToken:null
}


export const registerUserAsyn = createAsyncThunk(
    'user/registerUser', 
    async (userdata, {rejectWithValue}) => {
       try {
         const response = await CreateUser(userdata);
         console.log('from register Action',response);
         return response

       } catch (error) {
         return rejectWithValue(error.response.data)
       }
})


export const LoginUserAsyn = createAsyncThunk(
      'user/LoginUser',
      async (userdata, {rejectWithValue}) => {
        try {
           const response = await LoginUser(userdata)
           return response
        } catch (error) {
          return rejectWithValue(error.response.data)
        }

      }
)


const AuthSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

        logOut:(state) => {
          state.status = 'idle'
          state.userInfo = null
          state.error = null
          state.LoggedInUserToken = null
        }

    },
    extraReducers: (builder) => {
        builder.addCase(registerUserAsyn.pending, (state) => {
          state.status = 'loading'
          state.error = null
        })
        
        builder.addCase(registerUserAsyn.fulfilled, (state, action) => {
             state.status = 'succeeded'
             state.userInfo = action.payload
             state.error = null
        })

        builder.addCase(registerUserAsyn.rejected, (state, action) => {
              state.status = 'error',
              state.userInfo = null
              state.error = action.payload
        })

        builder.addCase(LoginUserAsyn.pending, (state) => {
             state.status = 'Loading'
        })

        builder.addCase(LoginUserAsyn.fulfilled, (state, action) => {
              state.status = 'succeeded',
              state.LoggedInUserToken = action.payload
        })

        builder.addCase(LoginUserAsyn.rejected, (state, action) => {
             state.status = 'error'
             state.error = action.payload
        })
    }
})

export const {logOut} = AuthSlice.actions;

// export const selectUserInfo = (state) => state.Auth.userInfo;
export const selectUserLoggedInUser = (state) => state.Auth.LoggedInUserToken;

 export default AuthSlice.reducer;