import './LiveChat.css'
import pic from '../../assets/imgs/pic.png'
import { IoVideocamOutline,IoCallOutline  } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";
import { PiSmiley, PiPaperclipBold } from "react-icons/pi";
import { LuMic , LuSendHorizonal } from "react-icons/lu";
import { useState } from 'react';






export default function LiveChat() {
  const [msgValue, setMsgValue] = useState("")
  return (
    <div className='live-chat'>
      <div className="live-chat-top">
        <div className='live-chat-top-left'>
          <img src={pic}></img>
            <div>
                <p>Sanjay Kumar</p>
                <p>12:10 PM</p>
            </div>
        </div>
        <div className="live-chat-top-right">
          <div>
            <p><IoVideocamOutline/></p>
            <div className='live-chat-v-line'></div>
            <p><IoCallOutline/> </p>
          </div>
          <p><LiaSearchSolid/></p>
        </div>
      </div>
      <div className="live-chat-content">

      </div>
      <div className="live-chat-sender">
        <p><PiSmiley/></p>
        <p><PiPaperclipBold /></p>
        <form action="">
          <input value={msgValue} onChange={(e) => setMsgValue(e.target.value)} placeholder='Type a message'></input>
        </form>
        {
          msgValue ? <p><LuSendHorizonal /></p> :  <p><LuMic/></p>
        }
      </div>
    </div>
  )
}
