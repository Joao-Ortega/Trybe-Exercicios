class Conjunto:
    def __init__(self):
        self.conjunto = [False for i in range(1001)]

    def __str__(self):
        return str(self.conjunto)

    def add(self, item):
        if item < 0 or item > 1000:
            return None
        self.conjunto[item] = True

    def __contains__(self, item):
        return self.conjunto[item]

    def union(self, conjuntoB):
        new_conjunto = Conjunto()
        for index in range(1001):
            if self.conjunto[index] or conjuntoB.conjunto[index]:
                new_conjunto.add(index)
        return new_conjunto

    def intersection(self, conjuntoB):
        conjunto_intersection = Conjunto()
        for i, _item in enumerate(self.conjunto):
            if self.conjunto[i] and conjuntoB.conjunto[i]:
                conjunto_intersection.add(i)
                print(i)
        return conjunto_intersection

    def difference(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.conjunto[index] and not conjuntoB.conjunto[index]:
                new_conjunto.add(index)

        return new_conjunto

    def issubset(self, conjuntoB):
        for index in range(1001):
            if self.conjunto[index] and not conjuntoB.conjunto[index]:
                return False

        return True

    def issuperset(self, conjuntoB):
        for index in range(1001):
            if conjuntoB.conjunto[index] and not self.conjunto[index]:
                return False

        return True


if __name__ == "__main__":
    new_conjunto = Conjunto()
    new_conjunto.add(1)
    new_conjunto.add(2)
    new_conjunto.add(3)
    new_conjunto.add(1000)
    # print(0 in new_conjunto)

    conjuntoA = Conjunto()
    for i in range(1, 10):
        conjuntoA.add(i)
    conjuntoB = Conjunto()
    for i in range(10, 21):
        conjuntoB.add(i)
    # print(conjuntoA.union(conjuntoB))

    test1 = Conjunto()
    for i in [1, 2, 3]:
        test1.add(i)
    test2 = Conjunto()
    for i in [3, 4, 5]:
        test2.add(i)
    test1.intersection(test2)

estudantes = [1, 2, 3, 4, 5, 6, 7]
lista1_entregues = [1, 4, 7, 3]
lista2_entregues = [3, 1, 6]
lista1 = Conjunto()
lista2 = Conjunto()
for i in lista1_entregues:
    lista1.add(i)
for i in lista2_entregues:
    lista2.add(i)
