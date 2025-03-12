/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
*/

// Solution1: use HashTable - O(n) for both time and space
var hasCycle = function (head) {
  if (!head || !head.next) return false;

  let freq = new Set();
  while (head) {
    if (freq.has(head)) return true; // need to store node (not value) because value can be duplicate
    freq.add(head);
    head = head.next;
  }

  return false;
};

// use slow and fast pointer
var hasCycle = function (head) {
  if (!head || !head.next) return false;

  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // we need compare node (not primitive value)
      return true;
    }
  }
  return false;
};
