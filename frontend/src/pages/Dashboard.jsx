function Dashboard(){

  return(

    <div style={{padding:"40px"}}>

      <h1>Smart Mess Dashboard</h1>

      <div style={{display:"flex", gap:"20px"}}>

        <div style={{border:"1px solid gray", padding:"20px"}}>
          <h3>Breakfast Prediction</h3>
        </div>

        <div style={{border:"1px solid gray", padding:"20px"}}>
          <h3>Lunch Prediction</h3>
        </div>

        <div style={{border:"1px solid gray", padding:"20px"}}>
          <h3>Dinner Prediction</h3>
        </div>

      </div>

    </div>

  )

}

export default Dashboard;