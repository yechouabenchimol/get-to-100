
import React from "react"
import '../App.css';

function StartGame(props){

    const startGame = ()=>{
        props.setIsPlay(1);
    }

    const newNumbersIn = () => {
        props.newNumbers();
    }

    let message = (!props.isPlay)? <button onClick={startGame}>start game</button>:<button onClick={newNumbersIn}>new game</button> ;

    return (
        <div>
            {message}
        </div>
    )
}



export default StartGame