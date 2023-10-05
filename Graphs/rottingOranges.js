// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange.
//  If this is impossible, return -1.

const orangesRotting = (grid) => {
  let time = 0;
  let oranges = 0;
  let rottenQueue = [];
  let rows = grid.length;
  let cols = grid[0].length;
  let validBoundary = (x, y) => x >= 0 && y >= 0 && x < rows && y < cols;
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        rottenQueue.push([r, c, 0]);
      }
      if (grid[r][c] === 1) oranges++;
    }
  }

  const bfs = (queue) => {
    while (queue.length) {
      let [x, y, mins] = queue.shift();
      if (grid[x][y] === 1) {
        grid[x][y] = 2;
        oranges--;
        time = mins;
      }

      for (let [addX, addY] of directions) {
        let [newX, newY] = [x + addX, y + addY];
        if (!validBoundary(newX, newY) || grid[newX][newY] !== 1) continue;
        queue.push([newX, newY, time + 1]);
      }
    }
  };

  bfs(rottenQueue);
  return oranges === 0 ? time : -1;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
