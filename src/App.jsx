import React, { useState } from "react";
import GameBoard from "./components/Gameboard";
import Player from "./components/Player";
import GameOver from "./components/GameOver";
import Logs from "./components/Logs";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
//Reducing state Management. Replacement for const [activePlayer, setactivePlayer]= useState('X');
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
  ]


const gameTurns = ( turn)=>{
  let currentPlayer = 'X';
  if (turn.length > 0 && turn[0].player === 'X')
  {
    currentPlayer = 'O';
  }
  return currentPlayer;
}
function App() {
  const[turn, setTurns] = useState([]);
  // const [activePlayer, setactivePlayer]= useState('X');

const activePlayer= gameTurns(turn);

let winner= null;
//Reason for creating a copy is when clicked on rematch the same array copies
//Arrays like obejjects in JS are reference values that means even if they are stored in different variables its storing the same memory
let gameBoard= [...initialGameBoard.map(array=>[...array])];  

    for (const turnss of turn ){
    const {square, player} = turnss;
    const {row, col}= square;
    gameBoard[row][col] = player; 

    }
for(const combination of WINNING_COMBINATIONS){

  const firstSquareSymbol= gameBoard[combination[0].row][combination[0].column];
  const secondSquareSymbol= gameBoard[combination[1].row][combination[1].column];
  const thirdSquareSymbol= gameBoard[combination[2].row][combination[2].column];
if(firstSquareSymbol && 
  firstSquareSymbol === secondSquareSymbol  &&
   firstSquareSymbol === thirdSquareSymbol){

winner= firstSquareSymbol;
}
}


let hasDraw = turn.length === 9 && !winner;



const handleSquare = (rowIndex, colIndex) =>{
    // setactivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O':'X' );
    setTurns((prevTurn) => {
//       let currentPlayer = 'X';
// if (prevTurn.length > 0 && prevTurn[0].player === 'X')

// {
//   currentPlayer = 'O';
// }

const currentPlayer= gameTurns(prevTurn);

const updateTurns =[{square : {row: rowIndex , col : colIndex} , player: currentPlayer }, ...prevTurn]
return updateTurns;
  });
}

const handleRestart = () =>{
  setTurns([]);
}

  return (

<main>
<div id ="game-container"> GAME BOARD
<ol id ="players" className = "highlight-player">
<Player initialName = "Player 1" symbol="X" isActive={activePlayer === 'X'} />
<Player initialName = "Player 2" symbol="O" isActive={activePlayer === 'O'} />
</ol>
{(winner || hasDraw) && <GameOver winner={winner} restart ={handleRestart} />}
<GameBoard onSquareChange = {handleSquare} board={gameBoard} />
</div>
<Logs turns={turn} />
</main>
  )
}

export default App
