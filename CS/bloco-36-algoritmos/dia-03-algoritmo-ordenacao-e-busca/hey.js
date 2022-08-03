const biggestNumber = (lista) => {
  if (lista.length === 1) {
    return lista[0]
  }
  if (lista[0] > lista[lista.length - 1]) {
    lista.pop()
    return biggestNumber(lista)
  } else {
    lista[0] = lista[lista.length - 1]
    lista.pop()
    return biggestNumber(lista)
  }
}


console.log(biggestNumber([115, 4, 666, 48, 20, 3300, 56, 642]));