import { useState } from "react"


const UnitCards = ({element, playerOneTeam, playerTwoTeam, setPlayerOneTeam, setPlayerTwoTeam}) => {
    const [show, setShow] = useState(null)
    const [isVis, setIsVis] = useState(false)
    const {attack, attack_sprite, defense, hp, weapon, move, name, range, stationery_sprite_blue, stationery_sprite_red  /*, team, team_id, description, id */ } = element
    

    const showBlue = (b) => {
        setShow(true) 
        setIsVis(true)
        console.log(`you selected ${name} for team blue`)
    }
    
    const showRed = () => {
        setShow(false) 
        setIsVis(true)
        console.log(`you selected ${name} for team red`)
    }


    const player1 = () => {
        let blue2 = element
        // console.log('b2', b2)
        if ( playerOneTeam.length <= 4 ) {
            setPlayerOneTeam([...playerOneTeam, blue2])
        } else {
        alert('cant select anymore')
        console.log('player1:', playerOneTeam)
        }
    }
    
    const player2 = () => {
        let red2 = element
        // console.log('r2:', r2)
        if ( playerTwoTeam.length <= 4 ) {
            setPlayerTwoTeam([...playerTwoTeam, red2])
        } else {
            alert('cant select anymore')
            console.log('player2:', playerTwoTeam)
        }
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
                    <button className="small-unit-btn" onClick={()=> {showBlue(); player1()}} > <img  src={stationery_sprite_blue}/> </button>
                    <button className="small-unit-btn" onClick={()=> {showRed(); player2()}}> <img  src={stationery_sprite_red}/> </button>
                    {/* <button className="small-unit-btn" onClick={()=> {setShow(true), setIsVis(true)}}> <img  src={stationery_sprite_blue}/> </button>
                    <button className="small-unit-btn" onClick={()=> {setShow(false), setIsVis(true)}}> <img  src={stationery_sprite_red}/> </button> */}
                    
                </div> 
            </div>
        </div>
        
    )

}
export default UnitCards

