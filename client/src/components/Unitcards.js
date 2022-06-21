import { useState } from "react"

const UnitCards = ({ unitElement, playerOneTeam, playerTwoTeam, setPlayerOneTeam, setPlayerTwoTeam }) => {
    const [show, setShow] = useState(null)
    const [isVis, setIsVis] = useState(false)
    
    const { attack, attack_sprite, defense, hp, weapon, move, name, range, stationery_sprite_blue, stationery_sprite_red  
        /*, team, team_id, description, id */ } = unitElement

    
    // this shows the color for the front when you click the back \\
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
    
    // this limits the amout of units you can select \\ 
    const player1 = () => {
        let blue2 = unitElement
        if ( playerOneTeam.length <= 4 ) {
            setPlayerOneTeam([...playerOneTeam, blue2])
        } else {
        alert('cant select anymore')
        // console.log('player1:', playerOneTeam)
    }
    // console.log('blue2:',blue2)
    }
    
    const player2 = () => {
        let red2 = unitElement
        if ( playerTwoTeam.length <= 4 ) {
            setPlayerTwoTeam([...playerTwoTeam, red2])
        } else {
            alert('cant select anymore')
            // console.log('player2:', playerTwoTeam)
        }
        // console.log("red2:", red2)
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

