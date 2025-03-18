/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
*/
var isMirror = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return (
    p.val === q.val && isMirror(p.left, q.right) && isMirror(p.right, q.left)
  );
};

var isSymmetric = function (root) {
  return isMirror(root.left, root.right);
};
