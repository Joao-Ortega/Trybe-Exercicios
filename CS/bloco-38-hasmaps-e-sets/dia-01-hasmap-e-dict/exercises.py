words = ["cat", "bt", "hat", "tree"]
chars = "atach"


def words_combinations(word_list, string):
    control_dict = {}
    answer = 0
    for letter in string:
        if letter in control_dict:
            control_dict[letter] += 1
        else:
            control_dict[letter] = 1

    for word in word_list:
        count_chars = {}
        for char in word:
            if char not in control_dict:
                print(f"palavra inválida pois {char} não existe")
                break
            if char not in count_chars:
                count_chars[char] = 1
            else:
                count_chars[char] += 1

                if count_chars[char] > control_dict[char]:
                    print("Desconsiderar também")
                    break
        else:
            print(f"Essa deu bom! {word}")
            answer += len(word)
    return answer


print(words_combinations(words, chars))
