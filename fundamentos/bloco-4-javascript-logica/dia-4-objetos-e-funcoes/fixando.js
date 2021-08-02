const nota = -5;
function aprovedOrNot (nota) {
  if(nota >= 80){
    console.log('Parabéns, você foi aprovado(a)!');
  } else if(nota < 80 && nota >=60) {
      console.log('Você está na nossa lista de espera');
    } else {
      console.log('Você foi reprovado(a)');
    }
  }
console.log(aprovedOrNot(nota));

