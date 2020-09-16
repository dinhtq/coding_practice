"""
Amazon Fresh is running a promotion in which customers receive prizes for purchasing a secret combination of fruits. 
The combination will change each day, and the team running the promotion wants to use a code list to make it easy to 
change the combination. The code list contains groups of fruits. Both the order of the groups within the code list and 
the order of the fruits within the groups matter. However, between the groups of fruits, any number, 
and type of fruit is allowable. The term "anything" is used to allow for any type of fruit to appear in that location 
within the group.

Consider the following secret code list: [[apple, apple], [banana, anything, banana]]

Based on the above secret code list, a customer who made either of the following purchases would win the prize:
orange, apple, apple, banana, orange, banana
apple, apple, orange, orange, banana, apple, banana, banana

Write an algorithm to output 1 if the customer is a winner else output 0.
"""

def isCustomerWinner(codeList, shoppingCart):
  return False












def assertEqual(a, b, desc):
  if (a == b):
    print('{} ... PASS'.format(desc))
  else:
    print('{desc} ... FAIL: {a} != {b}'.format(desc=desc, a=a, b=b))


desc = 'winner'
codelist = [['apple', 'apple'], ['banana', 'anything', 'banana']]
shoppingCart = ['orange', 'apple', 'apple', 'banana', 'orange', 'banana']
assertEqual(isCustomerWinner(codelist, shoppingCart), 1, desc)

desc = 'not winner'
codelist = [['apple', 'apple'], ['banana', 'anything', 'banana']]
shoppingCart = ['banana', 'orange', 'banana', 'apple', 'apple']
assertEqual(isCustomerWinner(codelist, shoppingCart), 0, desc)

desc = 'not winner'
codelist = [['apple', 'apple'], ['banana', 'anything', 'banana']]
shoppingCart = ['apple', 'banana', 'apple', 'banana', 'orange', 'banana']
assertEqual(isCustomerWinner(codelist, shoppingCart), 0, desc)



"""
def isCustomerWinner(codeList, shoppingCart):
  if not codeList: return 1
  if not shoppingCart: return 0

  i, j = 0, 0

  while i < len(codeList) and j+len(codeList[i]) <= len(shoppingCart):
    match = True
    for k in range(len(codeList[i])):
      if codeList[i][k] != 'anything' and codeList[i][k] != shoppingCart[j+k]:
        match = False
        break

    if match:
      j += len(codeList[i])
      i += 1
    else:
      j += 1

  return i == len(codeList)

Use two pointers i and j respectively for an element in two given lists. 
For a specific code codelist[i], check the subarray with the same length of codelist[i] starting from j in shoppingcart.

O(MN) solution where M is the average number of items in each code group, and N is the number of items in the shopping cart
"""