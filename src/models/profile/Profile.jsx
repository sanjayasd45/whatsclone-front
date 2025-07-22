import './Profile.css'
import { IoKeyOutline } from "react-icons/io5";
import { PiChatsFill } from "react-icons/pi";
import { BsCameraVideo } from "react-icons/bs";
import { FaRegKeyboard,FaRegUser  } from "react-icons/fa";




export default function Profile() {
  return (
    <div className='profile'>
        <div className='profile-left'>
            <ul>
                <li><IoKeyOutline/>Account</li>
                <li><PiChatsFill/>Chats</li>
                <li><BsCameraVideo/>Video & Voice</li>
                <li><FaRegKeyboard/>Shortcuts</li>
            </ul>
            <p><FaRegUser />Profile</p>
        </div>
        <div className='profile-right'>

        </div>
    </div>
  )
}
