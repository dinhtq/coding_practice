
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
  return False
  














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
in one go...

def mostCommonWord(paragraph, banned):
  banned_words = set(banned)
  ans = ""
  max_count = 0
  word_count = dict()
  word_buffer = []

  for p, char in enumerate(paragraph):
    print(p)
    #1). consume the characters in a word
    if char.isalnum():
      word_buffer.append(char.lower())
      if p != len(paragraph)-1:
        continue

    #2). at the end of one word or at the end of paragraph
    if len(word_buffer) > 0:
      word = "".join(word_buffer)
      if word not in banned_words:
        word_count[word] = 1 if word not in word_count else word_count[word] + 1
        if word_count[word] > max_count:
          max_count = word_count[word]
          ans = word
      # reset the buffer for the next word
      word_buffer = []

  return ans



Let NN be the number of characters in the input string and MM be the number of characters in the banned list.

Time Complexity: \mathcal{O}(N + M)O(N+M).

We traverse each character in the input string once and only once. At each iteration, it takes constant time to perform the operations, except the operation that we build a new string out of the buffer. Excluding the cost of string-building out of the iteration, we can consider the cost of iterations as \mathcal{O}(N)O(N).

If we combine all the string-building operations all together, in total it would take another \mathcal{O}(N)O(N) time.

In addition, we built a set out of the list of banned words, which would take \mathcal{O}(M)O(M) time.

Hence, the overall time complexity of the algorithm is \mathcal{O}(N) + \mathcal{O}(N) + \mathcal{O}(M) = \mathcal{O}(N + M)O(N)+O(N)+O(M)=O(N+M).

Space Complexity: \mathcal{O}(N + M)O(N+M).

We built a hashmap to count the frequency of each unique word, whose space would be of \mathcal{O}(N)O(N).

Similarly, we built a set out of the banned word list, which would consume additional \mathcal{O}(M)O(M) space.

Therefore, the overall space complexity of the algorithm is \mathcal{O}(N + M)O(N+M).
"""