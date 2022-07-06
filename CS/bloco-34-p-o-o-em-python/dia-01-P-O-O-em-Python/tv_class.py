class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume + 1 > 99:
            print(f"Volume máximo {self.__volume}")
        else:
            self.__volume += 1
            print(f"Volume: {self.__volume}")

    def diminuir_volume(self):
        if self.__volume - 1 < 0:
            print(f"Volume no mínimo: {self.__volume}")
        else:
            self.__volume -= 1
            print(f"Volume: {self.__volume}")

    def modificar_canal(self, canal):
        if not 1 <= canal <= 99:
            raise ValueError('Canal inexistente')
        else:
            self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
        print(f'Tv ligada? => {self.__ligada}')


tv_zinha = TV(60)

tv_zinha.ligar_desligar()

for raising in range(50):
    tv_zinha.aumentar_volume()

tv_zinha.modificar_canal(32)

tv_zinha.aumentar_volume()

for down in range(65):
    tv_zinha.diminuir_volume()

tv_zinha.ligar_desligar()
