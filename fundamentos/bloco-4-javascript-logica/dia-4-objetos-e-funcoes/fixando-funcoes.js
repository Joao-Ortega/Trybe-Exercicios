const currentHour = 16;
function rightTime (currentHour){
if(currentHour >= 22) {
    console.log("Não deveríamos comer nada, é hora de dormir");
} else if(currentHour >= 18 && currentHour < 22) {
    console.log("Rango da noite, vamos jantar");
} else if(currentHour >= 14 && currentHour < 18) {
    console.log("Vamos fazer um bolo pro café");
} else if(currentHour >= 11 && currentHour < 14) {
    console.log("Hora do almoço");
} else if(currentHour >=4 && currentHour < 11) {
    console.log("Hmm, cheiro de café recém passado");
} else {
    console.log("Vá dormir");
}
}   console.log(rightTime(currentHour));