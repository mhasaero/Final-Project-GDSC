import { Board, Player } from "./types";
import { checkWinner } from "./helpers";

export class TicTacToeAgent {
  constructor(private player: Player = "O") {}

  getBestMove(board: Board): number {
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = this.player;
        let score = this.minimax(board, 0, false);
        board[i] = null;

        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }

    return bestMove;
  }

  private minimax(board: Board, depth: number, isMaximizing: boolean): number {
    const result = this.checkWinnerInternal(board);
    if (result !== null) {
      return result === this.player ? 10 - depth : depth - 10;
    }

    if (this.isBoardFull(board)) {
      return 0;
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = this.player;
          let score = this.minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = this.player === "X" ? "O" : "X";
          let score = this.minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  }

  private checkWinnerInternal(board: Board): Player {
    return checkWinner(board);
  }

  private isBoardFull(board: Board): boolean {
    return board.every((cell) => cell !== null);
  }
}
