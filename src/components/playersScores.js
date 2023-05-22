import React from "react"

function PlayersScores(props){

    return(
        <div>
            <h1>{props.name}'s scores  {'➡️'} {props.playersScores.map(score=> score + ' . ')}</h1>
            <p>{props.message}</p>
        </div>
    )
   
}
export default PlayersScores