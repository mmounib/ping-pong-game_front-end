import React from 'react'
import img from '../../assets/4312098.jpg'

import { MdKeyboardDoubleArrowRight as rightArrowIcon} from 'react-icons/md'
import { VscAccount as AccountIcon } from 'react-icons/vsc'

const HomePage = () => {
  
  return (
    <div className=" home flex flex-col bg-secondary-gradient drop-shadow-sm rounded-[10px] w-[80%] mx-auto max-w-[1400px] h-[75vh] max-sm:w-[calc(100vw_-_1rem)] max-md:w-[calc(90vw_-_2rem)]">
      
      <div className=" rounded-t-[10px] h-[200px] contrast-75 saturate-75 bg-cover bg-no-repeat bg-center w-full bg-image-bg object-cover">
        {/* <img src={img} alt="" className=" w-full object-cover h-[200px] rounded-t-[10px]" /> */}
        <div className=" h-full max-w-[1200px] mx-auto font-bold flex text-white justify-between px-[8rem] items-center ">
          <h1 className='text-white max-sm:hidden'>PING <br/> PONG</h1>
          <button type='button' className='bg-[#BD6161] max-sm:mx-auto max-sm:mt-auto max-sm:mb-[5px] max-sm:px-[50px] max-sm:text-sm'>PLAY NOW!</button>
        </div>
      </div>

      <div className="  text-white flex text-center w-[85%] mx-auto mt-[5rem]">
        <div className='rounded-[10px] flex-1 bg-custom-bg-icon mr-16 pb-[5rem] flex flex-col justify-between shadow-md'>
          <h1 className="text-2xl p-2">Live Games</h1>
          <div className=" mt-6 flex gap-4 flex-col justify-center">
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
          {/* <span className='pt-14'>See More</span> */}
        </div>
        <div className='rounded-[10px] flex-1 bg-custom-bg-icon pb-[5rem] shadow-md'>
          <h1 className="text-2xl p-2">Latest Results</h1>
          <div className="mt-6 flex gap-4 flex-col justify-center">
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
        </div>
      </div>
    </div>
  )
}

export default HomePage
