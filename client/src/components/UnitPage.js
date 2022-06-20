import React, {useState, useEffect} from "react";
import UnitCards from "./UnitCards";
// import GamePage from "./GamePage"
// import UnitsContainer from "./UnitsContainer";
import GameContainer from "./GameContainer";

function UnitPage({}) {

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
          units.map((unitElement, i) => {     
            return( 
              <UnitCards key={i} unitElement={unitElement} playerOneTeam={playerOneTeam} playerTwoTeam={playerTwoTeam} setPlayerOneTeam={setPlayerOneTeam} setPlayerTwoTeam={setPlayerTwoTeam} /> 
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
        </div>
            <div className="game-page">
        {/* <div className="game-grid"> */}
              <GameContainer  units={units} playerOneTeam={playerOneTeam} setPlayerOneTeam={setPlayerOneTeam} playerTwoTeam={playerTwoTeam} setPlayerTwoTeam={setPlayerTwoTeam}/>
            {/* <GamePage playerOneTeam={playerOneTeam} setPlayerOneTeam={setPlayerOneTeam} playerTwoTeam={playerTwoTeam}  setPlayerTwoTeam={setPlayerTwoTeam}/> */}
    {/* {        setPlayerOneTeam(
        playerOneTeam.map((gameElement, i) => {
        return(
          <GamePage key={i} gameElement={gameElement}  playerOneTeam={playerOneTeam} setPlayerOneTeam={setPlayerOneTeam} playerTwoTeam={playerTwoTeam}  setPlayerTwoTeam={setPlayerTwoTeam}/> 
        )
        })
        )} */}
          {/* {units.map((gameElement, i ) => {
            return ( 
                ) 
              })} */}
          {/* </div>  */}
          </div>  
    </div> 
      );
}
export default UnitPage;
