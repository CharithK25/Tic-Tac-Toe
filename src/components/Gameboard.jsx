import React from "react";
import { useState } from "react";
import Player from "./Player";
import App from "../App";



// const initialGameBoard = [
// [null, null, null],
// [null, null, null],
// [null, null, null]
// ]

const GameBoard = ({onSquareChange, board}) => { 

    // let gameBoard= initialGameBoard;

    // for (const turnss of turns ){
    // const {square, player} = turnss;
    // const {row, col}= square;
    // gameBoard[row][col] = player; 

    // }
// const [gameBoard, setGameBoard] = useState(initialGameBoard);
// const handleChange = (rowIndex, colIndex) =>{
//     setGameBoard((prevSymbol, handleSquare)=>{
//         const updateBoard = [...prevSymbol.map(insideArray => [...insideArray])];
//         updateBoard [rowIndex][colIndex] = activePlayerSymbol;
//         return updateBoard;
//     }
//     );
//     onSquareChange();
// }
return(
<>
<ol id ="game-board">
    {board.map((row, rowIndex) => (
    <li key ={rowIndex}>
<ol>
{row.map((playerSymbol, colIndex)=>(
<li key={colIndex}>
<button onClick= {() => onSquareChange(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
</li>
))}
</ol>
</li>
))}
</ol>
</>
);
};

export default GameBoard;