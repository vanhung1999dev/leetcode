/**
 * Given the head of a singly linked list, return the middle node of the linked list.

   If there are two middle nodes, return the second middle node.
 */
var middleNode = function (head) {
  let size = 0;
  let curr = head;
  while (curr !== null) {
    size += 1;
    curr = curr.next;
  }
  const middleIndex = Math.floor(size / 2);

  let node = head;
  for (let i = 0; i < middleIndex; i++) {
    node = node.next;
  }
  return node;
};
