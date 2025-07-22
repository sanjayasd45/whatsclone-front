import './ChatHome.css'
import logo  from '../../assets/imgs/logo.png'

export default function ChatHome() {
  return (
    <div className='chat-home'>
        <div>
            <img src={logo}></img>
            <h1>Mern Chap WebApplication</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illum tenetur optio qui veniam provident?</p>
        </div>
        <p>End to End encripted</p>
    </div>
  )
}
