import { useEffect, useState } from "react";
import axios from "axios";

function StudentDashboard() {

const [menu, setMenu] = useState(null);

const [breakfast, setBreakfast] = useState(false);
const [lunch, setLunch] = useState(false);
const [dinner, setDinner] = useState(false);


// fetch today's menu
const fetchMenu = async () => {

try {

const res = await axios.get(
"http://localhost:5000/api/menu/today"
);

setMenu(res.data);

} catch (err) {
console.log(err);
}

};


// run when page loads
useEffect(() => {

fetchMenu();

}, []);


// submit student meal choice
const submitResponse = async () => {

try {

await axios.post(
"http://localhost:5000/api/responses",
{
date: new Date().toISOString().slice(0,10),
breakfast,
lunch,
dinner
}
);

alert("Response submitted");

} catch (err) {

console.log(err);

}

};


return (

<div style={{padding:"40px"}}>

<h2>Student Dashboard</h2>

<h3>Today's Menu</h3>

{menu ? (

<div>

<p><b>Breakfast:</b> {menu.breakfast}</p>
<p><b>Lunch:</b> {menu.lunch}</p>
<p><b>Dinner:</b> {menu.dinner}</p>

</div>

) : (

<p>Loading menu...</p>

)}


<h3 style={{marginTop:"30px"}}>Select Meals</h3>

<label>
<input
type="checkbox"
checked={breakfast}
onChange={() => setBreakfast(!breakfast)}
/>
Breakfast
</label>

<br/>

<label>
<input
type="checkbox"
checked={lunch}
onChange={() => setLunch(!lunch)}
/>
Lunch
</label>

<br/>

<label>
<input
type="checkbox"
checked={dinner}
onChange={() => setDinner(!dinner)}
/>
Dinner
</label>

<br/><br/>

<button onClick={submitResponse}>
Submit Response
</button>

</div>

);

}

export default StudentDashboard;