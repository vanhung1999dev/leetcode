/*
Given the root of a binary tree, invert the tree, and return its root.
*/
var invertTree = function (root) {
  if (!root) return null;
  const tempNode = root.left;
  root.left = root.right;
  root.right = tempNode;

  invertTree(root.left);
  invertTree(root.right);
  return root;
};
