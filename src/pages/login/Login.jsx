import { useState } from 'react';
import './Login.css'
import logo from '../../assets/imgs/logo.png'
import { Link, useNavigate, } from 'react-router-dom';
import { login } from '../../APIs/auth.apis';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
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
    setFormData({
      username: '',
      password: '',
    })
    console.log("+++++",formData);
    const response  = await login(formData)
    console.log(response);
    // localStorage.setItem("userData", JSON.stringify(response))
    navigate('/app/welcome')
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
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder='Enter Username'
                  required="true"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  required="true"
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
