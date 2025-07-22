import LiveChat from '../../components/liveChat/LiveChat'
import SidebarChats from '../../components/sidebarChats/SidebarChats.'
import './ChatArea.css'
import { IoStarOutline, IoSettingsOutline,IoCallOutline } from "react-icons/io5";
import { BsArchive, BsChatLeftDots  } from "react-icons/bs";
import pic from '../../assets/imgs/pic.png'
import meta from '../../assets/imgs/meta.png'
import { HiOutlineBars3 } from "react-icons/hi2";
import { TbCircleDashedPlus } from "react-icons/tb";
import { useState } from 'react';
import Profile from '../../models/profile/Profile';





export default function ChatArea() {
  const [sidebar, setSidebar] = useState(false)
  return (
    <div id='chat-area'>
      <div className={`chat-area-left ${sidebar ?  "chat-area-left-active" : ""} ` }>
        <div className='chat-area-left-top'>
          <p onClick={() => setSidebar(!sidebar)}><HiOutlineBars3/></p>
          <p><BsChatLeftDots/> <span>Chats</span></p>
          <p><IoCallOutline/> <span>Calls</span></p>
          <p><TbCircleDashedPlus/> <span>Status</span></p>
          {/* <div className='chat-area-h-live'></div>
          <div className='chat-area-meta-circle'>
            <img src={meta}></img>
            <span>AI</span>
          </div> */}
        </div>
        <div className='chat-area-left-bottom'>
          <p><IoStarOutline/></p>
          <p><BsArchive/></p>
          <div className='chat-area-h-live'></div>
          <p><IoSettingsOutline/></p>
          <div>
            <img src={pic}></img>
            <div className='pro'><Profile/></div>
          </div>
        </div>
      </div>
      <div className='chat-area-content'>
        <SidebarChats/>
        <div className='v-line'></div>
        <LiveChat/>
      </div>
    </div>
  )
}
