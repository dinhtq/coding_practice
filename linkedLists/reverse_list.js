/*
Write a function for reversing a linked list. ↴ Do it in place. ↴

Your function will have one input: the head of the list.

Your function should return the new head of the list.
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverse(head) {

}


















// Tests

let desc = 'short linked list';
let nodes = valuesToLinkedListNodes([1, 2]);
let reversedList = reverse(nodes[0]);
assertEquals(isListReversed(reversedList, nodes), true, desc);

desc = 'long linked list';
nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5, 6]);
reversedList = reverse(nodes[0]);
assertEquals(isListReversed(reversedList, nodes), true, desc);

desc = 'one element linked list';
const node = new LinkedListNode(1);
reversedList = reverse(node);
assertEquals(node.value === reversedList.value && node.next === reversedList.next, true, desc);

desc = 'empty linked list';
reversedList = reverse(null);
assertEquals(reversedList, null, desc);

function valuesToLinkedListNodes(values) {
  const nodes = [];
  for (let i = 0; i < values.length; i++) {
    const node = new LinkedListNode(values[i]);
    if (i > 0) {
      nodes[i - 1].next = node;
    }
    nodes.push(node);
  }
  return nodes;
}

function isListReversed(list, originalNodes) {
  let i = originalNodes.length - 1;
  while (list != null && i >= 0) {
    if (originalNodes[i] != list) {
      return false;
    }
    list = list.next;
    i--;
  }
  return list == null;
}

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}


// iterative solution
// function reverse(head) {

//   // Reverse the linked list in place

//   let prevNode = null;
//   let nextNode = null;

//   while(head) {
//     // assign next node
//     nextNode = head.next;

//     // point cur head to prev node
//     head.next = prevNode;

//     // re-assign prev node to cur head
//     prevNode = head;
//     // re-assign cur head to next node
//     head = nextNode;
//   }

//   return prevNode;
// }

// recursive solution
// function reverse(head) {
//   if (head === null || head.next === null) {
//     return head
//   }
//   const p = reverse(head.next)
//   head.next.next = head
//   head.next = null
//   return p
// }
