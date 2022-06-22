import { useEffect } from "react";
import GamePage from "./GamePage";

function GameContainer({currentPlayer, setCurrentPlayer,  units, setPlayerOneTeam, playerOneTeam, playerTwoTeam, setPlayerTwoTeam }) {



         // // works with out render \\
    // let p = {playerOneTeam, playerTwoTeam}
    // // // let p = [playerOneTeam, playerTwoTeam]
    // // let players = []
    // let players = [...playerOneTeam, ...playerTwoTeam]
    // players.push(p)
    
    
    // let p = {playerOneTeam, playerTwoTeam}
    // let players =  [...playerOneTeam, ...playerTwoTeam] 
    // let p = [playerOneTeam, playerTwoTeam]
    // // let players = []
    // let players = [...playerOneTeam, ...playerTwoTeam]
    // // // let players = [{...playerOneTeam} || {...playerTwoTeam}]
    // players.push(p)




            // setPlayerOneTeam(prevState => !prevState)

// console.log('players:', players)

    return (
    <div className="game-grid">
        <GamePage  currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}  playerOneTeam={playerOneTeam} setPlayerOneTeam={setPlayerOneTeam} playerTwoTeam={playerTwoTeam} setPlayerTwoTeam={setPlayerTwoTeam}/> 
         {/* {players.map((gameElement, i) => {
            return(
                )
            })}  */}
    </div>
    );
}

export default GameContainer;