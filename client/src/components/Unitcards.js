import { useState } from "react"

const UnitCards = ({element, setSelectedUnits}) => {
  
const {attack, attack_sprite, defense, description, hp, id, move, name, range, stationery_sprite_blue, stationery_sprite_red, team, team_id, weapon} = element

const handleClick = () => {
    alert('you selected')
  }

return(
    <div class="unit-card">

        <div class="flip-box">
            <div class="flip-box-inner">
            <div class="flip-box-front">
                <img
                src={attack_sprite}/>
                <h2>{name}</h2>
                </div>
                <div class="flip-box-back"
                onClick={handleClick}>
                    <h3>
                    <p>attack: {attack}</p>
                    <p>defense: {defense}</p>
                    <p>hp: {hp}</p>
                    <p>move: {move}</p>
                    <p>weapon: {weapon}</p>
                    <p>range: {range}</p>
                    </h3>
                </div>
            </div>
        </div>
    </div>
    )

}
export default UnitCards

