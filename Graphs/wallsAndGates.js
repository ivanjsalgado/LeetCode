// You are given a m x n 2D grid initialized with these three possible values.

// -1 - A wall or an obstacle.
// 0 - A gate.
// INF - Infinity means an empty room. We use the value 2^31 - 1 = 2147483647 to represent INF as
// you may assume that the distance to a gate is less than 2147483647.
// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a Gate,
// that room should remain filled with INF

const wallsAndGates = (rooms) => {
  let empty = 2147483647;
  let rows = rooms.length;
  let cols = rooms[0].length;
  let validBoundary = (x, y) => x >= 0 && y >= 0 && x < rows && y < cols;
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let queue = [];

  const bfs = (queue) => {
    while (queue.length) {
      let [x, y] = queue.shift();
      for (let [addX, addY] of directions) {
        let [newX, newY] = [x + addX, y + addY];
        if (!validBoundary(newX, newY) || rooms[newX][newY] !== empty) continue;
        rooms[newX][newY] = rooms[x][y] + 1;
        queue.push([newX, newY]);
      }
    }
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rooms[r][c] === 0) queue.push([r, c]);
    }
  }

  bfs(queue);
  return rooms;
};

console.log(
  wallsAndGates([
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647],
  ])
);
