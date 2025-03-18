/*
Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
*/
var maxDepth = function (root) {
  if (!root) return 0;
  if (root.children.length === 0) return 1;

  let res = 0;
  for (let childNode of root.children) {
    res = Math.max(res, maxDepth(childNode));
  }

  return 1 + res;
};
