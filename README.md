<img align="left" width="100px" height="100px" src="https://user-images.githubusercontent.com/12256205/162470824-d34c5fad-555e-498b-9ac9-ba86b6eb057a.png">

# SESO Coding Challenge: Log Sorting

<br>

## Solution

The problem is a bit confusing, I tried to first extract the logEntry content by mapping each LogSource and extracting the logEntry with .pop(). I used the .sort() method to sort the date property in chronological order(most recent to least). If our logEntry is not null we print the date and message using the provided .print() function.

<br>

## Algorithm
For the specific algorithm at play here I'm unable to implement it but I believe it is mergesort. We are given k sorted LogSources, each LogSource containing n LogEntries. For this specific algorithm we are given an array, and then run mergesort on the array.

1.) We divide the lists recursively until we each our base case.

[[8-30 -> 8-29],[8-27 -> 8-25...],[8-24 -> 8-22...],[8-21 -> 8-19...]]

[[8-30 -> 8-29],[8-27 -> 8-25...]]    [[8-24 -> 8-22...],[8-21 -> 8-19...]]

[8-30 -> 8-29]   [8-27 -> 8-25...]   [8-24 -> 8-22...]   [8-21 -> 8-19...]



2.) Merge the LogEntries in sorted order.

[8-30 -> 8-29]   [8-27 -> 8-25...]   [8-24 -> 8-22...]   [8-21 -> 8-19...]

[[8-30, 8-29, 8-27, 8-25]]    [[8-24,8-22,8-21,8-19]]

[[8-30, 8-29, 8-27, 8-25,8-24,8-22,8-21,8-19]]    


<br>

## Runtime

Time: O(N * logk) where N is the cost of evaluating every date at each recursive
level and merging them together. We do this for the height of tree log k.

Space: O(logk) depth of the tree



