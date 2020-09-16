"""
https://leetcode.com/problems/is-subsequence/

Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of 
the characters without disturbing the relative positions of the remaining characters. 
(ie, "ace" is a subsequence of "abcde" while "aec" is not).

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has 
its subsequence. In this scenario, how would you change your code?


"""



def isSubsequence(s, t):
  return False











def assertEqual(a, b, desc):
  if (a == b):
    print('{} ... PASS'.format(desc))
  else:
    print('{desc} ... FAIL: {a} != {b}'.format(desc=desc, a=a, b=b))


desc='is subsequence'
s='abc'
t='ahbgdc'
assertEqual(isSubsequence(s, t), True, desc)

desc='is NOT subsequence'
s='abc'
t='ahcdb'
assertEqual(isSubsequence(s, t), False, desc)

desc='is NOT subsequence'
s='axc'
t='ahbgdc'
assertEqual(isSubsequence(s, t), False, desc)


"""
def isSubsequence(s, t):
  if not len(s): return True
  if not len(t): return False

  iS, iT = 0, 0

  while iS < len(s) and iT < len(t):
    if (s[iS] == t[iT]):
      iS += 1

    iT += 1

  return iS == len(s)
"""


