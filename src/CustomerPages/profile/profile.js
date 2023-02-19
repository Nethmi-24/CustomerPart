import { db } from "../../Custfirebase.config"
import { useEffect, useState } from 'react';
import './profile.css'
import { doc, onSnapshot } from "firebase/firestore"
import { Routes,Route,NavLink,BrowserRouter } from 'react-router-dom';
import Editprofile from "./editprofile";
function Profile(){
    const [user, setUser] = useState({});
    const [userId, setUserId] = useState(null);

    useEffect(() => {
      // Get the logged-in user ID
      const loggedInUserId = getLoggedInUserId();
      setUserId(loggedInUserId);
    }, []);

    useEffect(() => {
      if (userId) {
        const ProfileCollectionRef = doc(db, "customerCreateAccount", userId);
        onSnapshot(ProfileCollectionRef, (doc) => {
          setUser(doc.data());
        });
      }
    }, [userId]);

    return(
    
      <div className="App">
        <div>
        <img className="profilepic" src="https://www.pngitem.com/pimgs/m/24-248631_blue-profile-logo-png-transparent-png.png"  alt="profile Picture" width="100px" style={{marginLeft: "230px",padding:"20px"}}></img>
        </div>
        <div className="profilebox">
          <label><h3>Profile Details</h3></label>
          <div className="profile-details">
        <p>First Name: {user.FirstName}</p>
        <p>Last Name: {user.LastName}</p>
        <p>CustomerID:{user.Id}</p>
        <p>Country: {user.Country}</p>
        <p>Email Address: {user.EmailAddress}</p>
        <p>Contacts: {user.ContactNumber}</p>
        <p>Joined Since:</p>
        </div>
        <div style={{ padding:"15px 300px" }}>
        <button style={{ padding:"5px 30px" }}><nav><NavLink to="/Editprofile">Edit Profile</NavLink></nav></button>
        </div>
        </div>
        <div className="profilebox3">
      <label><h3>Monthly Performance</h3></label>
        </div>
        <div className="profilebox2">
      <label><h3>Recommended Actions</h3></label>
        </div>
      </div>
    );
}

function getLoggedInUserId() {
  // Return the user ID of the logged-in user
 
  return "J7fvkkKWPfEzMA76FvQQ";
}

export default Profile;
