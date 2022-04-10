let input = "Aprovada";
function verifyAproval (input) {
    switch(input){
        case "Aprovada":
            console.log("Parabéns");
            break;
        case "Lista":
            console.log("Você está em nossa lista de espera");
            break;
        case "Reprovada":
            console.log("Infelizmente não foi dessa vez, tente novamente");
            break;
        default :
        console.log("Não se aplica");
            break;
    }
} console.log(verifyAproval(input));