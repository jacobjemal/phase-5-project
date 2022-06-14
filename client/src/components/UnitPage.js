import React, {useState, useEffect} from "react";
import GamePage from "./GamePage";
import UnitCards from "./Unitcards";


function UnitPage() {
const [units, setUnits] = useState([])
const [selectedUnit, setSelectedUnit] = useState(units[0])
// const [player1, setPlayer1] = useState([])
// const [player2, setPlayer2] = useState([])

      useEffect(() => {
        (async() => {
          let req = await fetch('/units')
          let res = await req.json()
          setUnits(res)
        })()
      }, [])
      console.log('units:', units)

    return (
        <div className="unit-page">
          <h1>UNITS</h1>
          <h5>hover for stats click to add to you'r team</h5>
        <div className="unit-grid">
        {units.map((element, i) => {
            return(
              <UnitCards key={i} element={element} setSelectedUnit={setSelectedUnit} />
              )
            })}
            <GamePage  />
          </div>
        </div>
      );
}
export default UnitPage;
