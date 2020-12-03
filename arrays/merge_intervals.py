"""
You are given an array (list) of interval pairs as input where each interval has a start and end timestamp. 
The input array is sorted by starting timestamps. You are required to merge overlapping intervals and 
return a new output array.
[[10, 12], [12, 15]] => [[10, 15]]
"""






def merge_intervals(array):
  return False












arr = [[10, 12], [12, 15]]
print(merge_intervals(arr) == [[10, 15]])
arr = [[1, 5], [3, 7], [4, 6], [6, 8]]
print(merge_intervals(arr) == [[1, 8]])
arr = [[1, 5], [3, 1], [4, 6], [6, 8], [10, 12], [11, 15]]
print(merge_intervals(arr) == [[1, 8], [10, 15]])








""" solution

runtime O(n)
mem O(n)

def merge_intervals(array):
  if array is None or len(array) == 0:
    return None

  result = []
  result.append(array[0])

  for i in range(1, len(array)):
    lastIdxResult = len(result) - 1
    x0 = result[lastIdxResult][0]
    y0 = result[lastIdxResult][1]

    x1 = array[i][0]
    y1 = array[i][1]

    if y0 >= x1:
      result[lastIdxResult][1] = max(y0, y1)
    else:
      result.append([x1, y1])

  return result
"""