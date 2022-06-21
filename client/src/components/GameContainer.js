import GamePage from "./GamePage";

function GameContainer({  units, setPlayerOneTeam, playerOneTeam, playerTwoTeam, setPlayerTwoTeam }) {


        // works with out render \\
    // let p = {playerOneTeam, playerTwoTeam}
    // // // let p = [playerOneTeam, playerTwoTeam]
    // // let players = []
    // let players = [...playerOneTeam, ...playerTwoTeam]
    // players.push(p)
    

    // let p = {playerOneTeam, playerTwoTeam}
    let p = [playerOneTeam, setPlayerTwoTeam]
    // let players = []
    let players = [...playerOneTeam, ...playerTwoTeam]
    p.push(players)
    

            // setPlayerOneTeam(prevState => !prevState)

console.log('players:', players)

    return (
    <div className="game-grid">
        <GamePage players={players} playerOneTeam={playerOneTeam} setPlayerOneTeam={setPlayerOneTeam} playerTwoTeam={playerTwoTeam} setPlayerTwoTeam={setPlayerTwoTeam}/> 
        {/* {players.map((gameElement, i) => {
            return(
                )
            })} */} 
    </div>
    );
}

export default GameContainer;