"""
This problem was asked by Palantir.

The ancient Egyptians used to express fractions as a sum of several terms where each numerator is one. 

For example, 4 / 13 can be represented as 1 / 4 + 1 / 18 + 1 / 468.

Create an algorithm to turn an ordinary fraction a / b, where a < b, into an Egyptian fraction.
"""

def fraction(a, b):
  return False


print(fraction(4, 13) == [4, 18, 468])
print(fraction(5, 121) == [25, 757, 763309, 873960180913, 1527612795642093385023488])




"""
It turns out that this problem can be solved with a greedy algorithm. If we keep increasing our denominator d, 
we will eventually find a fraction 1 / d that is less than a / b. 
Then, we can subtract this fraction from a / b and continue this process on the remainder.

We must be careful to use a subtraction method that keeps the numerator and denominator integers, 
so we don't run into floating point errors.


def subtract(x, y):
  a, b = x
  c, d = y
  return (a * d - b * c, b * d)

def fraction(a, b):
  denominators = []
  d = 1

  while a != 0:
    d += 1
    if (1 / d) <= (a / b):
      denominators.append(d)
      a, b = subtract((a, b), (1, d))
  
  return denominators
"""

"""
better solution


from math import ceil

def fraction(a, b):
  denominators = []

  while a != 0:
    denominators.append(ceil(b / a))
    a, b = (-b) % a, b * ceil(b / a)
  
  return denominators


"""