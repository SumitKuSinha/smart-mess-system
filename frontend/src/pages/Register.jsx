import { useState } from "react";
import axios from "axios";

function Register(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [role,setRole] = useState("student");

const handleRegister = async ()=>{

try{

await axios.post("http://localhost:5000/api/auth/register",{
name,
email,
password,
role
});

alert("User Registered");

}catch(err){
console.log(err);
}

};

return(

<div style={{padding:"40px"}}>

<h2>Register</h2>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
>

<option value="student">Student</option>
<option value="staff">Staff</option>

</select>

<br/><br/>

<button onClick={handleRegister}>
Register
</button>

</div>

)

}

export default Register;