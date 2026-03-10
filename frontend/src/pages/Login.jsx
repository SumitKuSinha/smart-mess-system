import { useState } from "react";
import axios from "axios";
import "../styles/login.css";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async () => {

const res = await axios.post("http://localhost:5000/api/auth/login",{
email,
password
});

localStorage.setItem("token",res.data.token);

window.location.href="/dashboard";

}

return(

<div className="login-container">

<div className="login-box">

<div className="login-title">Smart Mess System</div>
<p style={{opacity:0.7, marginBottom:"25px"}}>
AI Based Food Prediction Platform
</p>

<input
className="login-input"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
className="login-input"
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="login-button"
onClick={handleLogin}
>
Login
</button>

</div>

</div>

)

}

export default Login;