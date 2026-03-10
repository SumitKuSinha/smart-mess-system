import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/dashboard.css";

function Dashboard(){

const [prediction,setPrediction] = useState(null);

useEffect(()=>{

fetchPrediction();

},[]);

const fetchPrediction = async ()=>{

try{

const res = await axios.get(
"http://localhost:5000/api/responses/prediction/2026-03-10"
);

setPrediction(res.data);

}catch(err){

console.log(err);

}

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

</div>

)

}

export default Dashboard;