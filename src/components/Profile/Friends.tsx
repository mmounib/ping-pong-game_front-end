import { BiSearchAlt2 } from 'react-icons/bi';
import { MdEdit } from 'react-icons/md'

const Friends = () => {
  return (
    <div className="flex flex-col top_1 w-[300px] text-gray-400 max-md:w-[95%] ">
    <h1 className="text-2xl p-2">Friends List</h1>
    <div className="flex flex-col">
      <div className="flex">
        
        <div className="flex relative justify-between">
          <input type="search" className=" shadow border-0 " placeholder="Search a friend..." />
          <button type="button" onClick={() => null} className='absolute left-[65%] mt-3 mr-4'> <BiSearchAlt2 size={20}/> </button>
        </div>

        
      </div>
    </div>
  </div>
  )
}

export default Friends
