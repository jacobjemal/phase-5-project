import React, {useState, useEffect} from "react";
import UnitCards from "./Unitcards";
import GamePage from "./GamePage"


function UnitPage() {

const [units, setUnits] = useState([])

      useEffect(() => {
        (async() => {
          let req = await fetch('/units')
          let res = await req.json()
          setUnits(res)
        })()
      }, [])
      // console.log('units:', units)

      /// players ///

      const [playerOneTeam, setPlayerOneTeam] = useState([])
      const [playerTwoTeam, setPlayerTwoTeam] = useState([])


      /*
      i can make the turn logic in the game page 
      */
      
      

    return (
      <div className="unit-page">
          {/* <button className="info-btn">INFO</button> */}
          <h1>UNITS</h1>
          <h5>hover for stats click to add to you'r team</h5>
        <div className="unit-grid">
        {units.map((element, i) => {
          return(
            <UnitCards key={i} element={element} playerOneTeam={playerOneTeam} playerTwoTeam={playerTwoTeam} setPlayerOneTeam={setPlayerOneTeam} setPlayerTwoTeam={setPlayerTwoTeam}/>
            )
          })}
          <GamePage units={units} playerOneTeam={playerOneTeam} playerTwoTeam={playerTwoTeam}/>
          </div>
        </div>
      );
}
export default UnitPage;
