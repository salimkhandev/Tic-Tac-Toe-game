import React, { useState } from "react";
import 'animate.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <button
      className="w-20 h-20 bg-white shadow-md rounded-md text-4xl font-bold text-gray-800 focus:outline-none transition-transform transform hover:scale-105 animate__animated animate__fadeIn"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-600 animate__animated animate__fadeInDown">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-4">
        {board.map((_, index) => renderSquare(index))}
      </div>
      {winner ? (
        <div className="mt-6 text-2xl text-green-600 animate__animated animate__bounceIn">
          Winner: <span className="font-extrabold text-3xl">{winner}</span>
        </div>
      ) : (
        <div className="mt-6 text-2xl text-gray-700 animate__animated animate__fadeInUp">
          Next Player: <span className="font-bold text-3xl text-blue-600">{isXNext ? "X" : "O"}</span>
        </div>
      )}
      <button
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105 animate__animated animate__fadeIn"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default TicTacToe;
