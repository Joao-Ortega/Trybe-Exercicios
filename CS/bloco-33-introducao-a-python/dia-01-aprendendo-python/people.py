import area


PEOPLE_AT_CONCERT_SM = 2  # numero de pessoas
LENGTH = 240  # em metros
WIDTH = 45  # em metros
PEOPLE_AT_CONCERT = area.rectangle(LENGTH, WIDTH) // PEOPLE_AT_CONCERT_SM


print("Estão presentes no show aproximadamente", PEOPLE_AT_CONCERT, "pessoas")
