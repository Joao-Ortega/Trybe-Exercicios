from collections.abc import Iterable, Iterator
from db_simulator import DbSimulator


class DatabaseIterable(Iterable):
    def __init__(self, db, query):
        self.db = db
        self.query = query
        self.current_page = 1

    def get_page(self, page):
        return self.db.get(self.query, page)

    def __next__(self):
        data = self.get_page(page=self.current_page)
        if not data:
            raise StopIteration()
        self.current_page += 1
        return data

    def __iter__(self):
        return DatabaseIterable(self.db, self.query)


# Primeiro instanciamos o ITERÁVEL
record_paginator = DatabaseIterable(DbSimulator(), "select * from person")


print(list(record_paginator))
# Em seguida podemos usar o for pra iterar
# Nesse momento o ITERADOR é criado implicitamente
for page in record_paginator:
    # faz algo com a pagina, que é uma lista de resultados
    for record in page:
        print(record["name"])
