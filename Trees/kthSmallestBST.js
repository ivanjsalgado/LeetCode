// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all
// the values of the nodes in the tree.

// Input: (root = [3, 1, 4, null, 2]), (k = 1);
// Output: 1;

const kthSmallest = (root, k) => {
  let stack = [];
  const dfs = (node) => {
    if (!node || stack.length >= k) return;
    dfs(node.left);
    stack.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return stack[k - 1];
};
