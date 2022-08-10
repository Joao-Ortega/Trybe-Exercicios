def best_combinations(arr):
    count_best_combinations = 0
    for el, _nb in enumerate(arr):
        for el2, _nb2 in enumerate(arr):
            if el > el2 and arr[el] == arr[el2]:
                count_best_combinations += 1
    return count_best_combinations


print(best_combinations([1, 1, 2, 3]))