/*
Given a singly linked list, determine if it is a palindrome.
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isPalindrome(head) {}


















// Tests
let desc = 'single middle node palindrome';
let head = new LinkedListNode(1);
appendToList(head, 2)
appendToList(head, 3)
appendToList(head, 2)
appendToList(head, 1)
assertEquals(isPalindrome(head), true, desc);

desc = 'double middle node palindrome';
head = new LinkedListNode(1);
appendToList(head, 2)
appendToList(head, 2)
appendToList(head, 1)
assertEquals(isPalindrome(head), true, desc);

desc = 'not palindrome';
head = new LinkedListNode(1);
appendToList(head, 2)
appendToList(head, 4)
appendToList(head, 1)
assertEquals(isPalindrome(head), false, desc);

function appendToList(head, value) {
  let tail = head;
  while(tail.next) {
    tail = tail.next;
  }
  tail.next = new LinkedListNode(value);
  return tail.next; 
}

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}


// iterative solution - O(n) runtime, O(n) space
// function isPalindrome(head) {
//   var slow = head
//   var stack = []
//   while(slow) {
//       stack.push(slow.val)
//       slow = slow.next
//   }

//   while(head) {
//       var i = stack.pop()
//       if (head.val !== i) {
//           return false
//       }
//       head = head.next
//   }
//   return true
// }
