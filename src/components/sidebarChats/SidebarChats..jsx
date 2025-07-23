import './SidebarChats.css'
import { BiEdit } from "react-icons/bi";
import { IoFilterSharp } from "react-icons/io5";
import { VscSearch } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import pic from '../../assets/imgs/pic.png'
import { useState } from 'react';
import { Link } from 'react-router-dom'





export default function SidebarChats() {
  const data = [
    { id: 1, name: "Sanjay Kumar", lastMessage: "Tb l size .....", lastSeen: "Yesterday" }, 
    { id: 2, name: "Nikhil Verma", lastMessage: "Tb l size .....", lastSeen: "Yesterday" },
    { id: 3, name: "Sakshi Verma", lastMessage: "Tb l size .....", lastSeen: "Yesterday" },
    { id: 4, name: "Komal Singh", lastMessage: "Tb l size .....", lastSeen: "Yesterday" },
  ]
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
        {
          data.filter(chat => chat.name.toLowerCase().includes(searchValue.toLowerCase())).map(chat => (
            <Link to={`/chats/${chat.id}`} className='sidebar-chat-link' key={chat.id}>
            <div className='sidebar-chat' key={chat.id}>
              <img src={pic} alt="profile"></img>
              <div className="sidebar-chat-content">
                <div className="sidebar-chat-content-top">
                  <p>{chat.name}</p>
                  <p>{chat.lastSeen}</p>
                </div>
                <div className="sidebar-chat-content-bottom">
                  <p>{chat.lastMessage}</p>
                </div>
              </div>
            </div>
            
            </Link>
          ))
        }
      </div>
    </div>
  )
}
