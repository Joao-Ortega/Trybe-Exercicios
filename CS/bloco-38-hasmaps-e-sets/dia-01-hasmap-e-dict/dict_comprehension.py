dict_comprehension = {x: x * 2 for x in range(3, 21)}
print(dict_comprehension)


def change_odds(dicti):
    for key in dicti.keys():
        if key % 2 != 0:
            dicti[key] = key * 3
    return dicti


print(change_odds(dict_comprehension))


def count_chars(word):
    dict_counter = {}
    for w in list(word):
        if w in dict_counter:
            dict_counter[w] += 1
        else:
            dict_counter[w] = 1
    return dict_counter


# print(count_chars("bbbbaaaacccaaaaaaddddddddccccccc"))
