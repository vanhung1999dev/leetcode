/**
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 */

var removeElements = function (head, val) {
  while (head && head.val === val) {
    head = head.next;
  }

  let curr = head;
  while (curr !== null && curr.next !== null) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};
