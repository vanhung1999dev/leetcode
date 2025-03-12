/*
Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.
*/
var partition = function (head, x) {
  let lessHead = new ListNode(0);
  let greaterHead = new ListNode(0);

  let pointerLess = lessHead;
  let pointerGreater = greaterHead;

  while (head !== null) {
    if (head.val < x) {
      pointerLess.next = head; // point node
      pointerLess = pointerLess.next; // move to next node
    } else {
      pointerGreater.next = head;
      pointerGreater = pointerGreater.next;
    }

    head = head.next; // move to next node
  }

  pointerGreater.next = null;
  pointerLess.next = greaterHead.next;

  return lessHead.next;
};
