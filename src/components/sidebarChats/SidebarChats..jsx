import './SidebarChats.css'
import { BiEdit } from "react-icons/bi";
import { IoFilterSharp } from "react-icons/io5";
import { VscSearch } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import pic from '../../assets/imgs/pic.png'
import { useState } from 'react';





export default function SidebarChats() {
  const [searchValue, setSearchValue] = useState("")
  const handleChange = (e) => {
    // e.preventDefault()
    setSearchValue(e.target.value)
  }
  return (
    <div className='sidebar-content'>
      <div className="sidebar-top">
        <h3>Chats</h3>
        <div>
          <p><BiEdit/></p>
          <p><IoFilterSharp/></p>
        </div>
      </div>
      <div className="sidebar-search">
        <form>
          <p><VscSearch/></p>
          <input onChange={handleChange} placeholder='Search or Start a new chat' value={searchValue}></input>
          {
            searchValue ? <p onClick={() => setSearchValue("")}><RxCross2/></p> : ""
          }
        </form>
      </div>
      <div className="sidebar-chats">
        <div className='sidebar-chat'>
          <img src={pic}></img>
          <div className="sidebar-chat-content">
            <div className="sidebar-chat-content-top">
              <p>Sanjay Kumar</p>
              <p>Yesterday</p>
            </div>
            <div className="sidebar-chat-content-bottom">
              <p>Tb l size .....</p>
              {/* <p>12:10 PM</p> */}
            </div>
          </div>
        </div>
        <div className='sidebar-chat'>
          <img src={pic}></img>
          <div className="sidebar-chat-content">
            <div className="sidebar-chat-content-top">
              <p>Sanjay Kumar</p>
              <p>Yesterday</p>
            </div>
            <div className="sidebar-chat-content-bottom">
              <p>Tb l size .....</p>
              {/* <p>12:10 PM</p> */}
            </div>
          </div>
        </div>
        <div className='sidebar-chat'>
          <img src={pic}></img>
          <div className="sidebar-chat-content">
            <div className="sidebar-chat-content-top">
              <p>Sanjay Kumar</p>
              <p>Yesterday</p>
            </div>
            <div className="sidebar-chat-content-bottom">
              <p>Tb l size .....</p>
              {/* <p>12:10 PM</p> */}
            </div>
          </div>
        </div>
        <div className='sidebar-chat'>
          <img src={pic}></img>
          <div className="sidebar-chat-content">
            <div className="sidebar-chat-content-top">
              <p>Sanjay Kumar</p>
              <p>Yesterday</p>
            </div>
            <div className="sidebar-chat-content-bottom">
              <p>Tb l size .....</p>
              {/* <p>12:10 PM</p> */}
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}
