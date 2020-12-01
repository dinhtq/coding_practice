"""
Given an integer array, move all elements that are 0 to the left while maintaining the order of other 
elements in the array. The array has to be modified in-place.
"""



def move_zeroes(array):
  return False












arr = [10, 20, 0, 3, 0, 0, 5]
move_zeroes(arr)
print(arr == [0, 0, 0, 10, 20, 3, 5])









""" solution

def move_zeroes(array):
  if len(array) < 1:
    return

  lenA = len(array)
  writeIdx = lenA - 1
  readIdx = lenA - 1

  # swap write/read elements if read ele is not zero
  while readIdx >= 0:
    if array[readIdx] != 0:
      array[writeIdx] = array[readIdx]
      writeIdx -= 1

    readIdx -= 1

  # continue swapping write ele with zeroes
  while writeIdx >= 0:
    array[writeIdx] = 0
    writeIdx -= 1
"""