// import { useState, useEffect, useContext } from 'react'

// import { VscAccount as AccountIcon, VscBell as NotifIcon, VscHome as HomeIcons, VscEllipsis as ListIcon, VscKebabVertical as DotsIcon,   } from "react-icons/vsc";

// import { MdSource as MessageIcon, MdVideoLibrary as VideoIcon, MdMarkunread as MdMessageIcon, MdKeyboardDoubleArrowRight as rightArrowIcon, MdSportsEsports as GameIcon, MdOutlineToc as AdditionalSettingIcon } from "react-icons/md";

// import Navbar from './components/Navbar/Navbar'
// import HomePage from './components/HomePage/HomePage'

import { Navbar, HomePage, Profile } from './components/index'


import './App.css'
import {
  RouterProvider,
  Route,
  Routes,
  NavLink,
  BrowserRouter
} from "react-router-dom";

const App = () => {
  return (
    <div className=' h-[100vh] relative'>
      <div className=' w-full flex absolute top-1/2 -translate-y-1/2'>
        <Navbar />
        <Routes>
          <Route path='/' element={(<HomePage />)}/>
          <Route path='/Home' element={(<HomePage />)}/>
          <Route path='/Profile' element={(<Profile />)}/>
          <Route path='/Home' element={(<HomePage />)}/>
          <Route path='/Home' element={(<HomePage />)}/>
          <Route path='/Home' element={(<HomePage />)}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
