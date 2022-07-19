name = input("Digite seu nome para soletrarmos")

for letter in name:
    print(letter)


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


a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

head, *tail = (
    1,
    2,
    3,
)
print(head)  # saída: 1
print(tail)  # saída: [2, 3]


# escrita
file = open("arquivo.txt", mode="w")
file.write("Trybe S2")
file.close()

# leitura
file = open("arquivo.txt", mode="r")
content = file.read()
print(content)
file.close()  # não podemos esquecer de fechar o arquivo


file = open("arquivo.txt", mode="w")
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file.writelines(LINES)
file.close()

file = open("arquivo.txt", mode="r")
for line in file:
    print(line)
file.close()

# Tratamento de exceções
while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")


try:
    arquivo = open("arquivoxxxxx.txt", "r")
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("arquivo manipulado e fechado com sucesso")
    arquivo.close()
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")

# Gerenciando um contexto
with open("arquivo-python.txt", "w") as file:
    file.write("Michelle 27\n")
# como estamos fora do contexto, o arquivo foi fechado
print(file.closed)
