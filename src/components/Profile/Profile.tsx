import { VscAccount as AccountIcon } from 'react-icons/vsc'
import { MdEdit } from 'react-icons/md'
import { motion } from 'framer-motion'
import Achievements from './Achievements'
import Friends from './Friends'
import ResultsMatch from './ResultsMatch'


const Profile = () => {
  return (
    <div className=" home flex flex-col bg-secondary-gradient drop-shadow-sm rounded-[10px] w-[80%] mx-auto max-w-[1400px] h-[75vh] max-sm:w-[calc(100vw_-_1rem)] max-md:w-[95%] max-md:h-[85vh]">
      
      <div className="flex text-white mt-14 mx-8 justify-between max-md:flex-col max-md:mt-8">

        <div className="flex flex-col">
          <div className="flex items-center">
            <AccountIcon size={140} className=''/>
            <div className=" ml-8 flex flex-col text-gray-400 text-sm">
              <span>Welcome</span>
              <h1 className='text-4xl m-1 pl-4 text-white'>LoginName</h1>
              <p>Hey, Dude! how are you</p>
            </div>
          </div>
          <div className="block mt-2">
            <motion.button type='button' whileTap={{scale: 0.955}} onClick={() => null} className='flex items-center bg-gray-800 py-2 px-6 mr-auto text-xs outline-none'> <MdEdit size={15} className='mr-1'/> Edit Profile</motion.button>
          </div>
        </div>

        <div className="flex ml-12 justify-around w-full text-center flex-wrap items-center max-w-[900px] mx-auto max-md:ml-2 max-md:mt-4 max-md:pt-4 max-md:border-t-2 max-md:border-t-slate-400 max-md:border-b-2 max-md:border-b-slate-400 max-md:pb-4">

          <div className="flex flex-col items-center">
            <span className='text-3xl'>27</span>
            <h2 className=' opacity-70 text-2xl'>Wins</h2>
          </div>
          <span className='w-[1px] h-[50px] bg-gray-400  max-md:hidden'></span>
          <div className="flex flex-col items-center">
            <span className='text-3xl'>13</span>
            <h2 className=' opacity-70 text-2xl'>Losses</h2>
          </div>
          <span className='w-[1px] h-[50px] bg-gray-400  max-md:hidden'></span>
          <div className="flex flex-col items-center">
            <span className='text-3xl'>62%</span>
            <h2 className=' opacity-70 text-2xl'>Win Rate</h2>
          </div>

        </div>
        

      </div>

      <div className="flex w-[70%]">
        <div className="flex flex-col w-full">
          <ResultsMatch />
          <Achievements />
        </div>
        <div className="flex">
          <Friends />
        </div>
      </div>

    </div>
  )
}

export default Profile




{/* This is The BOX Design Of The Infos */}

{/* <div className="flex justify-around gap-16 ml-12 w-full text-center">
  <div className="flex flex-col gap-6 w-full max-w-xs">
    <div className=" back rounded-[10px] shadow-x  flex-1">
      <span className='text-4xl'>3</span>
      <h1 className='text-xl text-gray-400'>Achievements</h1>
    </div>
    <div className=" back rounded-[10px] shadow-xl flex-1">
      <span className='text-4xl'>17</span>
      <h1 className='text-xl text-gray-400'>Wins</h1>
    </div>
  </div>
  <div className="flex flex-col gap-6 w-full max-w-xs">
    <div className=" back rounded-[10px] shadow-xl flex-1">
      <span className='text-4xl'>8</span>
      <h1 className='text-xl text-gray-400'>Losses</h1>
    </div>
    <div className=" back rounded-[10px] shadow-xl flex-1">
      <span className='text-4xl'>3</span>
      <h1 className='text-xl text-gray-400'>Win Rate</h1>
    </div>
  </div>  
</div> */}