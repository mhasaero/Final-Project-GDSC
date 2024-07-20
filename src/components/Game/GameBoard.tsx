import { Board, Player } from "../../lib/Game/types";

interface GridsProps {
  board: Board;
  winner: Player | "Draw";
  currentPlayer: Player;
  handleMove: (index: number) => void;
}

export default function GameBoard({ board, winner, currentPlayer, handleMove }: GridsProps) {
  return (
    <>
      {board.map((cell: any, index: any) => (
        <button
          key={index}
          className={`w-24 h-24 text-4xl font-bold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 ${cell ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"}`}
          onMouseDown={() => handleMove(index)}
          disabled={!!cell || !!winner || currentPlayer === "O"}
        >
          {cell}
        </button>
      ))}
    </>
  );
}
