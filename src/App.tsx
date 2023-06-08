// import { useState, useEffect, useContext } from 'react'

import { Navbar, HomePage, Profile, SignIn } from './components/index'

import axios from 'axios';
import { AuthProvider, authContext } from './components/context/useContext';

import { useNavigate } from "react-router-dom";


import './App.css'
import {
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";


// export const ProtectedRoute = ( { children } ) => {
//   const auth = authContext();

//   // if (!auth.checkAuthentication())
// }


const App = () => {

  return (
    <div className=' h-[1020px]'>
      <div className=' w-full flex absolute top-1/2 -translate-y-1/2 max-sm:top-0 max-sm:-translate-y-0'>
        <SignIn />
        {/* <Navbar />
        <Routes>
          <Route path='/' element={(<HomePage />)}/>
          <Route path='/Home' element={(<HomePage />)}/>
          <Route path='/Profile' element={(<Profile />)}/>
          <Route path='/Home' element={(<HomePage />)}/>
          <Route path='/Home' element={(<HomePage />)}/>
          <Route path='/Home' element={(<HomePage />)}/>
        </Routes> */}
      </div>
    </div>
  )
}

export default App
