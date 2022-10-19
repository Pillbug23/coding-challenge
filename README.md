<img align="left" width="100px" height="100px" src="https://user-images.githubusercontent.com/12256205/162470824-d34c5fad-555e-498b-9ac9-ba86b6eb057a.png">

# SESO Coding Challenge: Log Sorting

<br>

## Solution

Initialize a heap as a way of storing and looking up data that must be ordered chronologically by date.

<br>

## Algorithm

Map each beginning entry from the log source by extracting date, msg and adding in id for lookup. Initialize heap and order entries by chronological date(earliest to latest). Iterate through heap for n sources. Retrieve next entry from same source as the beginning entry using id until source has been drained(no more entries). Move onto next source from our priority queue and begin iterating through its entries until empty.

<br>

## Packages
```

# Install Heap (priority queue, binary tree) data structure with builtin methods
npm i heap-js

```

<br>

## Runtime

Time: O(N * logk) where N is the cost of evaluating every date at each recursive
level and merging them together. We do this for the height of tree log k.

Space: O(logk) depth of the tree



