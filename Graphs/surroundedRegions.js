// Given an m x n matrix board containing 'X' and 'O', capture all regions that are
// 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

const surrounded = (board) => {
  let rows = board.length;
  let cols = board[0].length;
  let visited = Array(rows)
    .fill(false)
    .map((_) => new Array(cols).fill(false));
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let validBoundary = (x, y) => x >= 0 && y >= 0 && x < rows && y < cols;

  const bfs = (i, j) => {
    let queue = [[i, j]];
    visited[i][j] = true;
    while (queue.length) {
      let [x, y] = queue.shift();
      board[x][y] = "T";
      for (let [addX, addY] of directions) {
        let [newX, newY] = [x + addX, y + addY];
        if (
          !validBoundary(newX, newY) ||
          visited[newX][newY] ||
          board[newX][newY] !== "O"
        )
          continue;
        queue.push([newX, newY]);
        visited[newX][newY] = true;
      }
    }
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (
        (r === rows - 1 || r === 0 || c === cols - 1 || c === 0) &&
        board[r][c] === "O"
      ) {
        bfs(r, c);
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      board[r][c] === "T" ? (board[r][c] = "O") : (board[r][c] = "X");
    }
  }
};

console.log(
  surrounded([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);
