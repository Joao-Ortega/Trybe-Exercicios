import math


class Estatistica:
    def media(self, list):
        result = 0
        for numbers in list:
            result += numbers
        print(result // len(list))

    def moda(self, list):
        most_frequent = 0
        comparison = 0
        frequence = 0
        for numb in list:
            for compare in list:
                if numb == compare:
                    frequence += 1
            if frequence > comparison:
                comparison = frequence
                most_frequent = numb
                frequence = 0
            else:
                frequence = 0
        print(most_frequent)

    def mediana(self, list):
        size = len(list)
        mediana_result = 0
        list.sort()
        if size % 2 == 0:
            result = size // 2
            mediana_result = list[result - 1], list[result]
            print(mediana_result)
        else:
            print(list[math.ceil(size / 2) - 1])


estati = Estatistica()

arr_moda = [35, 37, 36, 34, 38, 35, 37, 37, 33, 36, 38, 37,35, 37, 34, 33, 37, 36, 35, 38, 36, 35, 36, 37, 38, 39, 37, 37, 36, 37, 33, 37, 35, 37, 39]
estati.moda(arr_moda)

arr_mediana_odd = [1.79, 1.72, 1.63, 1.82, 1.65, 1.75, 1.80]
arr_mediana_even = [1, 2, 2, 3, 6, 10, 15, 16, 16, 20]
estati.mediana(arr_mediana_odd)
estati.mediana(arr_mediana_even)

arr_media = [28, 30, 29, 31, 32, 33, 34]
estati.media(arr_media)
