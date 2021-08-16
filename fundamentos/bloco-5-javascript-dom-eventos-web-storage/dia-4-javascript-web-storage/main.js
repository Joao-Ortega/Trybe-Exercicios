// Primeiro botão
const main = document.getElementById('center');
const input = document.createElement('input');
main.appendChild(input);
input.className = 'input';
input.type = 'text';
// Nome do botão
const button = document.createElement('button');
button.innerText = '<-- Altere Cor de Fundo';
button.className = 'buttons background';
main.appendChild(button);

// Segundo botão
const input2 = document.createElement('input');
main.appendChild(input2);
input2.className = 'input';
input2.type = 'text';
// Nome do botão
const button2 = document.createElement('button');
button2.innerText = '<-- Altere Cor da Letra';
button2.className = 'buttons font-color';
main.appendChild(button2);

// Terceiro botão
const input3 = document.createElement('input');
main.appendChild(input3);
input3.className = 'input';
input3.type = 'number';
// Nome do botão
const button3 = document.createElement('button');
button3.innerText = '<-- Altere Tamanho da Fonte';
button3.className = 'buttons font-size';
main.appendChild(button3);

// Quarto botão
const input4 = document.createElement('input');
main.appendChild(input4);
input4.className = 'input';
// Nome do botão
const button4 = document.createElement('button');
button4.innerText = '<-- Altere Espaçamento';
button4.className = 'buttons font-height';
main.appendChild(button4);

// Quinto botão
const input5 = document.createElement('input');
main.appendChild(input5);
input5.className = 'input';
// Nome do botão
const button5 = document.createElement('button');
button5.innerText = '<-- Altere Tipo da Fonte';
button5.className = 'buttons font-family';
main.appendChild(button5);   
// Adicionando cor de fundo e também adicionando ao Local Storage
let corDeFundo = '';
button.onclick = function addToBackColorToLocal() {
    let color = input.value;
    localStorage.setItem('backGroundColor', color);
    corDeFundo = localStorage.getItem('backGroundColor');
    document.body.style.backgroundColor = corDeFundo;
};
// Colocando cor na letra e adicionando ao LocalStorage
let letterColor = '';
button2.onclick = function addLetterColorToLocal() {
    let color2 = input2.value;
    localStorage.setItem('fontColor', color2);
    letterColor = localStorage.getItem('fontColor');
    document.body.style.color = letterColor;
};
// Alterar tamanho da fonte e adicionar ao LocalStorage
let letterSize = '';
const words = document.getElementsByClassName("paragraphs");
button3.onclick = function addFontSizeToLocal() {
    let size = input3.value;
    localStorage.setItem('fontSize', size);
    letterSize = localStorage.getItem('fontSize');
    for(const index of words) {
        index.style.fontSize = letterSize + 'px';
    }
};
// Alterar espaçamento e adicionar ao LocalStorage
let spacing = '';
button4.onclick = function addLineHeigthToLocal() {
    let lineHeight = input4.value;
    localStorage.setItem('lineHeight', lineHeight);
    spacing = localStorage.getItem('lineHeight');
    for(const index of words) {
        index.style.lineHeight = spacing + 'px';
    }
};
// Alterar o tipo de fonte e adicionar ao LocalStorage
let font = '';
const all = document.getElementById('all');
button5.onclick = function addFontFamilyToLocal() {
    let fontStyle = input5.value;
    localStorage.setItem('fontFamily', fontStyle);
    font = localStorage.getItem('fontFamily');
    all.style.fontFamily = font;
};
// Ao carregar a página pega as informações do LocalStorage
window.onload = function inicialState() {
    if(localStorage.getItem('backGroundColor') !== null) {
        corDeFundo = localStorage.getItem('backGroundColor');
        document.body.style.backgroundColor = corDeFundo;
    }
    if(localStorage.getItem('fontColor') !== null) {
        letterColor = localStorage.getItem('fontColor');
    document.body.style.color = letterColor;
}
    if(localStorage.getItem('fontSize') !== null) {
        letterSize = localStorage.getItem('fontSize');
    for(const index of words) {
        index.style.fontSize = letterSize + 'px';
    }
    }
    if(localStorage.getItem('lineHeight') !== null) {
        spacing = localStorage.getItem('lineHeight');
    for(const index of words) {
        index.style.lineHeight = spacing + 'px';
    }
    }
    if(localStorage.getItem('fontFamily') !== null) {
        font = localStorage.getItem('fontFamily');
    all.style.fontFamily = font;
    }
}; 