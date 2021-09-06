const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


 /* Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado; */
 let li = document.getElementsByTagName('li');
 for(let index of li) {
     index.addEventListener("click", changeClassTech);
 }
 function changeClassTech (event) {
     let noClass = document.querySelector(".tech");
     noClass.classList.remove("tech");
     event.target.className = "tech";
 }
/* 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso? */
 /* Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech'; */
let textInput = document.getElementById("input");
textInput.addEventListener("input", addText);
function addText() {
    for(let index of li) {
        if(index.className === "tech") {
            index.innerText = textInput.Value;
        }
    }
}
 /* Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página; */
let top3 = document.getElementById("mySpotrybefy");
top3.addEventListener("dblclick", redirect);
function redirect() {
top3 = window.location.href = 'https://joao-ortega.github.io/'; 
}
/* 1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo; */
/* 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo; */
top3.addEventListener("mouseenter", changeColor);
top3.addEventListener("mouseleave", changeColorBack);
function changeColor() {
    top3.style.color = "black";
}
function changeColorBack() {
    top3.style.color = "white";
}

/* Segue abaixo um exemplo do uso de event.target: */


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.