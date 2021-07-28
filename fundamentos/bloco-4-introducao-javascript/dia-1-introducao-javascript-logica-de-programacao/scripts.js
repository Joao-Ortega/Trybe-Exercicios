let state='reprovada';

switch (state) {
    case "aprovada":
        console.log("Parabéns!");
        break;
    case "lista":
        console.log("Espere em nossa lista");
        break;
    case "reprovada":
        console.log("Não desista e tente novamente");
        break;
    default:
        console.log("não se aplica");
}