
import './App.css'
import ChatArea from './pages/chats/ChatArea'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";

function App() {

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
    </>
  )
}

export default App
