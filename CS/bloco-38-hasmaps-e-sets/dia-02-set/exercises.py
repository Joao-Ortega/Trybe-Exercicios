entrada = {"Clara": [0, 4, 7, 8, 9], "Marco": [3, 4, 6, 9, 10]}


def build_set(game):
    return set(game)


def build_points(set1, set2):
    reductor = min(set1.difference(set2))
    start_point = max(set1.difference(set2))
    return start_point - reductor


def sort_game(data):
    players = list(data.keys())

    game1 = build_set(data[players[0]])
    game2 = build_set(data[players[1]])

    points_player1 = build_points(game1, game2)
    points_player2 = build_points(game2, game1)

    if points_player1 > points_player2:
        print(f"Player {players[0]} won")
    elif points_player2 > points_player1:
        print(f"Player {players[1]} won")
    else:
        print("Draw")


# sort_game(entrada)


string = "serdevemuitolegalmasehprecisoestudarbastante"


def bigger_substring(string):
    new_set = set()
    word = ""
    bigger_sub = ""
    for char in string:
        if char not in new_set:
            new_set.add(char)
            word += char
        if char in new_set:
            if len(bigger_sub) < len(word):
                print(word, bigger_sub)
                bigger_sub = word
            new_set.clear()
            word = ""
            new_set.add(char)
            word += char
    return bigger_sub


# print(bigger_substring(string))


def longer_no_repeating_substring_len(string):
    biggest = 0
    for index, _ in enumerate(string):
        substr = set()
        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)
    return biggest


print(longer_no_repeating_substring_len(string))
