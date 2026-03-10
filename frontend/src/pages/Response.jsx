import { useState } from "react";
import axios from "axios";

function Response(){

const [breakfast,setBreakfast] = useState(false);
const [lunch,setLunch] = useState(false);
const [dinner,setDinner] = useState(false);

const submitResponse = async ()=>{

await axios.post(
"http://localhost:5000/api/responses",
{
user:"USER_ID_HERE",
date:new Date().toISOString().slice(0,10),
breakfast,
lunch,
dinner
}
);

alert("Response submitted");

};

return(

<div style={{padding:"40px"}}>

<h2>Meal Selection</h2>

<label>
<input type="checkbox"
onChange={()=>setBreakfast(!breakfast)}
/>
Breakfast
</label>

<br/>

<label>
<input type="checkbox"
onChange={()=>setLunch(!lunch)}
/>
Lunch
</label>

<br/>

<label>
<input type="checkbox"
onChange={()=>setDinner(!dinner)}
/>
Dinner
</label>

<br/><br/>

<button onClick={submitResponse}>
Submit
</button>

</div>

)

}

export default Response;