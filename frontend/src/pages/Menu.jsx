import { useState } from "react";
import axios from "axios";

function Menu(){

const [breakfast,setBreakfast] = useState("");
const [lunch,setLunch] = useState("");
const [dinner,setDinner] = useState("");

const createMenu = async ()=>{

try{

await axios.post(
"http://localhost:5000/api/menu",
{
date:new Date().toISOString().slice(0,10),
breakfast,
lunch,
dinner
}
);

alert("Menu Created");

}catch(err){
console.log(err);
}

};

return(

<div style={{padding:"40px"}}>

<h2>Create Menu</h2>

<input
placeholder="Breakfast"
value={breakfast}
onChange={(e)=>setBreakfast(e.target.value)}
/>

<br/><br/>

<input
placeholder="Lunch"
value={lunch}
onChange={(e)=>setLunch(e.target.value)}
/>

<br/><br/>

<input
placeholder="Dinner"
value={dinner}
onChange={(e)=>setDinner(e.target.value)}
/>

<br/><br/>

<button onClick={createMenu}>
Save Menu
</button>

</div>

)

}

export default Menu;