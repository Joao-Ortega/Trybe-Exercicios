from abc import ABC, abstractmethod


class Active(ABC):
    @abstractmethod
    def acionar(self):
        pass


class Lights(Active):
    def __init__(self, alarm):
        self.alarm = alarm
        self.alarm.adicionar_rotinas(self)

    def acionar(self):
        print("Turning on Lights")


class Coffee(Active):
    def __init__(self, alarm):
        self.alarm = alarm
        self.alarm.adicionar_rotinas(self)

    def acionar(self):
        print("Burning coffee")


class Pc(Active):
    def __init__(self, alarm):
        self.alarm = alarm
        self.alarm.adicionar_rotinas(self)

    def acionar(self):
        print("Turning on Pc")


class Alarm:
    def __init__(self):
        self.__rotinas = []

    def adicionar_rotinas(self, rotina):
        self.__rotinas.append(rotina)

    def acionar_todas_rotinas(self):
        for rotina in self.__rotinas:
            rotina.acionar()

    def despertar(self):
        print("Som do alarme: Triiiiiiim, Triiiiiiim")
        self.acionar_todas_rotinas()


if __name__ == "__main__":
    alarme_manha = Alarm()
    Lights(alarme_manha)
    Coffee(alarme_manha)
    Pc(alarme_manha)

    alarme_manha.despertar()

    alarme_tarde = Alarm()
    Coffee(alarme_tarde)

    alarme_tarde.despertar()
