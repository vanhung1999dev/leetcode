# Step

- `step 1`: init an empty window at the beginning of the array
- `step 2`: window sliding
  - expand the window while possible/required
  - update best result with the new window
  - move window one step forward

```
# init empty window
begin = 0;
end = -1
condition_satisfied = false

while begin < n:
    # while the window should be expanded
    while end + 1 < n and not condition_satisfied:
        # expand window
        end += 1
        # update sum, count, etc
        update_window_aggregates()

    if condition_satisfied:
        update_result()
    # move window one step
    begin += 1

    # update after removing one element
    update_window_aggregates()
```
