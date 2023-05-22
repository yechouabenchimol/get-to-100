import React from 'react'
import PlayerDetails from "./playerDetails"
import RandomNum from "./randomNum"
import Scores from "./scores"
import Options from "./options"
import NumOfSteps from "./numOfSteps"
import PlayersScores from "./playersScores"



function Player(props){


    return (
    <div >
        <hr />
        <PlayerDetails name={props.name} />
        <RandomNum number={props.number} />
        <NumOfSteps steps={props.steps} />
        <Options number={props.number} changeNumber={props.changeNumber} newGame={props.newGame} outOfGame={props.outOfGame}
            currentPlayer={props.currentPlayer} currentScores={props.scores}
            currentSteps={props.steps} isPlay={props.isPlay} setmessage={props.setmessage}/>
        <Scores scores={props.scores} />
        <PlayersScores playersScores = {props.scores} name={props.name} message={props.message} />
    </div>
    ); 
}


export default Player;
