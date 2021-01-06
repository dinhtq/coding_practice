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
7. Python modulo operator on negative numbers:
    * -5 % 4 = 3
8. Reverse Polish Notation
    *  Use stack; when encounter value, add to stack; when encounter operator, pop last two items as terms on operator, then push result onto stack
    *  Return last item in stack