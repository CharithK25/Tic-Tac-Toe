import React from "react";

const GameOver =({winner, restart}) =>{
    return (
       <div  id = "game-over">
        <h2>GAME OVER!!!</h2>
        {winner && <p>{winner} Won!!!</p>}
        {!winner && <p>It's a Draw</p>}
<p>
    <button onClick ={restart}>REMATCH!!</button>
</p>

       </div>
    );
}

export default GameOver;