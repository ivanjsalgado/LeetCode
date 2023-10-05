const numIslands = (grid) => {
  // BFS Approach
  // let result = 0;
  // let row = grid.length;
  // let col = grid[0].length;
  // let directions = [
  //   [0, 1],
  //   [0, -1],
  //   [-1, 0],
  //   [1, 0],
  // ];
  // let queue = [];
  // let visitGrid = Array(row)
  //   .fill(false)
  //   .map((_) => new Array(col).fill(false));
  // const bfs = () => {
  //   while (queue.length) {
  //     let [x, y] = queue.shift();
  //     visitGrid[x][y] = true;
  //     for (let [addX, addY] of directions) {
  //       let [newX, newY] = [x + addX, y + addY];
  //       if (
  //         newX < 0 ||
  //         newY < 0 ||
  //         newX >= row ||
  //         newY >= col ||
  //         visitGrid[newX][newY]
  //       )
  //         continue;
  //       visitGrid[newX][newY] = true;
  //       queue.push([newX, newY]);
  //     }
  //   }
  // };
  // for (let i = 0; i < row; i++) {
  //   for (let j = 0; j < col; j++) {
  //     if (grid[i][j] === "1" && !visitGrid[i][j]) {
  //       queue.push([i, j]);
  //       bfs();
  //       result++;
  //     }
  //   }
  // }
  // return result;

  // DFS Approach

  let result = 0;
  let row = grid.length;
  let col = grid[0].length;

  const dfs = (x, y) => {
    if (x < 0 || y < 0 || y >= col || x >= row || grid[x][y] === "0") return;
    grid[x][y] = "0";
    dfs(x, y + 1);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x - 1, y);
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        result++;
      }
    }
  }

  return result;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
