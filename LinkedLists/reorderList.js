// Input: head = [1, 2, 3, 4];
// Output: [1, 4, 2, 3];

const reorderList = (head) => {
  // Find middle of the list
  let [slow, fast] = [head, head];

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse middle

  let [previous, current, next] = [null, slow, null];

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  // Merge both lists

  let [list1, list2] = [head, previous];
  // Resetting next variable
  next = null;

  while (list2.next) {
    next = list1.next;
    list1.next = list2;
    list1 = next;

    next = list2.next;
    list2.next = list1;
    list2 = next;
  }
};

console.log(reorderList([1, 2, 3, 4]));
