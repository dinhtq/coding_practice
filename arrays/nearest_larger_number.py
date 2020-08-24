"""
Given an array of numbers and an index i, return the index of the nearest larger number of the number at index i, 
where distance is measured in array indices.

For example, given [4, 1, 3, 5, 6] and index 0, you should return 3.

If two distances to larger numbers are the equal, then return any one of them. 
If the array at i doesn't have a nearest larger integer, then return null.
"""

  
def nearest(arr, i):
  return False













def assertEqual(a, b, desc):
  if (a == b):
    print('{} ... PASS'.format(desc))
  else:
    print('{desc} ... FAIL: {a} != {b}'.format(desc=desc, a=a, b=b))


assertEqual(nearest([4, 1, 3, 5, 6], 0), 3, 'index at beginning')
assertEqual(nearest([4, 1, 3, 5, 6], 3), 4, 'index at middle')
assertEqual(nearest([2, 5, 3, 2, 4], 4), 1, 'index at end')


# O(n)
# def nearest(arr, i):
#   for j in range(1, len(arr)):
#     low = i - j
#     high = i + j
#     if 0 <= low and arr[low] > arr[i]:
#         return low
#     if high < len(arr) and arr[high] > arr[i]:
#         return high
