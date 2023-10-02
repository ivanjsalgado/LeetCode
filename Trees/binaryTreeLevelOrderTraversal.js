// Given the root of a binary tree, return the level order traversal of its nodes' values.
// (i.e., from left to right, level by level).

// Input: root = [3, 9, 20, null, null, 15, 7];
// Output: [[3], [9, 20], [15, 7]];

const levelOrder = (root) => {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length) {
    let rowSize = queue.length;
    let row = [];
    while (rowSize) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      row.push(current.val);
      rowSize--;
    }
    result.push([...row]);
  }

  return result;
};
