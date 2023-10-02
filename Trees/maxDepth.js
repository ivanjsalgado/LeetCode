// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the
// root node down to the farthest leaf node.

// Input: root = [3, 9, 20, null, null, 15, 7];
// Output: 3;

const maxDepth = (root) => {
  const dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    return Math.max(left, right) + 1;
  };
  return dfs(root);
};
