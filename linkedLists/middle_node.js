/*
  Given a non-empty, singly linked list with head node head, return a middle node of linked list.

  If there are two middle nodes, return the second middle node.
*/




class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function middleNode(head) {}

















// Tests
let desc = 'has one middle node';
let head = new LinkedListNode(1);
appendToList(head, 2);
appendToList(head, 3);
appendToList(head, 4);
appendToList(head, 5)

let node = middleNode(head);
assertEquals(node.value, 3, desc);

desc = 'has two middle nodes';
head = new LinkedListNode(1);
appendToList(head, 2);
appendToList(head, 3);
appendToList(head, 4);
appendToList(head, 5);
appendToList(head, 6);

node = middleNode(head);
assertEquals(node.value, 4, desc);


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
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}




// solution
// function middleNode(head) {
//   let slow = head
//   let fast = head
//   while(fast && fast.next) {
//     slow = slow.next
//     fast = fast.next.next
//   }
//   return slow
// }