import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './router/ProtectedRoute';
import Dashboard from './pages/admin/Dashboard';
import ProductsList from './pages/Products/ProductsList';
import ProductDitails from './pages/Products/ProductDitails';




function App() {
  

  return (
    <>
    <Layout>
      
      <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
       
           <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>

            // <Dashboard/>
           }/>

           <Route path='/productList' element={<ProductsList/>}/>
             
           <Route path='/productDetails/:id' element={<ProductDitails/>}/>  
       
      </Routes>
    </Layout>
   
    </>
  )
}

export default App
