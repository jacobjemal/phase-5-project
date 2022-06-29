
import {useEffect, useState} from 'react'
const GamePage = ({ p, currentPlayer, setCurrentPlayer, players, units, unitElement, gameElement, setPlayerOneTeam, playerOneTeam, playerTwoTeam }) => {
// const {id, attack, attack_sprite, defense, hp, weapon, move, name, range, stationery_sprite_blue, stationery_sprite_red  } = gameElement
  
  const [isVis, setIsVis] = useState(false)
  const [show, setShow] = useState(null)
  const [moveUnit, setMoveUnit] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [selectedSquare, setSelectedSquare] = useState('');
  // const [start, setStart] = useState([])
  // console.log('gameElement:', gameElement)
  // console.log('player1:', playerOneTeam)
  // console.log('player2:', playerTwoTeam)
        

  //   const handlePlayerClick = (e) => { 
  //     //onClick={() => {handleClick()}}
  //     // e.target.id

  //     console.log(e.target.id)
  // }
    
    const handleClick = (e) => { 
    //onClick={() => {handleClick()}}
    // e.target.id
      // if (selectedPlayer && selectedSquare) {
      //   setSelectedSquare([...selectedPlayer])
        console.log(e.target.id)
      // }  
}


let array = [];
for (let i = 0; i < 13; i++) {
for (let j = 0; j < 4; j++) {
  let chr = String.fromCharCode(97 + j);
  array.push({row: i, column: chr, unit: {}})
  // console.log(array)
}
}


    return ( 
      
      <div className="square-con" >

        {playerOneTeam.map((gameElement, index) => { 
          const {id, attack, attack_sprite, defense, hp, weapon, move, name, range, stationery_sprite_blue, stationery_sprite_red, position  } = gameElement


            // let alphaArray = ["b","c","d","e","f"]
            // let set = document.getElementById(`column=${alphaArray[index]} row=0`)
            // let img = document.createElement('img')
            // img.src = stationery_sprite_blue
            // set.append(img)
          
          // onClick=> {setSelectedPlayer(gameElement)};
          // onClick=> {setSelectedSquare(square)}
          
        return(
          <>
            <div  className="square" id='start' >  
              <img src={stationery_sprite_blue} className="game-unit"  />   
              </div> 
            </>
              )
              
            })}


            {
              array.map((e) => {
                return(
                  
                <div id={`column=${e.column} row=${e.row}`} className='square'  onClick={handleClick}> </div>
                  // <div data-column={e.column} data-row={e.row} className='square' ></div>
                )
              })
            }  

            {playerTwoTeam.map((gameElement, index2) => { 
            const {id, attack, attack_sprite, defense, hp, weapon, move, name, range, stationery_sprite_blue, stationery_sprite_red  } = gameElement
            
            
            // let betaArray = ["b","c","d","e","f"]
            // let set2 = document.getElementById(`column=${betaArray[index2]} row=9`)
            // let img2 = document.createElement('img')
            // img2.src = stationery_sprite_red
            // set2.append(img2)
            // console.log(set2)

            
            return(
              <>
            <div   className='square'>
              <img src={stationery_sprite_red} className="game-unit"/>   
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



