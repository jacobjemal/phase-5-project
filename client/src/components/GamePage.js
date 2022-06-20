
import {useEffect, useState} from 'react'


const GamePage = ({players, units, unitElement, gameElement, setPlayerOneTeam, playerOneTeam, playerTwoTeam}) => {
  const {id, attack, attack_sprite, defense, hp, weapon, move, name, range, stationery_sprite_blue, stationery_sprite_red  /*, team, team_id, description, id */ } = gameElement


console.log('p1', playerOneTeam)
console.log('p2', playerTwoTeam)

    return (
      <div className="square-con">
        <div className="square"></div>

      </div>
  )
}
export default GamePage
{/* <img onClick={() => alert('uhfu9we')} src={unitElement.stationery_sprite_blue} className="game-unit"/> */}
