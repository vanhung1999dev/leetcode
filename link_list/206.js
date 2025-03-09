/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

var reverseList = function (head) {
  let reversed = null;
  let curr = head;

  while (curr !== null) {
    const nextNode = curr.next;
    curr.next = reversed;
    reversed = curr;
    curr = nextNode;
  }

  return reversed;
};
