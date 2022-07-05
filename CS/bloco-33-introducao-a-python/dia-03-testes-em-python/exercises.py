import csv


def fizz_buzz(n):
    if not isinstance(n, int):
        raise ValueError("Parameter nov valid, must be a number")
    final_list = []
    for number in range(1, n + 1):
        if number % 3 == 0 and number % 5 == 0:
            final_list.append("FizzBuzz")
        elif number % 5 == 0:
            final_list.append("Buzz")
        elif number % 3 == 0:
            final_list.append("Fizz")
        else:
            final_list.append(number)
    return final_list


def convert_expression(st):
    number = ""
    with open("numbers.csv", mode="r") as file:
        content = csv.reader(file)
        arr_code = list(content)
        for letter in st:
            if letter.isdigit() or letter == '-':
                number += letter
            for item in arr_code:
                if letter in item[0]:
                    number += item[1]
    return number


print(convert_expression("ORTEGA"))
