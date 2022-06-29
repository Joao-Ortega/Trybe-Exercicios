number = 5


def buildTriangle(n):
    ast = "*"
    if n > 1:
        for lines in range(1, n + 1):
            print(lines * ast)


buildTriangle(number)