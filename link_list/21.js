/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

var mergeTwoLists = function (list1, list2) {
  let dummyNode = new ListNode(0);
  let pointer = dummyNode;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      pointer.next = list1;
      list1 = list1.next;
    } else {
      pointer.next = list2;
      list2 = list2.next;
    }

    pointer = pointer.next;
  }

  if (list1 !== null) pointer.next = list1;
  if (list2 !== null) pointer.next = list2;

  return dummyNode.next;
};
