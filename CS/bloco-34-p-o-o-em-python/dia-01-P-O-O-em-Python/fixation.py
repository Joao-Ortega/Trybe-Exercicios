class Person:
    def __init__(self, nome, idade):
        self.__nome = nome
        self.__idade = idade
        self.__compras = []

    def adiquirir_produtos(self, produto):
        self.__compras.append(produto)
        return f"""
          Parabéns {self.__nome} Compra realizada com sucesso
          Você comprou => {produto}
        """

    def compras(self):
        return self.__compras


pessoa = Person("Ortega", 24)
pessoa.adiquirir_produtos("Playstation 5")
print(pessoa.adiquirir_produtos('AirPods'))
print(pessoa.compras())
