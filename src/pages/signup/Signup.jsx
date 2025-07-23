import './Signup.css'
import logo from '../../assets/imgs/logo.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signup,  } from '../../APIs/auth.apis';

export default function Signup() {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name : '',
        username: '',
        email: '',
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
          name:'',
          username: '',
          email: '',
          password: '',
        })
        console.log("+++++",formData);
        const response  = await signup(formData)
        console.log("Response from signup:", response);
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
                  <h1>Register To Chat</h1>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder='Enter Name'
                      required="true"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
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
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required="true"
                      placeholder='Enter Email'
                      value={formData.email}
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
                    <p>Already have an account <Link to={"/login"}>Login</Link> </p>
                  </div>
                  <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    </div>
  )
}
