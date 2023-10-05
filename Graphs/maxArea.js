// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally
// (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

const maxAreaOfIsland = (grid) => {
  // DFS Approach
  //   let result = 0;
  //   let row = grid.length;
  //   let col = grid[0].length;
  //   let visited = Array(row)
  //     .fill(false)
  //     .map((_) => new Array(col).fill(false));
  //   const dfs = (x, y) => {
  //     if (
  //       x < 0 ||
  //       y < 0 ||
  //       y >= col ||
  //       x >= row ||
  //       visited[x][y] ||
  //       grid[x][y] === 0
  //     )
  //       return 0;
  //     visited[x][y] = true;
  //     return 1 + dfs(x + 1, y) + dfs(x - 1, y) + dfs(x, y - 1) + dfs(x, y + 1);
  //   };
  //   for (let i = 0; i < row; i++) {
  //     for (let j = 0; j < col; j++) {
  //       if (grid[i][j] === 1 && !visited[i][j]) {
  //         result = Math.max(result, dfs(i, j));
  //         result += dfs(i, j);
  //       }
  //     }
  //   }
  //   return result;
  // BFS approach
  let result = 0;
  let rowSize = grid.length;
  let colSize = grid[0].length;
  let visited = Array(rowSize)
    .fill(false)
    .map((_) => new Array(colSize).fill(false));
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const bfs = (r, c) => {
    let queue = [[r, c]];
    visited[r][c] = true;
    let currentArea = 0;

    while (queue.length) {
      let [x, y] = queue.shift();
      currentArea++;
      for (let [addX, addY] of directions) {
        let [newX, newY] = [x + addX, y + addY];
        if (
          newX < 0 ||
          newY < 0 ||
          newX >= rowSize ||
          newY >= colSize ||
          visited[newX][newY] ||
          grid[newX][newY] !== 1
        )
          continue;
        queue.push([newX, newY]);
        visited[newX][newY] = true;
      }
    }
    return currentArea;
  };

  for (let r = 0; r < rowSize; r++) {
    for (let c = 0; c < colSize; c++) {
      if (grid[r][c] === 1 && !visited[r][c]) {
        result = Math.max(result, bfs(r, c));
      }
    }
  }

  return result;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
