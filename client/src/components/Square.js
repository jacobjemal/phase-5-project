function Square({element}){

   

    return(
    <div id={`column=${element.column} row=${element.row}`} className='square'  onClick={handleClick}> </div>
    )
}

export default Square