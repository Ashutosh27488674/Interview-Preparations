const Player = require("./Player");
const Board = require("./Board");
const PlayingPieceX = require("./PlayingPiece/PlayingPieceX");
const PlayingPieceO = require("./PlayingPiece/PlayingPieceO");

class TicTacToeGame {
  players = new Array();
  ask = null
  board;
  constructor(player1, player2, size = 3, ask) {
    //Initialize the board and players
    if(!player1 || !player2) {
        throw new Error("Both players must be provided");
    }
    this.ask = ask;

    this.board = new Board(size);
    let crossPiece = new PlayingPieceX();
    let circlePiece = new PlayingPieceO();
    this.players.push(new Player(player1, crossPiece));
    this.players.push(new Player(player2, circlePiece));
  }

  async startGame() {
    let gameOver = false;
    let currentPlayerIndex = 0;
    while (!gameOver) {
      let currentPlayer = this.players[currentPlayerIndex];
      let row, col;
      row = parseInt(await this.ask(`Player ${currentPlayer.name} (${currentPlayer.playingPiece.pieceType}), enter row (0-${this.board.size - 1}): `));
      col = parseInt(await this.ask(`Player ${currentPlayer.name} (${currentPlayer.playingPiece.pieceType}), enter column (0-${this.board.size - 1}): `));
      if (this.board.addPiece(row, col, currentPlayer.playingPiece)) {
        const freeCells = this.board.getFreeCells();
        if(freeCells.length === 0) {
            console.log("Game is a draw!");
            gameOver = true;
            return;
        }
        const winner = this.checkWinner(this.board.board);
        if (winner) {
          console.log(`Player ${currentPlayer.name} wins!`);
          gameOver = true;
          return;
        }
        
        this.board.printBoard();
        this.players.shift();
        this.players.push(currentPlayer);
      } else {
        console.log("Invalid move. Try again.");
      }
    }
  }

  checkWinner(board) {
    const n = board.length;

    // Check rows
    for (let i = 0; i < n; i++) {
      let first = board[i][0];
      if (first && board[i].every((cell) => cell === first)) {
        return first;
      }
    }

    // Check columns
    for (let j = 0; j < n; j++) {
      let first = board[0][j];
      if (first) {
        let win = true;
        for (let i = 0; i < n; i++) {
          if (board[i][j] !== first) {
            win = false;
            break;
          }
        }
        if (win) return first;
      }
    }

    // Check main diagonal
    let diag1 = board[0][0];
    if (diag1) {
      let win = true;
      for (let i = 0; i < n; i++) {
        if (board[i][i] !== diag1) {
          win = false;
          break;
        }
      }
      if (win) return diag1;
    }

    // Check anti-diagonal
    let diag2 = board[0][n - 1];
    if (diag2) {
      let win = true;
      for (let i = 0; i < n; i++) {
        if (board[i][n - 1 - i] !== diag2) {
          win = false;
          break;
        }
      }
      if (win) return diag2;
    }

    return null;
  }
}

module.exports = TicTacToeGame;