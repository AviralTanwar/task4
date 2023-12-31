import React, { useState } from 'react'
import "./login.css";
import logo from "../../Assets/logo.png";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        let passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$/;

        console.log(email,password)

        if (!regex.test(email)) {
            alert('Please enter a valid email address.'); 
            e.preventDefault();
            return;
          }
        if (!passRegex.test(password)) {
            alert('Password must contain at least one uppercase letter, one number, and only "@" as a special character.');
            e.preventDefault();
            return;
        }
        if(password === "SmartServTest@123"){
            navigate("/dashboard");
            e.preventDefault();
        }
    }

  return (
    <div className='login'>
        <div id="login_box">
            <img src={logo} alt="" srcset="" />
            <div id="input_holder">
                <input type="email" id="email" placeholder="Username" onChange={(e) => {setEmail(e.target.value)}} required/>
                <input type="password" id="password" placeholder="Password"  onChange={(e) => {setPassword(e.target.value)}} required/>
                <button onClick={handleSubmit}>Login</button>
                <a>Forgot your password ?</a>
            </div>
        </div>
    </div>
  )
}

export default Login