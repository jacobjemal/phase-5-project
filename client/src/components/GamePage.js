
import {useEffect, useState} from 'react'
const GamePage = ({currentPlayer, setCurrentPlayer, players, units, unitElement, gameElement, setPlayerOneTeam, playerOneTeam, playerTwoTeam }) => {

  // console.log('gameElement:', gameElement)
  // console.log('player1:', playerOneTeam)
  // console.log('player2:', playerTwoTeam)






    return (
      <div className="square-con" >
        {/* <div className='square'> */}
        {playerOneTeam.map((gameElement) => { 
            const {id, attack, attack_sprite, defense, hp, weapon, move, name, range, stationery_sprite_blue, stationery_sprite_red  /*, team, team_id, description, id */ } = gameElement
            return(
              <>
            <div className="square" > 
              <img src={stationery_sprite_blue} className="game-unit" />   </div>
            </>
              )
            })}

            {playerTwoTeam.map((gameElement) => { 
            const {id, attack, attack_sprite, defense, hp, weapon, move, name, range, stationery_sprite_blue, stationery_sprite_red  /*, team, team_id, description, id */ } = gameElement
            return(
              <>
            <div className="square" > 
              <img src={stationery_sprite_red} className="game-unit" />   </div>
            </>
              )
            })}
            {/* </div> */}
      </div>
  )
}
export default GamePage
{/* <img onClick={() => alert('uhfu9we')} src={unitElement.stationery_sprite_blue} className="game-unit"/> */}
