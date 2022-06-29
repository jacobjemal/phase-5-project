import UnitPage from "./UnitPage";





function Home() {
  return(
    <div>
      <h1>How to play</h1>
      <p className="p">
          Each team selects five units. Once ten units are selected, go to the map where the blue team can move their units then the red team. If your unit is touching the enemy unit you can attack, the one who defeats all the enemy units first wins
      </p>
        <UnitPage />
      {/* <Login /> */}
      {/* <SignUp />  */}
    </div>
  ) 
}
export default Home;
