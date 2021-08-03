let arrayTest = [2, 4, 6, 7, 10, 0, -3];
function menorIndice (arrayTest) {
    let smallValue = 0
    for(let index in arrayTest) {
        if(arrayTest[index] < arrayTest[smallValue]) {
            smallValue = index;
        }
    }
    return smallValue;
} console.log(menorIndice(arrayTest));