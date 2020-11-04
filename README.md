# Coding Practice

#### Tips
1. Greedy Approach
2. Simplify, adapt and solve strategy
    * Can you solve a simpler version? i.e. if finding the second largest, can you solve for finding the largest?
3. Break things down into cases.
4. "Runners" techique
    * can be used to get O(1) space
    * "slow" and "fast" runners/pointers can be used to detect cycles
5. How to traverse sections of a string given:
    * for i in range(len(str) - len(word) + 1):
        window = s[i:i + len(word)]
6. How to iterate up to length of array/string then reset:
    * array[(idx - 1) % array.length]