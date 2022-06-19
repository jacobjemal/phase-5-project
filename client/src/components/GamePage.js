
const GamePage = ({units, gameElement, playerOneTeam, playerTwoTeam}) => {

    
        const {attack, attack_sprite, defense, hp, weapon, move, name, range, stationery_sprite_blue, stationery_sprite_red  /*, team, team_id, description, id */ } = playerOneTeam
    // const [square, setSquare] = useState([])
    // const [moves, setMoves] = useState(false)




console.log(playerOneTeam)
// console.log(playerTwoTeam)
    return(
        <div className="square-con">
        <button >

            <div className="square"> <img src={stationery_sprite_blue} className="game-unit"/> </div>                                                                                   
        </button>
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <button> <div className="square">  </div>   </button>                                                                                
            <div className="square">  </div>                                                                                   
            <div className="square">  </div>                                                                                   
            <div className="square">  </div>                                                                                   
            <div className="square"> </div>                                                                                   
            <div className="square"> </div>                                                                                   
         </div>

    )
}
export default GamePage
