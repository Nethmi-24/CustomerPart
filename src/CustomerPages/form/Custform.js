import { db } from "../../Custfirebase.config"
import React,{ useState, useEffect} from "react"
import { collection, onSnapshot, addDoc,orderBy,query, limit} from "firebase/firestore"
import './custFormStyle.css'
import Image from "../../Custimage"
import { CountryDropdown, RegionDropdown} from "react-country-region-selector"
import { NavLink } from "react-router-dom"

function Form() {
  const [receipes,setreceipes]=useState([]) //because the receipes are in an array
  const [gameDetails, setGames] = useState([])
  const gamesRef = collection(db, "GamesCollection");
  const [form,setForm]=useState({     //display
   Adname:"",   
   Adtype:"pic",
   game:"",
   duration:"ten",
   resolution:"1080*1080",
   tgames:false,
   country:"",
   region:"",
   Status:"pending"
})
const receipesCollectionRef=collection(db,"AdData_Collection")

const setCountryAndRegion = (country, region) => {
  setForm({
    ...form,
    country: country,
    region: region
  });
};

useEffect(()=>{
  onSnapshot(receipesCollectionRef,snapshot =>{
    setreceipes(snapshot.docs.map(doc =>{
      return {
        id:doc.id,
        viewing: false,
        ...doc.data()   //breakking individual fields
      }
    }))
 
  })
 },[])
 useEffect(() => {
  onSnapshot(gamesRef, snapshot => {                    
    setGames(snapshot.docs.map(doc => {
      return {
        id: doc.id,
        viewng: false,
        ...doc.data(),
      }
    }))
  })
}, []) // added missing dependency array to useEffect hook

 const handleSubmit = e=>{
  e.preventDefault()
if(
  !form.Adname||
  !form.Adtype||
  !form.game||
  !form.duration||
  !form.resolution||
  !form.country||
  !form.region
 
  ){
  alert("Please fill out all fields")
  return
}
addDoc(receipesCollectionRef,form)
setForm({
  Adname:"",   
  Adtype:"pic",
  game:"",
  duration:"ten",
  resolution:"1080*1080",
  tgames:false,
  country:"",
  region:"",
  Status:"pending"
})

alert("Data sent succecfully")
}

return(
  <div className="App"> 
  <div className="formbox">
  <form onSubmit={handleSubmit}>
     {/* AdName */}   
<div className="form-group">
  <label className="block">Ad Name</label>
  <input type="text" value={form.Adname} onChange={
      e=> setForm({...form,Adname:e.target.value})
  }/>
</div>
{/* Adtype */}
<div className="form-group">
        <label class="label">Ad Type</label>
    <select value={form.Adtype} onChange={e=> setForm({...form,Adtype:e.target.value})}>
        <option value="pic">Picture</option>
        <option value="vid">Video</option>
    </select> 
</div>
 {/* Duration */}
 <div className="form-group left-align">
        <label class="label">Duration</label>
    <select value={form.duration} onChange={ e=> setForm({...form,duration:e.target.value})}>
        <option value="ten">   10 days</option>
        <option value="twenty">20 days</option>
        <option value="thirty">30 days</option>
        <option value="thirty">Custom</option>
    </select> 
    </div>
   {/* Resolution */}
   <div className="form-group left-align">
        <label class="label">Resolution</label>
    <select value={form.resolution} onChange={ e=> setForm({...form,resolution:e.target.value})}>
        <option value="1080*1080">1080*1080 px</option>
        <option value="1280*720">1280*720 px</option>
        <option value="1920*1080">1920*1080 px</option>
    </select> 
</div>
{/*country and region*/}
<div className="form-group">
  <label>Country and Region</label>
<div className="drpdwn">
<CountryDropdown
        value={form.country}
        onChange={(val) => setCountryAndRegion(val, form.region)}
      />
      <RegionDropdown
        country={form.country}
        value={form.region}
        onChange={(val) => setCountryAndRegion(form.country, val)}
      />
</div>
</div>
 {/* Game */}
 <div className='form-group'>
    <label className="label">Game</label>
    <select value={form.game} onChange={ e=> setForm({...form,game:e.target.value})}>
    <option value="Select A Game">Select A Game</option>
    {
    form.tgames 
      ? gameDetails
          .sort((a, b) => a.rank - b.rank)
          .slice(0, 2)
          .map((option) => (
            <option key={option.value} value={option.value}>{option.Name}</option>
          ))
      : gameDetails.map((option) => (
        <option key={option.value} value={option.value}>{option.Name}</option>
      ))
      }
</select>
</div>
{/*View Count */}
<div className="form-group">
  <label id="specific-label">View Count</label>
</div>
<div>
  <label id="specific-label">Less than 1000</label>
  <input type="radio" name="viewcount" value="less_than_100" onChange={ e=> setForm({...form,viewCount:e.target.value})} style={{display:'block'}}/>
</div>
<div>
  <label id="specific-label">1000-2000 </label>
  <input type="radio" name="viewcount" value="100_200" onChange={e=> setForm({...form,viewCount:e.target.value})} style={{display:'block'}}/>
</div>
<div>
  <label id="specific-label">More than 2000</label>
  <input type="radio" name="viewcount" value="more_than_200" onChange={e=> setForm({...form,viewCount:e.target.value})} style={{display:'block'}}/>
</div>

{/* Trending Games */}

<div>
     <label id="specific-label">Trending Games</label>
     <input type="checkbox" checked={form.tgames} 
     onChange={e => setForm({...form, tgames: !form.tgames})} />
</div>


{/* Upload Picture */}
<div>
<Image/>
</div>
<div className="sub">
<button type="submit" onSubmit={handleSubmit}>submit</button>
</div>
<div>
  <button type="submit"><NavLink to="/Cuspayment">Pay Now</NavLink><br></br></button>
</div>
</form>
  </div>
  </div>
)

}



  

export default Form;
