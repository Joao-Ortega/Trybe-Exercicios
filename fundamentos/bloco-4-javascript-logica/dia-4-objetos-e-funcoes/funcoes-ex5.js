let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "Sim",
  };
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: ['Christmas on Bear Mountain', 'Dells Four Color Comics #178'],
    nota: 'O último MacPatinhas',
    recorrente: "Sim",
  };
  for(let key in info) {
      if(key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
          console.log('Ambos são recorrentes');
      } else {
      console.log(info[key] + ' e ' + info2[key]);
  }
}
  
  
  
  
  /* console.log(info.personagem + ' e ' + info2.personagem);
  console.log(info.origem + ' e ' + info2.origem[0, 1]);
  console.log(info.nota + ' e ' + info2.nota);
  if(info.recorrente === info2.recorrente) {
      console.log('Ambos recorrentes');
  } */
      
  