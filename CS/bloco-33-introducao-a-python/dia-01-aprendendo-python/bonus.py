list = [5, 9, 3, -19, 70, 8, 100, 2, 35, 27]

# Bonus 01
def low_number(list):
    smallest = list[0]
    for numb in list:
        if smallest > numb:
            smallest = numb
    return smallest


print(low_number(list))


# Bonus 02
number = 5


def buildTriangle(n):
    ast = "*"
    if n > 1:
        for lines in range(1, n + 1):
            print(lines * ast)


buildTriangle(number)


# Bonus 03
numb_to_sum = 10


def sum_until_numb(n):
    sum = 0
    for numb in range(n + 1):
        sum += numb
    return sum


print(sum_until_numb(numb_to_sum))
