
class LinkedNode:
  def __init__(self, val, next=None):
    self.val = val
    self.next = next
  
def reverseList(head):
  return


# test
def appendToList(head, val):
  tail = head
  while(tail.next is not None):
    tail = tail.next
  tail.next = LinkedNode(val)
  return tail.next

def assertEqual(a, b, desc):
  if (a == b):
    print('{} ... PASS'.format(desc))
  else:
    print('{desc} ... FAIL: {a} != {b}'.format(desc=desc, a=a, b=b))

desc = 'single item list'
head1 = LinkedNode(1)
assertEqual(reverseList(head1), head1, desc)

desc = 'empty list'
head1 = None
assertEqual(reverseList(head1), head1, desc)

desc = 'short list'
head1 = LinkedNode(1)
appendToList(head1, 2)
expectedHead = appendToList(head1, 3)
assertEqual(reverseList(head1), expectedHead, desc)

desc = 'long list'
head1 = LinkedNode(1)
appendToList(head1, 2)
appendToList(head1, 3)
appendToList(head1, 4)
appendToList(head1, 5)
expectedHead = appendToList(head1, 6)
assertEqual(reverseList(head1), expectedHead, desc)
