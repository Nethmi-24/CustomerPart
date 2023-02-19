import { db } from "../../Custfirebase.config"
import { useEffect, useState } from 'react';
import './viewAdStyle.css'
import { doc,onSnapshot, collection} from "firebase/firestore" 
import { query,where } from "firebase/firestore";

function ViewAd(){
    const [data, setData] = useState([]);
    const[rejected,setrejected]=useState([]);
    const[pending,setpending]=useState([]);
    const AdCollectionRef = collection(db,"AdData_Collection");
    const q1 = query(AdCollectionRef, where("Status", "==", "Approved"));
    const q2 = query(AdCollectionRef, where("Status", "==", "Rejected"));
    const q3 = query(AdCollectionRef, where("Status", "==", "Pending"));
    useEffect(() => {
        onSnapshot(q1,snapshot => {
            setData(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()   //breaking individual fields
                }
            }))
          })
    }, [])
    useEffect(() => {
        onSnapshot(q2,snapshot => {
            setrejected(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()   //breaking individual fields
                }
            }))
          })
    }, [])
    useEffect(() => {
        onSnapshot(q3,snapshot => {
            setpending(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()   //breaking individual fields
                }
            }))
          })
    }, [])

    return(
        <div className="App">
            <p><h1 style={{color:"white"}}>All Ads</h1></p>
<div className="GameDetailbox">
  <label><h3>On going Ads</h3></label>
  <table>
    <tr>
      <th style={{ padding: "40px" }}>Ad ID</th>
      <th style={{ padding: "40px" }}>Game ID</th>
      
    </tr>
  <hr
        style={{
          background: 'green',
          color: 'green',
          borderColor: 'green',
          height: '1px',
          width:'395%'
        }}
      />
    {rejected.map((item, index) => (
      <tr key={item.id || index}>
        <td style={{ padding: "10px" }}>{item.Adname}</td>
        <td style={{ padding: "10px" }}>{item.Game}</td>
        </tr>
    ))}
  </table>
</div>
<div className="GameDetailbox">
  <label><h3>Rejected Ads</h3></label>
  <table>
    <tr>
      <th style={{ padding: "40px" }}>Ad ID</th>
      <th style={{ padding: "40px" }}>Game ID</th>
      
    </tr>
  <hr
        style={{
          background: 'green',
          color: 'green',
          borderColor: 'green',
          height: '1px',
          width:'395%'
        }}
      />
    {data.map((item, index) => (
      <tr key={item.id || index}>
        <td style={{ padding: "10px" }}>{item.Adname}</td>
        <td style={{ padding: "10px" }}>{item.Game}</td>
        </tr>
    ))}
  </table>
</div>
<div className="GameDetailbox pendingAds">
  <label><h3>Pending Ads</h3></label>
  <table>
    <tr>
      <th style={{ padding: "40px" }}>Ad ID</th>
      <th style={{ padding: "40px" }}>Game ID</th>
      
    </tr>
  <hr
        style={{
          background: 'green',
          color: 'green',
          borderColor: 'green',
          height: '1px',
          width:'375%'
        }}
      />
    {pending.map((item, index) => (
      <tr key={item.id || index}>
        <td style={{ padding: "10px" }}>{item.Adname}</td>
        <td style={{ padding: "10px" }}>{item.Game}</td>
        </tr>
    ))}
  </table>
</div>
</div>
    )
}
export default ViewAd;