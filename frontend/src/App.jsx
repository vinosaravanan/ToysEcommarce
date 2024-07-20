import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Register from './pages/Register';
import Login from './pages/Login';



function App() {
  

  return (
    <>
    <Layout>
      <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>

      </Routes>
    </Layout>
   
    </>
  )
}

export default App
