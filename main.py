def runningSum(nums):
  sum = 0
  for i in range(len(nums)):
      sum = sum + nums[i]
      nums[i] = sum
  return nums

arr = [1, 2, 3, 4, 5]
runningSum(arr)
print(arr)