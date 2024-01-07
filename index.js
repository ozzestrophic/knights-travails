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

  const visited = new Set();

  while (q.length > 0) {
    const currentSeq = q.shift();
    console.log("looping seq", currentSeq);
    const currentSquare = currentSeq[currentSeq.length - 1];
    console.log("current square ", currentSquare);
    visited.add(currentSquare.toString());

    const square1Moves = createMoves(currentSquare);

    for (const move of square1Moves) {
      console.log("move is ", move);

      if (!visited.has(move.toString())) {
        q.push([...currentSeq, move]);
        console.log("looping ----");
      }

      if (move.toString() === square2.toString()) {
        currentSeq.push(square2);
        console.log(`found in ${currentSeq.length} moves`);
        console.log(currentSeq);
        return currentSeq;
      }
    }
  }
}

BFSsquares([0, 0], [1, 4]);

// const newArr = [12, [12]];
// newArr.push([...additions, [12, 12]]);

// console.table(newArr);
