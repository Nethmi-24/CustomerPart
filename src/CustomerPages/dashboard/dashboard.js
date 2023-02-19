import React from "react";
import './dashboardCss.css'

function Dashboard(){
 
  return (
    <div className="App">
      <div>
        <label><h2>Overview</h2></label>
      </div>
      <div className="box"><h3>Weekly Ad Overview</h3></div>
      <div className="box2"><h3>Weekly ad Count Overview</h3></div>
      <div className="box3"><h3>Ad Pricing</h3></div>
</div>
  );
}

export default Dashboard;
