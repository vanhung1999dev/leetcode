```
*Introduction:*
  - 8 important patterns for coding interviews split into two categories:
    - *Linear structures:* arrays, linked lists, strings.
    - *Nonlinear structures:* trees, graphs.
  - Focus on pre-built code templates for these patterns.

- *Linear Data Structure Patterns:*
  1. *Two Pointers:*
     - Reduces time complexity to linear time \(O(n)\).
     - Two methods:
       - Same direction: used for scanning data in a single pass (e.g., fast and slow pointers to detect cycles or find middle elements).
       - Opposite directions: used for finding pairs (e.g., sum of two numbers in a sorted array).
  2. *Sliding Window:*
     - Refines two pointers to manage a window of elements dynamically.
     - Expands or contracts the window to meet specific conditions (e.g., longest substring without repeating characters).
     - Often combined with hashmaps.
  3. *Binary Search:*
     - Efficiently finds target in logarithmic time \(O(\log n)\).
     - Extends to lists with monotonic conditions, not just sorted numbers.
     - Example: finding the minimum in a rotated sorted array.

- *Nonlinear Data Structure Patterns:*
  4. *Breadth-First Search (BFS):*
     - Explores nodes level by level.
     - Uses a queue to keep track of visited nodes (ideal for level order traversal).
     - Dives deep into one path before exploring others.
     - Often uses recursion and is memory efficient for exploring all paths.
     - Example: counting islands in a grid.
  6. *Backtracking:*
     - Extension of DFS, explores all possible solutions.
     - Builds the solution dynamically by making decisions and backtracking on invalid paths.
     - Example: letter combinations of a phone number.

- *Heaps (Priority Queue):*
  7. *Heaps:*
     - Used for questions related to top K, K smallest/largest.
     - *Min Heap:* smallest value at the root.
     - *Max Heap:* largest value at the root.
     - Max Heap is used to find K smallest values, and vice versa for K largest.

- *Dynamic Programming (DP):*
  8. *Dynamic Programming:*
     - Optimizes solutions by breaking problems into overlapping subproblems.
     - Two approaches:
       - *Top-down:* recursive with memoization to store results.
       - *Bottom-up:* solves smaller subproblems iteratively using a table.
```

# Detail

![](./images/8ce15383-f7ab-4895-a89e-9e5d92c88833_2560x1440.webp)

# 1.Sliding Window

![](./images/8ce15383-f7ab-4895-a89e-9e5d92c88833_2560x1440.webp)

### When to use it?

- Linear data structures (arrays, lists, strings)

- Must scan through a subarray or substring

- When the subarray must satisfy some condition (shortest/longest/min/max)

- Improve time complexity from O(N^2) to O(N)

### Technique

In the sliding window, you have 2 pointers, i and j. Move j as far as you can until your condition is no longer valid, then move the i pointer closer to j until the condition is valid again to shrink the window. At every iteration, keep track of the min/max length of the subarray for the result. Without the sliding window technique, we would need to use a double for loop resulting in O(N^2) time. The sliding window is O(N) time complexity.

## Dynamic Sliding Window

![](./images/a0585c05-9160-4986-86f6-6376a18dcd21_2560x1440.webp)

<br>

In the dynamic sliding window, the size of the window (subarray between i and j) changes throughout the algorithm. In this example, we scan the subarray “bacb” and find that we have a duplicate “b”, so we will move the i pointer to shrink the window and move on to letter “a”, resulting in “acb”, then we start moving j again.

<br>

## Fixed Sliding Window

![](./images/a0585c05-9160-4986-86f6-6376a18dcd21_2560x1440.webp)

In the fixed sliding window, the size of the window is the same length throughout the algorithm. In this case, we need scan subarrays of length 3 for the final result, so we initialize i and j to indices 0 and 2 and at every iteration we increment i and j by 1.
<br>

## Coding Templates

```
"""
A generic template for dynamic sliding window finding min window length
"""
def shortest_window(nums, condition):
    i = 0
    min_length = float('inf')
    result = None

    for j in range(len(nums)):
        # Expand the window
        # Add nums[j] to the current window logic

        # Shrink window as long as the condition is met
        while condition():
            # Update the result if the current window is smaller
            if j - i + 1 < min_length:
                min_length = j - i + 1
                # Add business logic to update result

            # Shrink the window from the left
            # Remove nums[i] from the current window logic
            i += 1

    return result

"""
A generic template for dynamic sliding window finding max window length
"""
def longest_window(nums, condition):
    i = 0
    max_length = 0
    result = None

    for j in range(len(nums)):
        # Expand the window
        # Add nums[j] to the current window logic

        # Shrink the window if the condition is violated
        while not condition():
            # Shrink the window from the left
            # Remove nums[i] from the current window logic
            i += 1

        # Update the result if the current window is larger
        if j - i + 1 > max_length:
            max_length = j - i + 1
            # Add business logic to update result

    return result

"""
A generic template for sliding window of fixed size
"""
def window_fixed_size(nums, k):
    i = 0
    result = None

    for j in range(len(nums)):
        # Expand the window
        # Add nums[j] to the current window logic

        # Ensure window has size of K
        if (j - i + 1) < k:
            continue

        # Update Result
        # Remove nums[i] from window
        # increment i to maintain fixed window size of length k
        i += 1

    return result
```

## LeetCode Questions

- [longest-substring-without-repeating-characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)
- [longest-repeating-character-replacement](https://leetcode.com/problems/longest-repeating-character-replacement/description/)
- [substrings-of-size-three-with-distinct-characters](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/)
- [minimum-window-substring](https://leetcode.com/problems/minimum-window-substring/description/)

# 2. Two Pointers

![](./images/a0585c05-9160-4986-86f6-6376a18dcd21_2560x1440.webp)

## When to use it?

- Linear data structures (arrays, lists, strings)

- When you need to scan the start and end of a list

- When you have a sorted list and need to find pairs

- Removing duplicates or filtering

## Technique

Instead of scanning all possible subarrays or substrings, use two pointers i and j at the ends of a string or sorted array to be clever how you increment i or decrement j as you scan the input. This will lower your time complexity from O(N^2) to O(N). In the example above, to detect if a string is a palindrome we scan the ends of the string one character at a time. If the characters are equal, move i and j closer together. If they are not equal, the string is not a palindrome.

## Coding Templates

```
def two_pointer_template(input):
    # Initialize pointers
    i = 0
    j = len(input) - 1
    result = None

    # Iterate while pointers do not cross
    while i < j:
        # Process the elements at both pointers

        # Adjust the pointers based on specific conditions
        # i += 1 or j -= 1

        # Break or continue based on a condition if required

    # Return the final result or process output
    return result
```

## LeetCode Questions

- [valid-palindrome](https://leetcode.com/problems/valid-palindrome/description/)
- [3sum](https://leetcode.com/problems/3sum/description/)
- [container-with-most-water](https://leetcode.com/problems/container-with-most-water/description/)
