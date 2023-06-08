// import { useState, useEffect, useContext } from 'react'

import { Navbar, HomePage, Profile, SignIn } from './components/index'

import axios from 'axios';

import { AuthProvider, authContext } from './components/context/useContext';

import { Navigate, useNavigate } from "react-router-dom";

import React from 'react';

import './App.css'

import {
  Route,
  Routes,
} from "react-router-dom";

// interface ProtectedRoutesProps {
//   path: string;
//   element: any;
// }

export const ProtectedRoute: React.FC<{children: any}> = ( { children } ) => {
  const auth = authContext();


  return (
    auth.isAuthenticated ? (
      children
    ) : (
      <Navigate to="/" replace />
    )
  )
}


const App = () => {
  const authApp = authContext();

  return (
    <div className=' h-[1020px]'>
      <div className=' w-full flex absolute top-1/2 -translate-y-1/2 max-sm:top-0 max-sm:-translate-y-0'>

        {/* <SignIn /> */}
        {authApp.isAuthenticated && <Navbar />}
        
        <Routes>
          <Route path='/' element={(<SignIn />)}/>
          <Route path='/Home' element={(<ProtectedRoute><HomePage /></ProtectedRoute>)}/>
          <Route path='/Profile' element={(<Profile />)}/>
          {/* <ProtectedRoute path='/Home' element={(<HomePage />)}/>
          <ProtectedRoute path='/Home' element={(<HomePage />)}/>
          <ProtectedRoute path='/Home' element={(<HomePage />)}/> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
