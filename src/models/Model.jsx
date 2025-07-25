import { useState } from 'react';
import './Model.css'
import { toast } from 'react-toastify';
import { getUser } from '../APIs/user.apis';
import { addChat } from '../APIs/chats.apis';
import { useNavigate } from 'react-router-dom';
export const NewContact = ({setNewContact}) => {

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const currentUser = JSON.parse(localStorage.getItem("userData"));
    const [number, setNumber] = useState("");
    const handleChange = (e) => {
        setNumber(e.target.value);
    }
    const handleFind = async () => {
        // console.log("Finding user with number:", number);
        let regex = /^[0-9]{10}$/;
        if (!regex.test(number)) {
            toast.info("Please enter a valid 10-digit number.", { theme: 'colored' });
            return;
        }
        try{
            console.log('Finding user with number:', number);
            const user = await getUser({phone_number: number});
            console.log('user found:', user?.user);
            setUser(user?.user);
            if (user?.user) {
                toast.success('User found, please check to start chat.', { theme: 'colored' });
            }
            
        }catch(error){
            console.error('Error finding user:', error);
            toast.error('User not found, please try again.', { theme: 'colored' });
        }
    }
    const handleStartChat = async() => {
        if (!user || !user._id) {
            toast.error('Please find a user before starting a chat.', { theme: 'colored' });
            return;
        }
        try{
            const response = await addChat({members: {number, currentUser: currentUser.phone_number}});
            console.log('Chat started:', response);
            localStorage.setItem("receiverNumber", JSON.stringify(response.number));
            navigate(`/chats/${response.chat_id}`);
            setNewContact(false);
        }catch(error){
            console.error('Error Adding Chat:', error);
            toast.error('Error Adding Chat, please try again.', { theme: 'colored' });
        }
    }
  return (
    <div className="new-contact">
        <div className='overlay' onClick={() => setNewContact(false)}></div>
        <div className='new-contact-box'>
            <h2>New Contact</h2>
            <p>image</p>
            <div>
                <input type="text" placeholder='Enter Number' onChange={handleChange}  value={number}/>
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
}