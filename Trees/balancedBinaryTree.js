// Given a binary tree, determine if it is
// height-balanced

// Input: root = [3, 9, 20, null, null, 15, 7];
// Output: true;

const isBalanced = (root) => {
  const dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    if (Math.abs(left - right) > 1) return Infinity;
    return Math.max(left, right) + 1;
  };
  return dfs(root) === Infinity ? false : true;
};
