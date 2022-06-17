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
      // const [currentPlayer, setCurrentPlayer] = useState([])
      
      const blueReady = () => {
        if (playerOneTeam.length && playerTwoTeam.length <= 4 ){
        // return //gmae page 
      } else {
        alert('BLUE you need to slect 5 units')
      }
    }

    const redReady = () => {
      if ( playerTwoTeam.length && playerOneTeam.length <= 4) {
      } else {
        alert('RED you need to slect 5 units')
      }
    }
    
      // currentPlayer = playerOneTeam
      /*
      i can make the turn logic in the game page 
      */
      
      

    return (
    <div className="page">
      <div className="unit-page">
          {/* <button className="info-btn">INFO</button> */}
          <h1>UNITS</h1>
          <h5>hover for stats click to add to you'r team</h5>
        <div className="unit-grid">
        {
          units.map((UnitElement, i) => {     
            return( 
              <UnitCards key={i} UnitElement={UnitElement} playerOneTeam={playerOneTeam} playerTwoTeam={playerTwoTeam} setPlayerOneTeam={setPlayerOneTeam} setPlayerTwoTeam={setPlayerTwoTeam}/>
              )
            })
          }
          </div>
        </div>
      {/* <div className="game-page"> */}
        <div className="game-grid">
          { 
          units.map((gameElement, i) => {
            return(
              <GamePage key={i} gameElement={gameElement} playerOneTeam={playerOneTeam} playerTwoTeam={playerTwoTeam} setPlayerOneTeam={setPlayerOneTeam} setPlayerTwoTeam={setPlayerTwoTeam}/>
              )
          })
        }
        </div>
      {/* </div> */}
    </div> 
      );
}
export default UnitPage;
