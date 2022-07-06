class Liquidificador:
    def __init__(self, cor, potencia, voltagem, preco):
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.preco = preco

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    def __str__(self):
        return f"""
            Liquidificador:
            Cor: {self.__cor}
            Potência: {self.__potencia}
        """


liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 500)
liquidificador_vermelho.ligar(1)
print("Esta ligado?", liquidificador_vermelho.esta_ligado())
# Esta ligado? True
liquidificador_vermelho.desligar()
print("Esta ligado?", liquidificador_vermelho.esta_ligado())
# Esta ligado? False
