/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
*/

var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  // find the middle node
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse from middle node
  let prev = null;
  while (slow) {
    const nextPointer = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextPointer;
  }

  // compare left and right node
  let left = head;
  let right = prev;
  while (right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }

  return true;
};
