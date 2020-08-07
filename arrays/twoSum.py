"""
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
"""

from bisect import bisect_left


def two_sum(lst, K):
  return False




















def assertEqual(a, b, desc):
  if (a == b):
    print('{} ... PASS'.format(desc))
  else:
    print('{desc} ... FAIL: {a} != {b}'.format(desc=desc, a=a, b=b))

# tests
desc = 'true non empty list'
myList = [10, 2, 3, 7]
k = 17
assertEqual(two_sum(myList, k), True, desc)

desc = 'False non empty list'
myList = [10, 2, 3, 5]
k = 17
#assertEqual(two_sum(myList, k), False, desc)

desc = 'False - empty list'
myList = []
k = 17
#assertEqual(two_sum(myList, k), False, desc)



# O(n) runtime, O(n) space
"""
def two_sum(arr, k):
# map
seen = set()

for n in arr:
  if (k - n) in seen:
    return True
  seen.add(n)
return False
"""


# Onlog(n) runtime, O(1) space
"""
  print('lst: {}', lst)
  lst.sort()

  for i in range(len(lst)):
    target = K - lst[i]
    print('target: ' + str(target))
    j = binary_search(lst, target)

    # Check that binary search found the target and that it's not in the same index
    # as i. If it is in the same index, we can check lst[i + 1] and lst[i - 1] to see
    #  if there's another number that's the same value as lst[i].
    if j == -1:
        continue
    elif j != i:
        return True
    elif j + 1 < len(lst) and lst[j + 1] == target:
        return True
    elif j - 1 >= 0 and lst[j - 1] == target:
        return True
  return False

def binary_search(lst, target):
    lo = 0
    hi = len(lst)
    print('lo, hi, target :', lo, hi, target)
    ind = bisect_left(lst, target, lo, hi)
    print('ind :{}', ind)

    if 0 <= ind < hi and lst[ind] == target:
        return ind
    return -1
"""