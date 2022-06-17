
const GamePage = ({gameElement, playerOneTeam, playerTwoTeam}) => {
    const {id, attack, attack_sprite, defense, hp, weapon, move, name, range, stationery_sprite_blue, stationery_sprite_red  /*, team, team_id, description, id */ } = gameElement

    // const [square, setSquare] = useState([])
    // const [moves, setMoves] = useState(false)




// console.log(playerOneTeam)
// console.log(playerTwoTeam)
    return(
        <div className="square-con">
            <div className="square"></div>             
            <div className="square"></div>             
            <div className="square"></div>             
            <div className="square"></div>             
            <div className="square"></div>             
        </div>

    )
}
export default GamePage
