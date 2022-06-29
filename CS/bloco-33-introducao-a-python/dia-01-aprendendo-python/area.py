PI = 3.14


def square(side):
    return side * side


def rectangle(length, width):
    return length * width


def circle(radius):
    return PI * radius * radius


if __name__ == "__main__":
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))
