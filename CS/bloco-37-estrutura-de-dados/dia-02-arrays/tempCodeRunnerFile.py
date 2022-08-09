def best_combinations(arr):
    count_best_combinations = 0
    for el in arr[1:]:
        for el2 in arr:
            if arr.index(el) > arr.index(el2):
                if arr[el] == arr[el2]:
                    count_best_combinations += 1
    return count_best_combinations


print(best_combinations([1, 3, 1, 1, 2, 3]))