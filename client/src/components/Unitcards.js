import { useState } from "react"


const UnitCards = ({ player1, player2, UnitElement, playerOneTeam, playerTwoTeam, setPlayerOneTeam, setPlayerTwoTeam}) => {
    const [show, setShow] = useState(null)
    const [isVis, setIsVis] = useState(false)
    
    const { attack, attack_sprite, defense, hp, weapon, move, name, range, stationery_sprite_blue, stationery_sprite_red  /*, team, team_id, description, id */ } = UnitElement

    

    const showBlue = () => {
        setShow(true) 
        setIsVis(true)
        // console.log(`you selected ${name} for team blue`)
    }
    
    const showRed = () => {
        setShow(false) 
        setIsVis(true)
        // console.log(`you selected ${name} for team red`)
    }





    

return(
    <div className="flip-box">
        {/* onClick={handleClick }> */}
            <div className="flip-box-inner">
            <div className="flip-box-front">
                <h2>{name}</h2>
                <img
                src={attack_sprite} alt={name}/>
                    <div style={{display: isVis ? "block" : "none"}}>
                    {show ? <img src={stationery_sprite_blue} className="small-unit"/> : <img  src={stationery_sprite_red} className="small-unit"/>}
                    </div>
                </div>
                <div className="flip-box-back">
                    <p>attack: {attack}</p>
                    <p>defense: {defense}</p>
                    <p>hp: {hp}</p>
                    <p>move: {move}</p>
                    <p>weapon: {weapon}</p>
                    <p>range: {range}</p>
                    <button className="small-unit-btn" onClick={()=> {showBlue(); player1()}}> <img  src={stationery_sprite_blue}/> </button>
                    <button className="small-unit-btn" onClick={()=> {showRed(); player2()}}> <img  src={stationery_sprite_red}/> </button>
                    {/* <button className="small-unit-btn" onClick={()=> {setShow(true), setIsVis(true)}}> <img  src={stationery_sprite_blue}/> </button>
                    <button className="small-unit-btn" onClick={()=> {setShow(false), setIsVis(true)}}> <img  src={stationery_sprite_red}/> </button> */}
                </div> 
            </div>
        </div>
        
    )

}
export default UnitCards

