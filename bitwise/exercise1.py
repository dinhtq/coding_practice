# exercise 1:
# Check if an integer is even or odd

def isEven(n):
  if n & 1 == 1:
    return False
  else:
    return True

print('Exercise 1:')
print(isEven(1) == False)
print(isEven(2) == True)
print(isEven(13336) == True)


# exercise 2:
# Check if two integers have opposite signs or not

def isOpposite(n1, n2):
  return ((n1 ^ n2) < 0)
  

print('Exercise 2:')
print(isOpposite(1, -2) == True)
print(isOpposite(-10, 59) == True)
print(isOpposite(-900, -700) == False)


# exercise 3:
# Add 1 to an integer

def add1(n):
  return -~n

print('Exercise 3:')
print(add1(1) == 2)
print(add1(9999) == 10000)

#Exercise 4:
# Swap two numbers without using a temporary variable


def swap(n1, n2):
  if n1 != n2:
    n1 = n1 ^ n2
    n2 = n1 ^ n2
    n1 = n1 ^ n2
  return [n1, n2]

print('Exercise 4:')
print(swap(1, 2) == [2, 1])
print(swap(30, -5) == [-5, 30])