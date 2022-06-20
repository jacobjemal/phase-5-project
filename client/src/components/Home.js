import UnitPage from "./UnitPage";
import GamePage from "./GamePage";
import React, {useState, useEffect} from "react";

// import { Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
// import NavBar from "./NavBar";


function Home() {
  // const [units, setUnits] = useState([])

  // useEffect(() => {
  //   (async() => {
  //     let req = await fetch('/units')
  //     let res = await req.json()
  //     setUnits(res)
  //   })()
  // }, [])

          

  return(
    <div>
      <h1>How to play</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat corporis, recusandae delectus, ab voluptatum voluptates, voluptatibus soluta rem sed id exercitationem nobis voluptatem sequi molestias excepturi inventore amet impedit modi!
      </p>

              <UnitPage />

      {/* <Login /> */}
      {/* <SignUp />  */}


    </div>
  ) 
}
export default Home;
