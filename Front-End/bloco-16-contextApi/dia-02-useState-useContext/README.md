Exercícios Realizados:

https://github.com/tryber/exercise-tryfood

Instruções
Hoje você trabalhará com o melhor aplicativo no ramo de entrega de comida de toda a internet, o try-food. No momento precisamos melhorar essa aplicação e centralizar os estados que são utilizados por vários componentes em um contexto. Performance é muito importante e a manutenção do código deve ser feita da melhor maneira possível. A equipe de engenharia começou a migrar tudo para Context API mas eles pararam para almoçar e você, que sabe que falta pouca coisa para fazer a aplicação funcionar, decidiu terminar a última função e colaborar com o resultado da equipe.

Você receberá um código que simula essa aplicação e precisará completar esse código para ver a aplicação em funcionamento. A parte mais importante é treinar manipulação de estados dentro do arquivo src/context/MyProvider.js, onde a função handleChange está vazia. Devido a função handleChange estar vazia, sua aplicação estará quebrada, e portanto, a página Order.js não está recebendo o MyProvider.js com os estados da aplicação, fazendo com sua ramificação (filhos) também não receba o contexto com os estados.

Dica: Header.js, Cart.js e Options.js são componentes renderizados pela página Order.js e todos utilizam o contexto da aplicação

Analise o código da aplicação e pense como atualizar individualmente a lista de comida, bebida e sobremesa, que são arrays contidos no objeto orderList.