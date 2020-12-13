"""
This problem was asked by Bloomberg.

Determine whether there exists a one-to-one character mapping from one string s1 to another s2.

For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.

Given s1 = foo and s2 = bar, return false since the o cannot map to two characters.
"""

def mapping_exists(s1, s2):
  return


print(mapping_exists('abc', 'bcd') == True)
print(mapping_exists('foo', 'bar') == False)




""" Solution O(n) time and space



def mapping_exists(s1, s2):
  if len(s1) != len(s2):
    return False

  mapping = {}
  for char1, char2 in zip(s1, s2):
    if char1 not in mapping:
      mapping[char1] = char2
    elif mapping[char1] != char2:
      return False

  return True
"""