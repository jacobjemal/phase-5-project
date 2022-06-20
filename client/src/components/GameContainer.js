import GamePage from "./GamePage";

function GameContainer({  units, setPlayerOneTeam, playerOneTeam, playerTwoTeam, setPlayerTwoTeam}) {


    let p = {playerOneTeam, playerTwoTeam}
    // let p = [playerOneTeam, playerTwoTeam]
    let players = []
    players.push(p)

// console.log('players:', players)

    return (
    <div className="game-grid">
        {players.map((gameElement, i) => {
            return(
                <GamePage key={i} gameElement={gameElement} playerOneTeam={playerOneTeam} setPlayerOneTeam={setPlayerOneTeam} playerTwoTeam={playerTwoTeam} setPlayerTwoTeam={setPlayerTwoTeam}/>
                )
            })}
    </div>
    );
}

export default GameContainer;