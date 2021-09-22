// Desafio 9
function encode(String) {
  let splited;
  splited = String.split("");
  for (let index in splited) {
    switch (splited[index]) {
      case "a":
        splited[index] = 1;
        break;
      case "e":
        splited[index] = 2;
        break;
      case "i":
        splited[index] = 3;
        break;
      case "o":
        splited[index] = 4;
        break;
      case "u":
        splited[index] = 5;
        break;
      default:
        break;
    }
  }

  return splited.join("");
}
function decode(String) {
  let together;
  together = String.split("");
  for (let index in together) {
    switch (together[index]) {
      case "1":
        together[index] = "a";
        break;
      case "2":
        together[index] = "e";
        break;
      case "3":
        together[index] = "i";
        break;
      case "4":
        together[index] = "o";
        break;
      case "5":
        together[index] = "u";
        break;
      default:
        break;
    }
  }
  return together.join("");
}

// Desafio 10
function techList(arrayOfNames, name) {
  let listTech = [];
  arrayOfNames.sort();
  for (let index in arrayOfNames) {
    let object = {};
    object['tech'] = arrayOfNames[index];
    object['name'] = name;
    listTech.push(object);
  } if(listTech.length > 0) {
    return listTech;
  } else {
    return 'Vazio!';
} 
}

// Desafio 13
function hydrate(String) {
  let sum = 0;
  for(let index in String) {
    if(parseInt(String[index])) {
      sum += parseInt(String[index])
    } 
    } if(sum <= 1) {
      return sum + " copo de água";
    }
      return sum + " copos de água";
} console.log(hydrate("1 cerveja"));

module.exports = {
  encode,
  decode,
  techList,
  hydrate
}