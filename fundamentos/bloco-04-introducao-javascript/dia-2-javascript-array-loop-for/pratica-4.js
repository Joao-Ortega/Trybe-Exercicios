let sumOfAll = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let average;

for(let index = 0; index < numbers.length; index +=1) {
sumOfAll = sumOfAll + numbers[index];
average = sumOfAll/numbers.length;
}
if(average > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}