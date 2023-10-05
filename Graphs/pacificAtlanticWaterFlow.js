// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean
// touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where
// heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west
// if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent
// to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow
// from cell (ri, ci) to both the Pacific and Atlantic oceans.

const pacificAtlantic = (heights) => {
  let result = [];
  let pacific = [];
  let atlantic = [];
  let rows = heights.length;
  let cols = heights[0].length;
  let directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let validBoundary = (x, y) => x >= 0 && x < rows && y >= 0 && y < cols;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r === 0 || c === 0) {
        pacific.push([r, c]);
      }
      if (r === rows - 1 || c === cols - 1) {
        atlantic.push([r, c]);
      }
    }
  }

  const bfs = (queue) => {
    let visited = Array(rows)
      .fill(false)
      .map((_) => new Array(cols).fill(false));
    while (queue.length) {
      let [x, y] = queue.shift();
      visited[x][y] = true;
      for (let [addX, addY] of directions) {
        let [newX, newY] = [x + addX, y + addY];
        if (
          !validBoundary(newX, newY) ||
          visited[newX][newY] ||
          heights[newX][newY] < heights[x][y]
        )
          continue;
        queue.push([newX, newY]);
      }
    }
    return visited;
  };

  let pacificFlow = bfs(pacific);
  let atlanticFlow = bfs(atlantic);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pacificFlow[r][c] && atlanticFlow[r][c]) {
        result.push([r, c]);
      }
    }
  }

  return result;
};
console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
