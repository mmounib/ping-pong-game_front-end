import { VscAccount as AccountIcon } from 'react-icons/vsc'
import { MdEdit } from 'react-icons/md'

const Profile = () => {
  return (
    <div className=" home flex flex-col bg-secondary-gradient drop-shadow-sm rounded-[10px] w-[80%] mx-auto max-w-[1400px] h-[75vh] max-sm:w-[calc(100vw_-_1rem)] max-md:w-[95%] max-md:h-[85vh]">
      
      <div className="flex text-white mt-14 ml-8">
        <div className="flex flex-col">
          <div className="flex items-center">
            <AccountIcon size={140} className=''/>
            <div className=" ml-8 flex flex-col text-gray-400 text-sm">
              <span>Welcome</span>
              <h1 className='text-4xl m-1 pl-4 text-white'>LoginName</h1>
              <p>Hey, Dude! how are you</p>
            </div>
          </div>
          <button type='button' className='flex items-center'> <MdEdit /> Edit profile</button>
        </div>
        <div className="flex">

        </div>
      </div>
    </div>
  )
}

export default Profile
