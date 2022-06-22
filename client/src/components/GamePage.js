
import {useEffect, useState} from 'react'
const GamePage = ({currentPlayer, setCurrentPlayer, players, units, unitElement, gameElement, setPlayerOneTeam, playerOneTeam, playerTwoTeam }) => {
  
  const [isVis, setIsVis] = useState(false)
  const [show, setShow] = useState(null)
  const [move, setMove] = useState([])
  // console.log('gameElement:', gameElement)
  // console.log('player1:', playerOneTeam)
  // console.log('player2:', playerTwoTeam)

  const showBlue = () => {
    setShow(true) 
    setIsVis(true)

}

const showRed = () => {
    setShow(false) 
    setIsVis(true)

}

  const handleClick = () =>{ 
      //onClick={() => {handleClick()}}
  }

    // const moveUnit = () => {
      
    // }

    const moveBlue = () => {
      let blue2 = playerOneTeam
    }

    // const moveRed = () => {
    //   let red2 = playerTwoTeam
    //   if (playerOneTeam.)
    // }

    let array = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 7; j++) {
        let chr = String.fromCharCode(97 + j);
        array.push({row: i, column: chr})
      }
    }



    return (
      <div className="square-con" >
        {/* <div className='square'> */}
        {playerOneTeam.map((gameElement) => { 
            const {id, attack, attack_sprite, defense, hp, weapon, move, name, range, stationery_sprite_blue, stationery_sprite_red  /*, team, team_id, description, id */ } = gameElement
            return(
            <>
            <div className="square" > 
              <img src={stationery_sprite_blue} className="game-unit" />   
              </div>
            </>
              )
            })}

            {
              array.map((e) => {
                return(
                  <div data-column={e.column} data-row={e.row} className='square' ></div>
                )
              })
            }  


            {playerTwoTeam.map((gameElement) => { 
            const {id, attack, attack_sprite, defense, hp, weapon, move, name, range, stationery_sprite_blue, stationery_sprite_red  /*, team, team_id, description, id */ } = gameElement
            return(
              <>
            <div className="square" >
              <img src={stationery_sprite_red} className="game-unit" />   
              </div>
            </>
              )
            })}


             {/* </div> */}
      </div>
  )
}
export default GamePage
{/* <img onClick={() => alert('uhfu9we')} src={unitElement.stationery_sprite_blue} className="game-unit"/> */}
