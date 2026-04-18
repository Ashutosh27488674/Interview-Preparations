const PlayingPiece = require('./PlayingPiece/PlayingPiece');

class Board{
    size;
    board;
    constructor(size) {
        this.size = size;
        this.board = Array.from({ length: size }, () => Array(size).fill(null));
    }

    addPiece(row, col, piece) {
        if(this.board[row][col] != null) return false;
        this.board[row][col] = piece;
        return true;
    }
    
    getFreeCells() {
        let freeCells = [];
        for(let i=0; i<this.size; i++) {
            for(let j=0; j<this.size; j++) {
                if(this.board[i][j] == null) {
                    freeCells.push([i, j]);
                }
            }
        }
        return freeCells;
    }

    printBoard() {
        for(let i=0; i<this.size; i++) {
            let row = '';
            for(let j=0; j<this.size; j++) {
                row += this.board[i][j] ? ` ${this.board[i][j].pieceType} ` : '   ';
                if(j < this.size - 1) row += ' | ';
            }
            console.log(row);
            console.log('-'.repeat(row.length));
        }
    }
}

module.exports = Board;