const assertEquals = require('../utils/assertEquals')
/*

A cycle occurs when a node’s next points back to a previous node in the list. The linked list is no longer linear with a beginning and end—instead,
it cycles through a loop of nodes.

Write a function containsCycle() that takes the first node in a singly-linked list and returns a boolean indicating whether the list contains a cycle.

*/


class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


function containsCycle(firstNode) {}


















// Tests

let desc = 'linked list with no cycle';
let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
assertEquals(containsCycle(nodes[0]), false, desc);

desc = 'cycle loops to beginning';
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
nodes[3].next = nodes[0];
assertEquals(containsCycle(nodes[0]), true, desc);

desc = 'cycle loops to middle';
nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5]);
nodes[4].next = nodes[2];
assertEquals(containsCycle(nodes[0]), true, desc);

desc = 'two node cycle at end';
nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5]);
nodes[4].next = nodes[3];
assertEquals(containsCycle(nodes[0]), true, desc);

desc = 'empty list';
assertEquals(containsCycle(null), false, desc);

desc = 'one element linked list no cycle';
let firstNode = new LinkedListNode(1);
assertEquals(containsCycle(firstNode), false, desc);

desc = 'one element linked list cycle';
firstNode = new LinkedListNode(1);
firstNode.next = firstNode;
assertEquals(containsCycle(firstNode), true, desc);

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


// solution
// function containsCycle(firstNode) {

//   // Start both runners at the beginning
//   let slowRunner = firstNode;
//   let fastRunner = firstNode;

//   // Until we hit the end of the list
//   while (fastRunner && fastRunner.next) {
//     slowRunner = slowRunner.next;
//     fastRunner = fastRunner.next.next;

//     // Case: fastRunner is about to "lap" slowRunner
//     if (fastRunner === slowRunner) {
//       return true;
//     }
//   }

//   // Case: fastRunner hit the end of the list
//   return false;
// }
