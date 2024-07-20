import { useEffect, useState } from "react";
import { checkWinner } from "../../lib/Game/helpers";
import { TicTacToeAgent } from "../../lib/Game/tictacToeAgent";
import { Board, Player } from "../../lib/Game/types";
import GameBoard from "./GameBoard";

export default function TicTacToe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | "Draw" | null>(null);
  const [aiPlayer] = useState<TicTacToeAgent>(new TicTacToeAgent("O"));

  useEffect(() => {
    if (currentPlayer === "O" && !winner) {
      const timer = setTimeout(() => {
        const aiMove = aiPlayer.getBestMove([...board]);
        handleMove(aiMove);
      }, 200); // Delay AI move for better UX
      return () => clearTimeout(timer);
    }
  }, [currentPlayer, board, winner]);

  const handleMove = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (newBoard.every((cell) => cell !== null)) {
      setWinner("Draw");
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-2 mb-8">
        <GameBoard board={board} winner={winner} currentPlayer={currentPlayer} handleMove={handleMove} />
      </div>
      {winner && <div className="text-2xl mb-4 animate-bounce">{winner === "Draw" ? "It's a draw!" : `${winner} wins!`}</div>}
      {!winner && <div className="text-xl mb-4">Current player: {currentPlayer}</div>}
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300" onMouseDown={resetGame}>
        Reset Game
      </button>
    </>
  );
}
