const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

const TicTacToeGame = require("../LLD/TicTacToe/TicTacToeGame");

const ask = (query) => new Promise(resolve => rl.question(query, resolve));

const startTicTacToe = async () => {
  const player1 = await ask("Enter name for Player 1 (X): ");
  const player2 = await ask("Enter name for Player 2 (O): ");
  const sizeInput = await ask("Enter board size (default is 3): ");

  let size = parseInt(sizeInput);
  if (isNaN(size) || size < 3) size = 3;

  const game = new TicTacToeGame(player1, player2, size, ask);
  await game.startGame();

  rl.close();
};

startTicTacToe();