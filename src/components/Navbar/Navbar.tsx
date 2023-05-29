import React from 'react'
import { NavLink } from 'react-router-dom'

import { VscAccount as AccountIcon, VscBell as NotifIcon, VscHome as HomeIcons, VscEllipsis as ListIcon, VscKebabVertical as DotsIcon,   } from "react-icons/vsc";

import { MdSource as MessageIcon, MdVideoLibrary as VideoIcon, MdMarkunread as MdMessageIcon, MdKeyboardDoubleArrowRight as rightArrowIcon, MdSportsEsports as GameIcon, MdOutlineToc as AdditionalSettingIcon, MdExitToApp as ExitIcon } from "react-icons/md";

const links: any = [
  {
    name: "Home",
    icon: <HomeIcons size={35}/>,
  },
  {
    name: "Profile",
    icon: <AccountIcon size={35}/>,
  },
  {
    name: "Chat",
    icon: <MessageIcon size={35}/>,
  },
  {
    name: "Live",
    icon: <VideoIcon size={35}/>,
  },
  {
    name: "Play",
    icon: <GameIcon size={35}/>,
  },

]
const Navbar = () => {
  return (
    <>
      <div className=' fixed bg-main-gradient p-3 mb-auto h-[calc(60vh_-_2rem)] shadow-custom-shadow rotate-0 rounded-r-2xl top-1/2 -translate-y-1/2 max-sm:hidden'>

          <span className='text-white mb-2 text-lg'>Navbar</span>
          <span className=' flex bg-white h-[1px] mt-6'></span>

          <div>
            <ul className=' mt-12 flex flex-col items-center'>
              {links.map((link: any) => (
                <li className='mb-14'>
                  <NavLink to={`/${link.name}`} className=' pb-3 hover:bg-custom-bg-icon hover:p-[7px] hover:rounded-[30%] hover:duration-500 text-white flex flex-row items-center'>{link.icon}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className=' flex bg-white h-[1px] mt-12'></span>
            <ExitIcon size={35} className='text-white flex mt-8 mx-auto'/>
          </div>
      </div>
    </>
  )
}

export default Navbar
