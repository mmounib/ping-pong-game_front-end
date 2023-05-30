import React from 'react'
import img from '../../assets/4312098.jpg'

import {MdKeyboardDoubleArrowRight as rightArrowIcon} from 'react-icons/md'

const HomePage = () => {
  
  return (
    <div className=" flex flex-col bg-back-bg rounded-[10px] w-[80%] mx-auto max-w-[1400px] h-[75vh] max-sm:w-[calc(100vw_-_1rem)] max-md:w-[calc(90vw_-_2rem)]">
      
      <div className=" rounded-t-[10px] h-[200px] contrast-75 saturate-75 bg-cover bg-no-repeat bg-center w-full bg-image-bg object-cover">
        {/* <img src={img} alt="" className=" w-full object-cover h-[200px] rounded-t-[10px]" /> */}
        <div className=" h-full max-w-[1200px] mx-auto font-bold flex text-white justify-between px-[8rem] items-center ">
          <h1 className='text-white max-sm:hidden'>PING <br/> PONG</h1>
          <button type='button' className='bg-[#BD6161] max-sm:mx-auto max-sm:mt-auto max-sm:mb-[5px] max-sm:px-[50px] max-sm:text-sm'>PLAY NOW!</button>
        </div>
      </div>

      {/* <div className="  text-white flex justify-center text-center w-[80%] mx-auto mt-[5rem]">
        <div className='flex-auto bg-custom-blue mr-14'>
          <h1 className="text-2xl">Live Games</h1>
        </div>
        <div className='flex-auto bg-custom-blue'>
          <h1 className="text-2xl">Latest Results</h1>
        </div>
      </div> */}
    </div>
  )
}

export default HomePage
