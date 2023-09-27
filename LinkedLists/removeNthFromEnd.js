// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Input: (head = [1, 2, 3, 4, 5]), (n = 2);
// Output: [1, 2, 3, 5];

const removeNthFromEnd = (head, n) => {
  let result = new ListNode(0, head);
  let slow = result;
  let fast = head;

  for (let i = 0; i < n; i++) {
    if (!fast) {
      return head;
    }
    fast = fast.next;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return result.next;
};

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));
