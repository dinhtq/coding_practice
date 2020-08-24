"""
Given a sorted (in ascending order) integer array nums of n elements and a target value, 
write a function to search target in nums. 
If target exists, then return its index, otherwise return -1.

Example:

input =>
  list = [-1,0,3,5,9,12], target = 9
output =>
  4
"""

def search(nums, target):
  return False
















def assertEqual(a, b, desc):
  if (a == b):
    print('{} ... PASS'.format(desc))
  else:
    print('{desc} ... FAIL: {a} != {b}'.format(desc=desc, a=a, b=b))

# tests
desc = 'has target'
_nums = [-1,0,3,5,9,12]
target = 9
assertEqual(search(_nums, target), 4, desc)

desc = 'no target'
_nums = [-1,0,3,5,9,12]
target = 2
assertEqual(search(_nums, target), -1, desc)









# def search(nums, target):
#   pivot = None
#   left = 0
#   right = len(nums) - 1

#   while(left <= right):
#     pivot = left + (right - left) // 2 #floor division
#     if nums[pivot] == target:
#       return pivot
#     if (target < nums[pivot]):
#       right = pivot - 1
#     else:
#       left = pivot + 1

#   return -1