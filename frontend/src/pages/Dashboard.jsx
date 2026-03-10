import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/dashboard.css";

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

function Dashboard(){

const [wasteResult, setWasteResult] = useState(null);
const [prediction,setPrediction] = useState(null);

const [breakfastActual,setBreakfastActual] = useState("");
const [lunchActual,setLunchActual] = useState("");
const [dinnerActual,setDinnerActual] = useState("");

useEffect(() => {
    
    const fetchPrediction = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/responses/prediction/2026-03-10"
        );
        setPrediction(res.data);
      } catch (err) {
        console.error("Error fetching prediction:", err);
      }
    };

    fetchPrediction();
  }, []);

const handleCalculate = async () => {

try{

const res = await axios.post(
"http://localhost:5000/api/waste",
{
date: new Date().toISOString().slice(0,10),
breakfastActual,
lunchActual,
dinnerActual
}
);

setWasteResult(res.data);

}catch(err){
console.log(err);
}

};

const getMessage = (value) => {

if(value > 0){
return value + " meals wasted";
}

if(value < 0){
return "Kitchen cooked " + Math.abs(value) + " less meals than prediction";
}

return "Perfect match";

};

const chartData = {
labels: ["Breakfast","Lunch","Dinner"],
datasets: [
{
label: "Food Waste",
data: wasteResult ? [
wasteResult.breakfastDifference,
wasteResult.lunchDifference,
wasteResult.dinnerDifference
] : [0,0,0]
}
]
};

return(

<div className="dashboard-container">

<div className="dashboard-title">
Smart Mess Dashboard
</div>

<div className="card-container">

<div className="dashboard-card">
<div className="card-title">Breakfast Prediction</div>
<div className="card-value">
{prediction ? prediction.breakfast : "--"}
</div>
</div>

<div className="dashboard-card">
<div className="card-title">Lunch Prediction</div>
<div className="card-value">
{prediction ? prediction.lunch : "--"}
</div>
</div>

<div className="dashboard-card">
<div className="card-title">Dinner Prediction</div>
<div className="card-value">
{prediction ? prediction.dinner : "--"}
</div>
</div>

</div>

<h2 style={{marginTop:"40px"}}>Kitchen Input</h2>

<input
placeholder="Breakfast cooked"
value={breakfastActual}
onChange={(e)=>setBreakfastActual(e.target.value)}
/>

<input
placeholder="Lunch cooked"
value={lunchActual}
onChange={(e)=>setLunchActual(e.target.value)}
/>

<input
placeholder="Dinner cooked"
value={dinnerActual}
onChange={(e)=>setDinnerActual(e.target.value)}
/>

<br/><br/>

<button onClick={handleCalculate}>
Calculate Waste
</button>

{wasteResult && (

<div style={{marginTop:"40px"}}>

<h2>Waste Analytics</h2>

<p>
Breakfast : {getMessage(wasteResult.breakfastDifference)}
</p>

<p>
Lunch : {getMessage(wasteResult.lunchDifference)}
</p>

<p>
Dinner : {getMessage(wasteResult.dinnerDifference)}
</p>

<h2 style={{marginTop:"40px"}}>Waste Chart</h2>

<div style={{width:"500px"}}>
<Bar data={chartData}/>
</div>

</div>

)}

</div>

)

}

export default Dashboard;