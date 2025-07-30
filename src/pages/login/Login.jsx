import { useState } from 'react';
import './Login.css'
import logo from '../../assets/imgs/logo.png'
import { Link, useNavigate, } from 'react-router-dom';
import { login } from '../../APIs/auth.apis';
import { toast } from 'react-toastify';
import {useDispatch} from 'react-redux'
import { setCurrentUser } from '../../store/slices/currentUser.slice';

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    number: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    try{
      const response  = await login(formData)
      console.log("+++++",formData);
      const data = {
        name : response?.name,
        user_id : response?._id,
        profile_pic : response?.profile_pic,
        phone_number : response?.phone_number

      }
      console.log(data);
      
      dispatch(setCurrentUser(data))
      // localStorage.setItem("userData", JSON.stringify(response))

      toast.success('Login successful!', { theme: 'colored' });
      navigate('/chats')
      setFormData({
        number: '',
        password: '',
      })
    }catch(error) {
      console.log('Error during login:', error.response?.data || error.message);
      toast.error(error.response?.data?.detail || 'Login failed, please try again.', { theme: 'colored' });
    }
  };

return (
<div className='signup' id='signup'>
    <div className='auth-content'>
        <div className="auth-logo">
            <img src={logo}></img>
        </div>
        <div className='v-line'>

        </div>
        <div className="auth-box">
            <form onSubmit={handleSubmit}>
              <h1>Log In To Chat</h1>
              <div >
                <label htmlFor="username">number</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  placeholder='Enter number'
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder='Enter Password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className='switch-link'>
                <p>{`Don't have an account `}<Link to={"/signup"}>Sign Up</Link> </p>
              </div>
              <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
</div>
)
}
