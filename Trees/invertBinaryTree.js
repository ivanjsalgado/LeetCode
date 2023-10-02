// Given the root of a binary tree, invert the tree, and return its root.

// Input: root = [2, 1, 3];
// Output: [2, 3, 1];

const invertTree = (root) => {
  if (!root) return root;
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  [root.right, root.left] = [left, right];
  return root;
};
