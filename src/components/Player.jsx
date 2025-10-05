import React from "react";
import { useState } from "react";

const Player = ({initialName , symbol,isActive}) => {
    const [playerName, setPlayerName]= useState(initialName);
    const [editing, setEditing]= useState(false);

    const handleChange = (e)=>{
        setPlayerName(e.target.value);
    }
    const editFunction = () =>{
        setEditing((isediting) => !isediting);
    }
    
return(
<li className={isActive ? 'active': undefined}>
  <span className ="player">
{!editing && <span className="player-name">{playerName}</span>}
<span className="player-synbol">{symbol}</span>
{editing && <input type ="text" required value={playerName} onChange={handleChange}/>}
</span>
<button onClick={editFunction} > {editing ? 'Save' : 'Edit'}</button>
</li>
);
};

export default Player;