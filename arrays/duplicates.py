

def duplicate(lst):
  return False


















def assertEqual(a, b, desc):
  if (a == b):
    print('{} ... PASS'.format(desc))
  else:
    print('{desc} ... FAIL: {a} != {b}'.format(desc=desc, a=a, b=b))


desc = 'contains dups'
array = [1, 2, 3, 4, 5, 2]
assertEqual(duplicate(array), 2, desc)



"""
def duplicate(lst):
  i = 0
  while i < len(lst):
      if lst[i] != i:
          j = lst[i]
          print('j', j)
          if lst[j] == lst[i]:
              return j
          lst[i], lst[j] = lst[j], lst[i]
          print('lst[i]', lst[i])
          print('lst[j]', lst[j])
      else:
          i += 1
  raise IndexError('Malformed input.')

def duplicate(lst):
  n = len(lst) - 1
  return sum(lst) - (n * (n + 1) // 2)
"""