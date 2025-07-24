import "./LiveChat.css";
import pic from "../../assets/imgs/pic.png";
import { IoVideocamOutline, IoCallOutline } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";
import { PiSmiley, PiPaperclipBold } from "react-icons/pi";
import { LuMic, LuSendHorizonal } from "react-icons/lu";
import { useState } from "react";
import { useSocket } from "../../context/SocketContext.jsx";
import { useParams } from "react-router-dom";

export default function LiveChat() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const receiverNumber = JSON.parse(localStorage.getItem("receiverNumber"));
  const { id } = useParams();
  const [receiver, setReceiver] = useState(null);
  const socketRef = useSocket();
  console.log("Socket:", socketRef);
  
  const [msgValue, setMsgValue] = useState("");
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (msgValue.trim() === "") return;

    const payload = {
      type: "message",
      content: msgValue,
      sender : userData.phone_number, 
      receiver: receiverNumber,
      chatId: id,
      timestamp: new Date().toISOString(),
    };

if (socketRef?.current?.readyState === WebSocket.OPEN) {
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
          <img src={pic}></img>
          <div>
            <p>Sanjay kumar</p>
            <p>12:10 PM</p>
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
