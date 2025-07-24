
import './App.css'
import ChatArea from './pages/chats/ChatArea'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";

function App() {
  const value = localStorage.getItem("userData");
  // if (!value) {
  //   return <Login />;
  // }else{
  //   const userData = JSON.parse(value);
  //   if (!userData || !userData._id) {
  //     return <Login />;
  //   }
  // }


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
