import "./SidebarChats.css";
import { BiEdit } from "react-icons/bi";
import { IoFilterSharp } from "react-icons/io5";
import { VscSearch } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
// import pic from "../../assets/imgs/pic.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, FilterOptions, NewChatOptions } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { useFindUserById } from "../../helper/helper.calculate";
import { recentChatsData } from "../../APIs/chats.apis";
import { fetchRecentChats, startLoading } from "../../store/slices/recentChats.slice";
import { toast } from "react-toastify";

export default function SidebarChats() {

  const dispatch = useDispatch()
  const userData = JSON.parse(localStorage.getItem("userData"));
  const findUserById = useFindUserById();

  const user = useSelector((state) => state.newContact);

  useEffect(() => {
    async function fetchRecentChat() {
      try{
        if (userData?.phone_number) {
          dispatch(startLoading())
          const data =  await recentChatsData({number : userData.phone_number})
          console.log(data);
          
          console.log("working");
        }
      }catch(error){
        toast.error(`${error?.message ? error.message : "Unable to load Chats"}`, {theme:"colored"})
      }
    }
    fetchRecentChat();
  }, [userData]);
  const recentChats = useSelector((state) => state.recentChats).data;
  console.log(recentChats);
  
  console.log("user from store ", user);

  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [chatOptions, setChatOptions] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    // e.preventDefault()
    setSearchValue(e.target.value);
  };

  const handleClick = (chat_id) => {
    findUserById(recentChats, { chat_id: chat_id });
  };
  return (
    <div className="sidebar-content">
      <div className="sidebar-top">
        <h3>Chats</h3>
        <div className="icon-wrapper">
          <p className={`${chatOptions && "active"}`}>
            <BiEdit onClick={() => setChatOptions(true)} />
            {chatOptions && (
              <Dropdown setOverlay={setChatOptions}>
                <NewChatOptions setOverlay={setChatOptions} />
              </Dropdown>
            )}
          </p>
          <p className={`${filterIsOpen && "active"}`}>
            <IoFilterSharp onClick={() => setFilterIsOpen(true)} />
            {filterIsOpen && (
              <Dropdown setOverlay={setFilterIsOpen}>
                <FilterOptions />
              </Dropdown>
            )}
          </p>
        </div>
      </div>
      <div className="sidebar-search">
        <form>
          <p>
            <VscSearch />
          </p>
          <input
            onChange={handleChange}
            placeholder="Search or Start a new chat"
            value={searchValue}
          ></input>
          {searchValue ? (
            <p onClick={() => setSearchValue("")}>
              <RxCross2 />
            </p>
          ) : (
            ""
          )}
        </form>
      </div>
      <div className="sidebar-chats">
        {recentChats
          .filter((chat) =>
            chat.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((chat) => (
            <Link
              to={`/chats/${chat.chat_id}`}
              className="sidebar-chat-link"
              key={chat.chat_id}
              onClick={() => handleClick(chat.chat_id)}
            >
              <div className="sidebar-chat" key={chat.chat_id}>
                <img src={chat.profile_pic} alt="profile"></img>
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
          ))}
      </div>
    </div>
  );
}
