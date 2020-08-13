
"""
This problem was asked by Google.

Given a word W and a string S, find all starting indices in S which are anagrams of W.

For example, given that W is "ab", and S is "abxaba", return 0, 3, and 4.
"""




def findAnagram(word, str):
  return













w = 'ab'
s = 'abxaba'
indices = [0, 3, 4]
print('w: ' + w + ' s: ' + s + '....', findAnagram(w, s) == indices)

w = 'ag'
s = 'anagram'
indices = [2]
print('w: ' + w + ' s: ' + s + '....', findAnagram(w, s) == indices)

w = 'an'
s = 'anagram'
indices = [0, 1]
print('w: ' + w + ' s: ' + s + '....', findAnagram(w, s) == indices)

w = 'as'
s = 'anagram'
indices = []
print('w: ' + w + ' s: ' + s + '....no anagrams', findAnagram(w, s) == indices)














# brute force, O(w*s)
"""
def isAnagram(s1, s2):
  return Counter(s1) == Counter(s2)


def findAnagram(word, str):
  result = []
  for i in range(len(str) - len(word) + 1):
    window = s[i:i + len(word)]
    if isAnagram(window, word):
      result.append(i)
  return result
"""