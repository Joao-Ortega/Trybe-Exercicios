import random


# def vertical_inverted_ladder(word):
#     for removed_letters in range(len(word)):
#         for index in range(len(word) - removed_letters):
#             print(word[index], end="")
#         print()


# vertical_inverted_ladder("PEDRO")


def game():
    words = ["macarrão", "camarão", "caramujo"]
    random_word = random.choice(words)
    scrambled_word = "".join(random.sample(random_word, len(random_word)))
    return {random_word, scrambled_word}


correct_word, scrambled = game()
for chances in range(3):
    word = input(f"Adivinhe a palavra {scrambled} ")
    if word == correct_word:
        print("Congrats")
        break
