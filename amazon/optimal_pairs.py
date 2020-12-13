"""

"""
import math

def getPairs(a, b, target):
  return













a = [[1, 2], [2, 4], [3, 6]]
b = [[1, 2]]
target = 7
expected = [[2, 1]]
print(getPairs(a, b, target) == expected)

a = [[1, 8], [2, 7], [3, 14]]
b = [[1, 5], [2, 10], [3, 14]]
target = 20
expected = [[3, 1]]
print(getPairs(a, b, target) == expected)


a = [[1, 8], [2, 15], [3, 9]]
b = [[1, 8], [2, 11], [3, 12]]
expected = [[1, 3], [3, 2]]
target = 20
print(getPairs(a, b, target) == expected)

a = [[1, 3], [2, 5], [3, 7], [4, 10]]
b = [[1, 2], [2, 3], [3, 4], [4, 5]]
target = 10
expected = [[2, 4], [3, 2]]
print(getPairs(a, b, target) == expected)

a = [[1, 8], [2, 7], [3, 14]]
b = [[1, 5], [2, 5], [3, 10], [4, 14]]
target = 20
expected = [[[3, 2], [3, 1]]]
print(getPairs(a, b, target))



""" Solution

import math

def getPairs(a, b, target):
  a.sort(key=lambda x: x[1])
  b.sort(key=lambda x: x[1])
  m = len(a)
  n = len(b)
  i = 0
  j = n - 1
  max = -math.inf
  result = []

  while i<m and j >= 0:
    sum = a[i][1] + b[j][1]

    if sum > target:
      j -= 1
    else:
      if max <= sum:
        if max < sum:
          max = sum
          result = []
        result.append([a[i][0], b[j][0]])
        # handle consecutive repeated numbers
        index = j-1
        while index >= 0 and b[index][1] == b[index + 1][1]:
          print('here')
          result.append([a[i][0], b[index][0]])
          index -= 1
      i += 1
  return result
"""
