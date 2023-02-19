
import React, {Component} from 'react'
import Form from './CustomerPages/form/Custform';
import { Routes,Route,NavLink,BrowserRouter } from 'react-router-dom';
import Dashboard from './CustomerPages/dashboard/dashboard.js';
import Profile from './CustomerPages/profile/profile';
import Editprofile from './CustomerPages/profile/editprofile';
import GameDetail from './CustomerPages/gamedetails/gamedetail';
import Cuspayment from './CustomerPages/payment/Cuspayment';
import ViewAd from './CustomerPages/adcollection/viewAd';
class App extends Component {
  render(){
  return (
   
      <BrowserRouter>
      <header>
        <nav>
        <NavLink to="/Form">Form</NavLink><br></br>
        <NavLink to="/Dashboard">DB</NavLink><br></br>
        <NavLink to="/Profile">Profile</NavLink><br></br>
        <NavLink to="/GameDetail">Game Details</NavLink><br></br>
        <NavLink to="/ViewAd">View Ad</NavLink><br></br>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/Form" index element={<Form/>}/>
          <Route path="/Dashboard" index element={<Dashboard/>}/>
          <Route path="/Profile" index element={<Profile/>}/>
          <Route path="/Editprofile" index element={<Editprofile/>}/>
          <Route path="/GameDetail" index element={<GameDetail/>}/>
          <Route path="/Cuspayment" index element={<Cuspayment/>}/>
          <Route path="/ViewAd" index element={<ViewAd/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
}

export default App;
