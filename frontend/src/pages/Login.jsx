import React,{useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useSelector, useDispatch} from 'react-redux'
import {LoginUserAsyn, logOut,selectUserLoggedInUser} from '../features/auth/AuthSlice'
// import Cookies from 'js-cookie'

function Login() {
 

  const {register, handleSubmit, formState:{errors}} = useForm()
  // const user = useSelector(selectUserInfo);
  const toke = useSelector(selectUserLoggedInUser);
  //  console.log(user.user.role);
  //  console.log(toke);
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(logOut())

  },[])

  const onSubmit = (data) => {
      console.log(data);
      dispatch(LoginUserAsyn(data))
  }

  return (
    <div className="container mx-auto p-4 w-96">
    <h1 className="text-2xl font-bold mb-4">Login</h1>
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          {
            ...register('email', {
              required:'email is required',
              pattern:{
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message:'Invalid email address'
              }
            })
          }

          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}

      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"

          {
            ...register('password', {
              required:'password is required',
              minLength:{
                  value: 8,
                  message:'password must be at least 8 characters long'
              }
            })
          }

          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />

         {errors.password && <p className="text-red-700">{errors.password.message}</p>}
      </div>
     
      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Register
      </button>
    </form>
  </div>
  )
}

export default Login