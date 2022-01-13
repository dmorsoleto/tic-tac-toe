import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [winner, setWinner] = useState(null);

  return (
    <div className="game">
      <div className="game-board">
        <Board winner={winner} onWinner={(wins)=>setWinner(wins)} />
      </div>
    </div>
  );
}

export default App;
