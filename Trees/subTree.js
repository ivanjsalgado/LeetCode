// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same
// structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants.
// The tree tree could also be considered as a subtree of itself.

// Input: (root = [3, 4, 5, 1, 2]), (subRoot = [4, 1, 2]);
// Output: true;

const isSubtree = (root, subRoot) => {
  if (!subRoot) return true;
  if (!root) return false;
  const isSameTree = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  };
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
