import './ChatHome.css'
import logo  from '../../assets/imgs/wh_logo_grey.svg'
import { IoLockClosedOutline } from "react-icons/io5";

export default function ChatHome() {
  return (
    <div className='chat-home'>
        <div>
            <img src={logo}></img>
            <h1>WhatsApp for Windows</h1>
            <p>Send and receive messages without keeping your phone online.</p>
            <p>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</p>
        </div>
        <p><IoLockClosedOutline />End to End encripted</p>
    </div>
  )
}
