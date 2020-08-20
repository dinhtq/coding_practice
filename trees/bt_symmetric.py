
class Node:
  def __init__(self, data):
    self.left = None
    self.right = None
    self.data = data


def isBTSymmetric(root):  
  return False











def assertEqual(a, b, desc):
  if (a == b):
    print('{} ... PASS'.format(desc))
  else:
    print('{desc} ... FAIL: {a} != {b}'.format(desc=desc, a=a, b=b))



desc = 'single node - should be symmetric'
root = Node(4)
assertEqual(isBTSymmetric(root), True, desc)

desc = 'shallow BT - should be symmetric'
root = Node(4)
root.left = Node(3)
root.right = Node(3)
root.left.left = Node(9)
root.left.right = Node(5)
root.right.left = Node(5)
root.right.right = Node(9)
assertEqual(isBTSymmetric(root), True, desc)

desc = 'shallow BT - not symmetric'
root = Node(4)
root.left = Node(3)
root.right = Node(3)
root.left.left = Node(9)
root.left.right = Node(5)
root.right.left = Node(2)
root.right.right = Node(9)
assertEqual(isBTSymmetric(root), False, desc)