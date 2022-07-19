def input_sum(input):
    print(input)
    sum = 0
    for number in input:
        if number.isdigit():
            sum += int(number)
        else:
            print(f"Erro ao somar valores, {number} é um valor inválido")
    return sum


print(
    input_sum(
        input("Digite um ou mais números separados por espaços\n").split(" ")
    )
)