
def reverse(str):
  return False


def assertEqual(a, b, desc):
  if (a == b):
    print('{} ... PASS'.format(desc))
  else:
    print('{desc} ... FAIL: {a} != {b}'.format(desc=desc, a=a, b=b))

s = 'jason'
assertEqual(reverse(s), 'nosaj', s)
s = ''
assertEqual(reverse(s), '', 'empty string')
s = 'a'
assertEqual(reverse(s), 'a', s)