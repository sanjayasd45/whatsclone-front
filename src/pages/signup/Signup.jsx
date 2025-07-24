import "./Signup.css";
import logo from "../../assets/imgs/logo.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../APIs/auth.apis";
import { toast } from "react-toastify";
import { validateForm } from "../../helper/checks.helper";

export default function Signup() {
    const value = localStorage.getItem("userData");
    const navigate = useNavigate();
    const parsedValue = value ? JSON.parse(value) : null;
    useEffect(() => {
      if(parsedValue && parsedValue.phone_number){
        toast.success('Your Are Already Loged In ', { theme: 'colored' });
        navigate('/chats');
      }
    },[])
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    if (!validateForm({ formData })) {
      return;
    }
    
    try {
      const response = await signup(formData);
      console.log("Response from signup:", response);
      localStorage.setItem("userData", JSON.stringify(response?.user));
      setFormData({
        name: "",
        number: "",
        email: "",
        password: "",
      });
      navigate("/chats");
    } catch (error) {
      console.log(
        "Error during signup:",
        error.response?.data || error.message
      );
      toast.error(
        error.response?.data?.detail || "Signup failed, please try again.",
        { theme: "colored" }
      );
    }
  };

  return (
    <div className="signup" id="signup">
      <div className="auth-content">
        <div className="auth-logo">
          <img src={logo}></img>
        </div>
        <div className="v-line"></div>
        <div className="auth-box">
          <form onSubmit={handleSubmit}>
            <h1>Register To Chat</h1>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="number">Username</label>
              <input
                type="text"
                id="number"
                name="number"
                placeholder="Enter number"
                
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
                
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="switch-link">
              <p>
                Already have an account <Link to={"/login"}>Login</Link>{" "}
              </p>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
