
"""
Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  
It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  
Words in the paragraph are not case sensitive.  The answer is in lowercase.

Input: 
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.

 


"""

def mostCommonWord(paragraph, banned):
  """
  :type paragraph: str
  :type banned: List[str]
  :rtype: str
  """
  














def assertEqual(a, b, desc):
  if (a == b):
    print('{} ... PASS'.format(desc))
  else:
    print('{desc} ... FAIL: {a} != {b}'.format(desc=desc, a=a, b=b))


desc = 'has most common word'
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
assertEqual(mostCommonWord(paragraph, banned), 'ball', desc)



"""
def mostCommonWord(paragraph, banned):
  #1). replace the punctuations with spaces,
  #      and put all letters in lower case
  normalized_str = ''.join([c.lower() if c.isalnum() else ' ' for c in paragraph])

  #2). split the string into words
  words = normalized_str.split()

  word_count = dict()
  banned_words = set(banned)

  #3). count the appearance of each word, excluding the banned words
  for word in words:
      if word not in banned_words:
        word_count[word] = 1 if word not in word_count else word_count[word] + 1

  #4). return the word with the highest frequency
  return max(word_count.items(), key = lambda x: x[1])[0]


Complexity Analysis

Let NN be the number of characters in the input string and MM be the number of characters in the banned list.

Time Complexity: \mathcal{O}(N + M)O(N+M).

It would take \mathcal{O}(N)O(N) time to process each stage of the pipeline as we built.

In addition, we built a set out of the list of banned words, which would take \mathcal{O}(M)O(M) time.

Hence, the overall time complexity of the algorithm is \mathcal{O}(N + M)O(N+M).

Space Complexity: \mathcal{O}(N + M)O(N+M).

We built a hashmap to count the frequency of each unique word, whose space would be of \mathcal{O}(N)O(N).

Similarly, we built a set out of the banned word list, which would consume additional \mathcal{O}(M)O(M) space.

Therefore, the overall space complexity of the algorithm is \mathcal{O}(N + M)O(N+M).
"""


"""
