import { useState } from "react";
import "./Model.css";
import { toast } from "react-toastify";
import { getUser } from "../APIs/user.apis";
import { addChat } from "../APIs/chats.apis";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNewUser } from "../store/slices/NewUser.slice";
import { useFindUserById } from "../helper/helper.calculate";
export const NewContact = ({ setNewContact }) => {
  // hook
  const findUserById = useFindUserById();

  const dispatch = useDispatch();
  const newUser = useSelector((state) => state.newContact);
  const userList = useSelector((state) => state.recentChats.data);
  console.log(newUser);

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const currentUser = JSON.parse(localStorage.getItem("userData"));
  const [number, setNumber] = useState("");
  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  const handleFind = async () => {
    // console.log("Finding user with number:", number);
    let regex = /^[0-9]{10}$/;
    if (!regex.test(number)) {
      toast.info("Please enter a valid 10-digit number.", { theme: "colored" });
      return;
    }
    try {
      console.log("Finding user with number:", number);
      const user1 = await getUser({ phone_number: number });
      console.log("user found:", user1.user);
      setUser(user1?.user);
      const newUser = {
        name: user1?.user?.name,
        phone_number: user1?.user?.phone_number,
        profile_pic: user1?.user?.profile_pic,
        user_id: user1?.user?._id,
      };
      console.log(newUser);
      console.log(user);

      if (user1?.user && user1?.user?._id === currentUser?._id) {
        const newUser1 = { ...newUser, name: "It's You" };
        dispatch(setNewUser(newUser1));
      } else if (user1?.user) {
        dispatch(setNewUser(newUser));
      }
      if (user?.user) {
        toast.success("User found, please check to start chat.", {
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Error finding user:", error);
      toast.error("User not found, please try again.", { theme: "colored" });
    }
  };
  const handleStartChat = async () => {
    if (!user || !user._id) {
      toast.error("Please find a user before starting a chat.", {
        theme: "colored",
      });
      return;
    }
    try {
      const response = await addChat({
        members: {
          number,
          currentUser: currentUser?.phone_number,
          name : newUser?.newUser?.name,
          profile_pic : newUser?.newUser?.profile_pic,
        },
      });
      console.log("Chat started:", response);
      const targetUser = {
        ...newUser?.newUser,
        chat_id: response?.chat_id,
        last_msg: "",
        last_seen: "",
      };
      const selectedUser = await findUserById(userList, targetUser);
      console.log(selectedUser);
      

      navigate(`/chats/${response.chat_id}`);
      setNewContact(false);
    } catch (error) {
      console.error("Error Adding Chat:", error);
      toast.error("Error Adding Chat, please try again.", { theme: "colored" });
    }
  };
  return (
    <div className="new-contact">
      <div className="overlay" onClick={() => setNewContact(false)}></div>
      <div className="new-contact-box">
        <h2>New Contact</h2>
        <p>image</p>
        <div>
          <input
            type="text"
            placeholder="Enter Number"
            onChange={handleChange}
            value={number}
          />
          <button onClick={handleFind}>Find</button>
        </div>
        <div>
          <p>Name</p>
          <p>{user?.name}</p>
        </div>
        <div>
          <button onClick={handleStartChat}>Start Chat</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};
