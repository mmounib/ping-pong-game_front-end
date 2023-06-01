// import React from 'react'
// import img from '../../assets/4312098.jpg'


import { Live, Results, TopPlayers } from './Container'


const HomePage = () => {
  
  return (
    <div className=" home flex flex-col bg-secondary-gradient drop-shadow-sm rounded-[10px] w-[80%] mx-auto max-w-[1400px] h-[75vh] max-sm:w-[calc(100vw_-_1rem)] max-md:w-[95%] max-md:h-[85vh]">
      
      <div className=" rounded-t-[10px] h-[200px] contrast-75 saturate-75 bg-cover bg-no-repeat bg-center w-full bg-image-bg object-cover">

        <div className=" h-full max-w-[1200px] mx-auto font-bold flex text-white justify-between px-[8rem] items-center ">
          <h1 className='text-white max-sm:hidden'>PING <br/> PONG</h1>
          <button type='button' className='animate-bounce hover:animate-none bg-[#BD6161] max-sm:mx-auto max-sm:mt-auto max-sm:mb-[5px] max-sm:px-[50px] max-sm:text-sm'>PLAY NOW!</button>
        </div>

      </div>

      <div className="  text-white flex text-center w-[85%] mx-auto mt-[4rem] max-md:w-[85%] max-md:flex-col max-md:mt-3">
        <Live />
        <Results />
      </div>
      <TopPlayers />
    </div>
  )
}

export default HomePage
