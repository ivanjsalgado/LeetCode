// Input: (list1 = [1, 2, 4]), (list2 = [1, 3, 4]);
// Output: [1, 1, 2, 3, 4, 4];

const mergeTwoLists = (list1, list2) => {
  let dummy = new ListNode(null);
  let result = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      dummy.next = list1;
      list1 = list1.next;
    } else {
      dummy.next = list2;
      list2 = list2.next;
    }
    dummy = dummy.next;
  }

  list1 ? (dummy.next = list1) : (dummy.next = list2);

  return result.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
