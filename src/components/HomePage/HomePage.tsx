import React from 'react'
import img from '../../assets/4312098.jpg'
import { Live, Results } from './Container'

import { MdKeyboardDoubleArrowRight as RightArrowIcon, MdKeyboardArrowRight as SingleArrow  } from 'react-icons/md'
import { VscAccount as AccountIcon } from 'react-icons/vsc'

const HomePage = () => {
  
  return (
    <div className=" home flex flex-col bg-secondary-gradient drop-shadow-sm rounded-[10px] w-[80%] mx-auto max-w-[1400px] h-[75vh] max-sm:w-[calc(100vw_-_1rem)] max-md:w-[calc(90vw_-_2rem)]">
      
      <div className=" rounded-t-[10px] h-[200px] contrast-75 saturate-75 bg-cover bg-no-repeat bg-center w-full bg-image-bg object-cover">

        <div className=" h-full max-w-[1200px] mx-auto font-bold flex text-white justify-between px-[8rem] items-center ">
          <h1 className='text-white max-sm:hidden'>PING <br/> PONG</h1>
          <button type='button' className='animate-bounce hover:animate-none bg-[#BD6161] max-sm:mx-auto max-sm:mt-auto max-sm:mb-[5px] max-sm:px-[50px] max-sm:text-sm'>PLAY NOW!</button>
        </div>

      </div>

      <div className="  text-white flex text-center w-[85%] mx-auto mt-[5rem]">
        <div className=' back rounded-[10px] flex-1 bg-custom-bg-icon mr-16 flex flex-col justify-between shadow-md'>
          <h1 className="text-2xl p-2">Live Games</h1>
          <div className=" flex gap-4 flex-col justify-center">
            <div className="flex mx-auto">
              <AccountIcon size={50}/>
              <div className=" mx-12 flex items-center gap-2">
                <span className=''>LIVE</span>
                <span className='w-[11px] h-[12px] rounded-[50%] bg-red-700'></span>
              </div>
              <AccountIcon size={50}/>
            </div>
            <div className="flex mx-auto">
              <AccountIcon size={50}/>
              <div className=" mx-12 flex items-center gap-2">
                <span className=''>LIVE</span>
                <span className='w-[11px] h-[12px] rounded-[50%] bg-red-700'></span>
              </div>
              <AccountIcon size={50}/>
            </div>
            <div className="flex mx-auto">
              <AccountIcon size={50}/>
              <div className=" mx-12 flex items-center gap-2">
                <span className=''>LIVE</span>
                <span className='w-[11px] h-[12px] rounded-[50%] bg-red-700'></span>
              </div>
              <AccountIcon size={50}/>
            </div>
          </div>
          <div className="flex justify-center cursor-pointer hover:animate-bounce">
            <span className='pb-[7px]'>See More</span>
            <SingleArrow size={25}/>
          </div>
        </div>
        <div className=' back rounded-[10px] flex-1 bg-custom-bg-icon shadow-md flex flex-col gap-10'>
          <h1 className="text-2xl p-2">Latest Results</h1>
          <div className="flex gap-4 flex-col justify-center">
            <div className="flex mx-auto">
              <AccountIcon size={50}/>
              <div className=" mx-12 flex items-center gap-2">
               <span className='text-2xl'>1 - 0</span>
              </div>
              <AccountIcon size={50}/>
            </div>
            <div className="flex mx-auto">
              <AccountIcon size={50}/>
              <div className=" mx-12 flex items-center gap-2">
               <span className='text-2xl'>1 - 5</span>
              </div>
              <AccountIcon size={50}/>
            </div>
            <div className="flex mx-auto">
              <AccountIcon size={50}/>
              <div className=" mx-12 flex items-center gap-2">
               <span className='text-2xl'>3 - 2</span>
              </div>
              <AccountIcon size={50}/>
            </div>
          </div>
          <RightArrowIcon size={35} className='absolute left-[100%]'/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
