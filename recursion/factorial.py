
def factorial(n):
  return 1








def assertEquals(a, b, desc):
  if a == b:
    print(desc + '...PASS')
  else:
    print(desc + '...FAIL')
assertEquals(factorial(6), 6*5*4*3*2*1, 'n = 6')
assertEquals(factorial(7), 5040, 'n = 7')