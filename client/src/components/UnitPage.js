import React, {useState, useEffect} from "react";
import UnitCards from "./Unitcards";
import GamePage from "./GamePage"

function UnitPage() {

  const [units, setUnits] = useState([])
  const [playerOneTeam, setPlayerOneTeam] = useState([])
  const [playerTwoTeam, setPlayerTwoTeam] = useState([])
  

      useEffect(() => {
        (async() => {
          let req = await fetch('/units')
          let res = await req.json()
          setUnits(res)
        })()
      }, [])


 



      // console.log('units:', units)

      /// players ///

      // const [currentPlayer, setCurrentPlayer] = useState([])
      
    //   const blueReady = () => {
    //     if (playerOneTeam.length && playerTwoTeam.length <= 4 ){
    //     // return //gmae page 
    //   } else {
    //     alert('BLUE you need to slect 5 units')
    //   }
    // }

    // const redReady = () => {
    //   if ( playerTwoTeam.length && playerOneTeam.length <= 4) {
    //   } else {
    //     alert('RED you need to slect 5 units')
    //   }
    // }
    
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
              <UnitCards player1={player1} player2={player2} key={i} UnitElement={UnitElement} playerOneTeam={playerOneTeam} playerTwoTeam={playerTwoTeam} setPlayerOneTeam={setPlayerOneTeam} setPlayerTwoTeam={setPlayerTwoTeam}/>
              
              )
              const player1 = () => {
                let blue2 = UnitElement
                // console.log('b2', b2)
                if ( playerOneTeam.length <= 4 ) {
                    setPlayerOneTeam([...playerOneTeam, blue2])
                } else {
                alert('cant select anymore')
                // console.log('player1:', playerOneTeam)
                }
            }
            
            const player2 = () => {
                let red2 = UnitElement
                // console.log('r2:', r2)
                if ( playerTwoTeam.length <= 4 ) {
                    setPlayerTwoTeam([...playerTwoTeam, red2])
                } else {
                    alert('cant select anymore')
                    // console.log('player2:', playerTwoTeam)
                }
            }
            })
            
          }
          </div>
      <div className="game-page">
        <div className="game-grid">
          <GamePage units={units} playerOneTeam={playerOneTeam} playerTwoTeam={playerTwoTeam} setPlayerOneTeam={setPlayerOneTeam} setPlayerTwoTeam={setPlayerTwoTeam}/>
        {/* {
          units.map((gameElement, i ) => {
            return (
              
              )
            })
          } */}
          </div>
        </div>
      </div>
    </div> 
      );
}
export default UnitPage;
