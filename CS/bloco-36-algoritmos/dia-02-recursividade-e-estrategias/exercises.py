def count_evens(n):
    counter = 0
    for number in range(1, n + 1):
        if number % 2 == 0:
            counter += 1
    return counter


def count_evens_recursive(n):
    if n == 0:
        return n
    elif n % 2 == 0:
        return 1 + count_evens_recursive(n - 1)
    else:
        return count_evens_recursive(n - 1)


def biggest_number(list):
    if len(list) == 1:
        return list[0]
    if list[0] > list[len(list) - 1]:
        list.pop()
        return biggest_number(list)
    else:
        list[0] = list[len(list) - 1]
        list.pop()
        return biggest_number(list)


print(biggest_number([1, 200, 3, 50, 40, 110, 74, 300, 25, 95, 50]))
