def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f"Array 1: {number1}")
        for number2 in array2:
            print(f"Array 2: {number2}")
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


def complexity_to_the_third_power(arr1, arr2, arr3):
    number_multiplied = []
    number_of_iteration = 0
    for n1 in arr1:
        for n2 in arr2:
            for n3 in arr3:
                number_multiplied.append(n1 * n2 * n3)
                number_of_iteration += 1
    print("Iterações", number_of_iteration)


meu_array = [1, 2, 3, 4, 5]

complexity_to_the_third_power(meu_array, meu_array, meu_array)
