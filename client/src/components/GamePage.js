
import {useEffect, useState} from 'react'
const GamePage = ({ players, units, unitElement, gameElement, setPlayerOneTeam, playerOneTeam, playerTwoTeam }) => {
  // const {id, attack, attack_sprite, defense, hp, weapon, move, name, range, stationery_sprite_blue, stationery_sprite_red  /*, team, team_id, description, id */ } = gameElement
  // console.log('gameElement:', gameElement)
  // console.log('player1:', playerOneTeam)
  // console.log('player2:', playerTwoTeam)






    return (
      <div className="square-con" >
        {players.map((gameElement) => { 
            const {id, attack, attack_sprite, defense, hp, weapon, move, name, range, stationery_sprite_blue, stationery_sprite_red  /*, team, team_id, description, id */ } = gameElement
            return(
              <>


        <div className="square" > 
          <img src={stationery_sprite_blue} />  </div>
        <div className="square"> 
          <img src={stationery_sprite_red} />   </div>


            </>
              )
        })}
      </div>
  )
}
export default GamePage
{/* <img onClick={() => alert('uhfu9we')} src={unitElement.stationery_sprite_blue} className="game-unit"/> */}
