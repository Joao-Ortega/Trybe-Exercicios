def check_connection(array):
    repetitions = 1
    curr_repetitions = 0
    for index in range(len(array) - 1):
        if array[index] == array[index + 1]:
            repetitions += 1
        if repetitions > curr_repetitions and array[index] != array[index + 1]:
            curr_repetitions = repetitions
            repetitions = 1
    return curr_repetitions


print(check_connection([1, 1, 1, 1, 0, 0, 1, 1]))


def shuffle_card_array(arr):
    mid = len(arr) // 2
    shuffle_arr = []
    first_part = arr[:mid]
    second_part = arr[mid:]
    for i in range(mid):
        shuffle_arr.extend([first_part[i], second_part[i]])
    return shuffle_arr


print(shuffle_card_array([2, 6, 4, 5]))


def best_combinations(arr):
    count_best_combinations = 0
    for el, _nb in enumerate(arr):
        for el2, _nb2 in enumerate(arr):
            if el > el2 and arr[el] == arr[el2]:
                count_best_combinations += 1
    return count_best_combinations


print(best_combinations([1, 1, 2, 3]))
