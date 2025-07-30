import "./LiveChat.css";
import pic from "../../assets/imgs/pic.png";
import { IoVideocamOutline, IoCallOutline } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";
import { PiSmiley, PiPaperclipBold } from "react-icons/pi";
import { LuMic, LuSendHorizonal } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useSocket } from "../../context/SocketContext.jsx";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatById } from "../../store/slices/CurrectChat.slice.js";

export default function LiveChat() {
  const { id } = useParams();
  const dispatch = useDispatch()

  // const userData = JSON.parse(localStorage.getItem("userData"));
  const currentUser = useSelector((state) => state.currentUser)
  // const newUser = useSelector((state)=> state.newContact)
  const currentChatUser = useSelector((state) => state.recentChats.selectedUser)
  const currentChat = useSelector((state) => state.currentChat.data)
  console.log(currentChatUser);
  useEffect(() => {
    if(id){
      dispatch(fetchChatById(id))
    }
  }, [id, dispatch])
  console.log(currentChat);
  const [receiver, setReceiver] = useState(null);
  const socketRef = useSocket();
  console.log("Socket:", socketRef);

  const [messages, setMessages] = useState([]);

  console.log("current Chat user ", currentChatUser);
  
  const [msgValue, setMsgValue] = useState("");
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (msgValue.trim() === "") return;

    const payload = {
      type: "message",
      content: msgValue,
      sender : currentUser?.userData?.phone_number, 
      receiver: currentChatUser?.other_user_number,
      chatId: id,
      timestamp: new Date().toISOString(),
    };
    console.log(payload);
    
if (socketRef?.current?.readyState === WebSocket.OPEN) {
  console.log("sending");
  
      socketRef.current.send(JSON.stringify({
        type: "message",
        content: payload,
      }));
      console.log("Message sent:", msgValue);
    } else {
      console.warn("WebSocket not connected");
    }
    setMsgValue("");
  };
  return (
    <div className="live-chat">
      <div className="live-chat-top">
        <div className="live-chat-top-left">
          <img src={currentChatUser?.profile_pic}></img>
          <div>
            <p>{currentChatUser?.name}</p>
            <p>{currentChatUser?.lastSeen}</p>
          </div>
        </div>
        <div className="live-chat-top-right">
          <div>
            <p>
              <IoVideocamOutline />
            </p>
            <div className="live-chat-v-line"></div>
            <p>
              <IoCallOutline />{" "}
            </p>
          </div>
          <p>
            <LiaSearchSolid />
          </p>
        </div>
      </div>
      <div className="live-chat-content"></div>
      <div className="live-chat-sender">
        <p>
          <PiSmiley />
        </p>
        <p>
          <PiPaperclipBold />
        </p>
        <form onSubmit={handleMessageSubmit}>
          <input
            value={msgValue}
            onChange={(e) => setMsgValue(e.target.value)}
            placeholder="Type a message"
          ></input>
        </form>
        {msgValue ? (
          <p onClick={handleMessageSubmit}>
            <LuSendHorizonal />
          </p>
        ) : (
          <p>
            <LuMic />
          </p>
        )}
      </div>
    </div>
  );
}
