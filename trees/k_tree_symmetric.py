
class Node:
  def __init__(self, data):
    self.children = None
    self.value = data


def isSymmetric(root):
  return False






















def assertEqual(a, b, desc):
  if (a == b):
    print('{} ... PASS'.format(desc))
  else:
    print('{desc} ... FAIL: {a} != {b}'.format(desc=desc, a=a, b=b))



desc = 'single node - should be symmetric'
root = Node(4)
assertEqual(isSymmetric(root, root), True, desc)

desc = 'shallow BT - should be symmetric'
middleNodeLeft = Node(3)
middleNodeLeft.children = [Node(9), Node(4), Node(1)]
middleNodeRight = Node(3)
middleNodeRight.children = [Node(1), Node(4), Node(9)]
root = Node(4)
root.children = [middleNodeLeft, middleNodeRight]
assertEqual(isSymmetric(root, root), True, desc)

desc = 'shallow BT - not symmetric'
middleNodeLeft = Node(3)
middleNodeLeft.children = [Node(9), Node(4), Node(1)]
middleNodeRight = Node(3)
middleNodeRight.children = [Node(1), Node(5), Node(9)]
root = Node(4)
root.children = [middleNodeLeft, middleNodeRight]
assertEqual(isSymmetric(root, root), False, desc)







# recursive solution O(N) for both binary and k-nary trees, since either case we only
# examine each node once
"""
def isSymmetric(left, right):
  if left.value != right.value:
    return False
  if not left.children and not right.children:
    return True
  if len(left.children) != len(right.children):
    return False
  k = len(left.children)
  for i in range(k):
    if not isSymmetric(left.children[i], right.children[k - 1 - i]):
      return False

  return True
"""