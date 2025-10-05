import React from "react";

const Logs = ({turns}) =>{
return(
    <ol id ="log">

        {turns.map((turnss)=>(
            <li key ={`${turnss.square.row}${turnss.square.col}`}>
                {turnss.player} selected {turnss.square.row},{turnss.square.col}

            </li>
        ))}
    </ol>


)
}


export default Logs