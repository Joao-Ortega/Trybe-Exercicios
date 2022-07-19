ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"


class Log:
    def dispara_log(self, message):
        print(message)


class LogError:
    def __init__(self, log):
        self.log = log

    def treat_message(self, message):
        return f"\033[91m{message}\033[91m"

    def dispara_log_especifico(self, message):
        return self.log.dispara_log(self.treat_message(message))


class LogWarning:
    def __init__(self, log):
        self.log = log

    def treat_message(self, message):
        return f"\033[93m{message}\033[93m"

    def dispara_log_especifico(self, message):
        return self.log.dispara_log(self.treat_message(message))


class LogSuccess:
    def __init__(self, log):
        self.log = log

    def treat_message(self, message):
        return f"\033[92m{message}\033[92m"

    def dispara_log_especifico(self, message):
        return self.log.dispara_log(self.treat_message(message))


if __name__ == "__main__":
    default_log = Log()
    choose_log = input(
        "Selecione o tipo de log\n"
        "1 - LogError\n"
        "2 - LogWarning\n"
        "3 - LogSuccess\n"
    )
    msg = input("Qual mensagem vc quer passar? =>   ")

    if choose_log == "1":
        error = LogError(default_log)
        error.dispara_log_especifico(msg)
    elif choose_log == "2":
        warning = LogWarning(default_log)
        warning.dispara_log_especifico(msg)
    else:
        success = LogSuccess(default_log)
        success.dispara_log_especifico(msg)
