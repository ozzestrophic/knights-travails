// class Square {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.moves = [];
//   }
//   calcMoves() {
//     this.x;
//   }
// }

function createSquares() {
  const array = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      array.push([i, j]);
    }
  }
  return array;
}

const squaresArray = createSquares();

const additions = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

function addMovesToSquares(square, addition) {
  return [square[0] + addition[0], square[1] + addition[1]];
}

function createMoves(square) {
  const moves = [];

  for (const addition of additions) {
    const move = addMovesToSquares(square, addition);
    if (move[0] > -1 && move[1] > -1 && move[0] < 8 && move[1] < 8) {
      moves.push(move);
    }
  }
  return moves;
}

function BFSsquares(square1, square2) {
  const q = [[square1]];

  while (q.length > 0) {
    const currentSeq = q.shift();
    const currentSquare = currentSeq[currentSeq.length - 1];

    const visited = new Set();
    const square1Moves = createMoves(currentSquare);

    for (const move of square1Moves) {
      visited.add(move);
      if (!visited.has(move)) {
        console.log("adding");
        q.push([...currentSeq, move]);
      }
      if (move.toString() === square2.toString()) {
        console.log("found");
      }
      console.log("q", q);
    }
    console.log("visited is ", visited);
  }
}

console.log(squaresArray);
BFSsquares([0, 0], [1, 3]);
