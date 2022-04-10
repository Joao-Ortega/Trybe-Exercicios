// O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?

// R: Códigos assíncronos são códigos que independem de outros para funcionar, ou seja, podem ser executados em tempos diferentes.

// Quando você tem que enfileirar várias callbacks , que problema surge?

// R: A chamada callbackHell, onde o número de funções só cresce fazendo o código ficar confuso e díficil de ser compreendido.

// Por que as Promises são uma forma de se resolver esse problema?

// R: Pois com promises podemos ter várias requisições ao mesmo tempo que não atrapalham o fluxo de outras funções.

// Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.

// R: Deve ser assíncrona, justamente pelo tempo de retorno não influenciar em outras funções.

// Dada a resposta anterior, o que é fetch e para que ele serve?

// R: fetch(), é uma requisição que usa a API para obter a resposta da outra aplicação, te retornando informações dessa aplicação que precisa ser tratada e reformatada para JSON.