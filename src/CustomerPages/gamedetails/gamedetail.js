import { db } from "../../Custfirebase.config"
import { useEffect, useState } from 'react';
import './gamedetail.css'
import { doc,onSnapshot, collection, limit } from "firebase/firestore" 
import { orderBy,query } from "firebase/firestore";
import { MDBBtn } from 'mdb-react-ui-kit';
function GameDetail()
{
    const [data, setData] = useState([]);
    const[tgames,settgames]=useState([]);
    const gamesCollectionRef = collection(db,"GamesCollection");
    const q = query(gamesCollectionRef, orderBy("Rank"));
    const tg=query(gamesCollectionRef,orderBy("Rank"),limit(2));
    useEffect(() => {
        onSnapshot(q,snapshot => {
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
      onSnapshot(tg,snapshot => {
          settgames(snapshot.docs.map(doc => {
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
        <p><h1 style={{color:"white"}}>Pricing</h1></p>
      <div className="GameDetailbox">
  <label><h3>All Games</h3></label>
  <table>
    <tr>
      <th style={{ padding: "40px" }}>Game Name</th>
      <th style={{ padding: "40px" }}>Rank</th>
      <th style={{ padding: "40px" }}>View Count</th>
      <th style={{ padding: "40px" }}>Ad Fee</th>
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
    {data.map((item, index) => (
      <tr key={item.id || index}>
        <td style={{ padding: "10px" }}>{item.Name}</td>
        <td style={{ padding: "10px" }}>{item.Rank}</td>
        <td style={{ padding: "10px" }}>{item.View_count}</td>
       
      </tr>
    ))}
  </table>
</div>
<div className="GameDetailbox">
  <label><h3>Trending Games</h3></label>
  <table>
    <tr>
      <th style={{ padding: "40px" }}>Game Name</th>
      <th style={{ padding: "40px" }}>Rank</th>
      <th style={{ padding: "40px" }}>View Count</th>
     <th style={{ padding: "40px" }}>Ad Fee</th>
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
    {tgames.map((item, index) => (
      <tr key={item.id || index}>
        <td style={{ padding: "10px" }}>{item.Name}</td>
        <td style={{ padding: "10px" }}>{item.Rank}</td>
        <td style={{ padding: "10px" }}>{item.View_count}</td>
       
      </tr>
    ))}
  </table>
</div>
<div className="GameDetailbox" style={{margin:'50px'}}>
  <label><h3>Multi Player Game</h3></label>
  <table>
    <tr>
      <th style={{ padding: "40px" }}>Game Name</th>
      <th style={{ padding: "40px" }}>Rank</th>
      <th style={{ padding: "40px" }}>View Count</th>
     <th style={{ padding: "40px" }}>Ad Fee</th>
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
    {tgames.map((item, index) => (
      <tr key={item.id || index}>
        <td style={{ padding: "10px" }}>{item.Name}</td>
        <td style={{ padding: "10px" }}>{item.Rank}</td>
        <td style={{ padding: "10px" }}>{item.View_count}</td>
        
      </tr>
    ))}
  </table>
</div>
<div className="GameDetailbox" style={{margin:'10px'}}>
  <label><h3>Single Player Game</h3></label>
  <table>
    <tr>
      <th style={{ padding: "40px" }}>Game Name</th>
      <th style={{ padding: "40px" }}>Rank</th>
      <th style={{ padding: "40px" }}>View Count</th>
     <th style={{ padding: "40px" }}>Ad Fee</th>
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
    {tgames.map((item, index) => (
      <tr key={item.id || index}>
        <td style={{ padding: "10px" }}>{item.Name}</td>
        <td style={{ padding: "10px" }}>{item.Rank}</td>
        <td style={{ padding: "10px" }}>{item.View_count}</td>
        
      </tr>
    ))}
  </table>
</div>
<div style={{ padding:"0px 0px 0px 1100px" }}>
<MDBBtn color='dark' outline rounded>Next Page</MDBBtn>
</div>
</div>

    )
    }

export default GameDetail;