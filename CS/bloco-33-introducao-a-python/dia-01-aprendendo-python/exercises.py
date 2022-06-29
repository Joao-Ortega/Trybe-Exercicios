# Exercise 01


def max_numb(a, b):
    if a > b:
        return a
    else:
        return b


print(max_numb(2, 8))

# Exercise 02
example_list = [5, 10, 8, 12]


def average(list):
    counter = 0
    for numb in list:
        counter += numb
    return counter / len(list)


print(average(example_list))


# Exercise 03
# def square_ast(n):
#     if n < 1:
#         return "Invalid Number"
#     else:
#         line = n * "*"
#         for lines in range(n):
#             print(line)
# Another Solution
def square_ast(n):
    if n < 1:
        return "Invalid Number"
    else:
        for lines in range(n):
            print(n * "*")


square_ast(5)


# Exercise 04
def biggest_name(list):
    bigger_name = ""
    for names in list:
        if len(names) > len(bigger_name):
            bigger_name = names
    return bigger_name


print(biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
# Exercise 05


def is_triangle(a, b, c):
    is_triangle = 'Is Triangle'
    if (a + b) > c:
        return is_triangle
    elif (b + c) > a:
        return is_triangle
    elif (c + a) > b:
        return is_triangle
    else:
        return 'Not triangle'


print(is_triangle(15, 26, 34))
