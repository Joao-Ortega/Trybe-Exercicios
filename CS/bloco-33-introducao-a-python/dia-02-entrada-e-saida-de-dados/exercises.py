# import random


# def vertical_inverted_ladder(word):
#     for removed_letters in range(len(word)):
#         for index in range(len(word) - removed_letters):
#             print(word[index], end="")
#         print()


# vertical_inverted_ladder("PEDRO")


# def game():
#     words = ["macarrão", "camarão", "caramujo"]
#     random_word = random.choice(words)
#     scrambled_word = "".join(random.sample(random_word, len(random_word)))
#     return [random_word, scrambled_word]


# random_word, scrambled = game()
# lista_palavras = input("Digite 3 palavras separadas por espaço =>  ").split(
#     " "
# )
# randome = random.choice(lista_palavras)
# scramble = "".join(random.sample(randome, len(randome)))

# for chances in range(3):
#     word = input(f"Adivinhe a palavra {scramble} ")
#     if word == randome:
#         print("Congrats")
#         break
import random

with open("palavrasFaceisParaOBreno.txt", mode="r") as file:
    content = file.read()
    lista = content.split("\n")
    pega_uma = random.choice(lista)
    embaralha = "".join(random.sample(pega_uma, len(pega_uma)))
    for chance in range(3):
        digitado = input(f"Adivinhe a palavra {embaralha}  ")
        if digitado == pega_uma:
            print("Mentira, impossível")
            break
    print(f'A palavra era {pega_uma}')
