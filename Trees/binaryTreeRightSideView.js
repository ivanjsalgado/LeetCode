// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes
// you can see ordered from top to bottom.

// Input: root = [1, 2, 3, null, 5, null, 4];
// Output: [1, 3, 4];

const rightSideView = (root) => {
  if (!root) return [];
  let queue = [root];
  let result = [];

  const bfs = () => {
    while (queue.length) {
      let rowSize = queue.length;
      let last = null;
      while (rowSize) {
        let current = queue.shift();
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
        last = current.val;
        rowSize--;
      }
      result.push(last);
    }
  };
  bfs();
  return result;
};
