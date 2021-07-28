//Exercício número 1.
/*let a = 8;
let b = 7;
let resultadoSoma = a+b;
console.log(resultadoSoma);

let resultadoSubtracao = a-b;
console.log(resultadoSubtracao);

let resultadoMultiplicacao = a*b;
console.log(resultadoMultiplicacao);

let resultadoDivisao = a/b;
console.log(resultadoDivisao);

let resultadoModulo = a%b;
console.log(resultadoModulo);*/

//Exercício número 2.

/*let number1 = 51;
let number2 = 394;
if (number1 > number2) {
    console.log(number1);
}
else {
    console.log(number2);
}*/

//Exercício número 3.

/*let number1 = 276;
let number2 = 25;
let number3 = 971;
if(number1 > number2 && number1 > number3) {
    console.log(number1);
}
else if(number2 > number1 && number2 > number3) {
    console.log(number2);
}
else {
    console.log(number3);
}*/

//Exercício número 4.

/*let number = -5;
if(number > 0) {
    console.log("positive");
}
else if(number < 0){
    console.log("negative");
}
else {
    console.log("zero");
}*/

//Exercício número 5.

/*let angle1 = 58;
let angle2 = 26;
let angle3 = 96;
let somaDosAngle = angle1+angle2+angle3;
if(somaDosAngle == 180) {
    console.log(true);
} else if(somaDosAngle > 180 || somaDosAngle >= 0) {
    console.log(false);
} else {
    console.log("Error invalid value");
}*/

//Exercício número 6.

var xadrezPeca = (prompt("Digite uma peça de xadrez(pt-br)", ""));
if(xadrezPeca.toLowerCase() == "pawn") {
    console.log("Pawn -> Foward only 1 block, Diagonal if there's a piece to capture");
} else if(xadrezPeca.toLowerCase() == "rook") {
    console.log("Rook -> Foward vertically and horizontally many blocks as possible, stop if capture a piece");
} else if(xadrezPeca.toLowerCase() == "knight") {
    console.log("Knight -> Moves in 'L' of 4 blocks, in any direction, only capture if the piece is in the last block");
} else if(xadrezPeca.toLowerCase() == "bishop") {
    console.log("Bishop -> Moves in diagonally many blocks as possible, stop if capture a piece");
} else if(xadrezPeca.toLowerCase() == "queen") {
    console.log("Queen -> Moves many blocks as possible in any direction, stop if capture a piece.");
} else if(xadrezPeca.toLowerCase() == "king") {
    console.log("King -> Moves in any direction but just one block at time");
} else {
    console.log("Error invalid Piece")
}
