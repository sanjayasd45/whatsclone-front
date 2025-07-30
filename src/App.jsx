
import './App.css'
import ChatArea from './pages/chats/ChatArea'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router,  Routes, Route,useNavigate } from "react-router-dom";
import {  useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  // const value = localStorage.getItem("userData");
  const currentUser = useSelector((state)  => state.currenUser)
  const navigate = useNavigate();
  useEffect(() => {
    if(!currentUser?.userData?.phone_number){
      // toast.success('Welcome back!', { theme: 'colored' });
      navigate('/login');
    }
  },[])



  return (
    <>
    {/* <Router> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chats/:id?" element={<ChatArea />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Login />} />
      </Routes>
    {/* </Router> */}
    {/* <Login/> */}
    {/* <ChatArea/> */}
    {/* <Signup/> */}
     <ToastContainer /> {/* <--- Required */}
    </>
  )
}

export default App