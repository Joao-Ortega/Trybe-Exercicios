function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
//Exercício Número 01
  function addDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  let listaUl = document.getElementById("days");
  
  for(let index in dezDaysList) {
      let emptyLi = document.createElement("li");
      if(dezDaysList[index] === 24 | dezDaysList[index] === 31) {
        emptyLi.innerHTML = dezDaysList[index];
        emptyLi.className = "day holiday";
        listaUl.appendChild(emptyLi);
      } else if(dezDaysList[index] === 4 | dezDaysList[index] === 11 | dezDaysList[index] === 18) {
        emptyLi.innerHTML = dezDaysList[index];
        emptyLi.className = "day friday";
        listaUl.appendChild(emptyLi);
      } else if(dezDaysList[index] === 25) {
        emptyLi.innerHTML = dezDaysList[index];
        emptyLi.className = "day friday holiday";
        listaUl.appendChild(emptyLi);
      } else {
        emptyLi.innerHTML = dezDaysList[index];
        emptyLi.className = "day";
        listaUl.appendChild(emptyLi);
      }
  } 
} addDays();

//Exercício número 02

function createButton(String) {
    let button = document.createElement("button");
    button.innerText = String;
    button.id = "btn-holiday";
    let div = document.getElementsByClassName("buttons-container")[0];
    div.appendChild(button);
} createButton("Feriados");

//Exercício número 03

let botao = document.getElementById("btn-holiday");
let holidays = document.getElementsByClassName("holiday");
botao.addEventListener("click", changeHolidayColor);
let painted = false;
function changeHolidayColor() {
  if(painted === false) {
for(let index of holidays) {
    index.style.backgroundColor = "red";
    painted = true;
}
  } else {
    for(let index of holidays) {
    index.style.backgroundColor = "rgb(238, 238, 238)";
    painted = false;
  }
}
} 
//Exercício Número 04

function createFridayButton(String) {
  let button = document.createElement("button");
  button.innerText = String;
  button.id = "btn-friday";
  let div = document.getElementsByClassName("buttons-container")[0];
  div.appendChild(button);
} createFridayButton("Sexta-feira");

//Exercício Número 05

let fridayButton = document.getElementById("btn-friday");
let friday = document.getElementsByClassName("friday");
fridayButton.addEventListener("click", changeFridayText);
let normal = true;
function changeFridayText() {
  if(normal === true) {
for(let index of friday) {
    index.innerText = "It's Friday";
    normal = false;
}
  } else {
    let modifyNumbers = [4, 11, 18, 25];
    for(let index = 0; index < modifyNumbers.length; index += 1) {
    friday[index].innerText = modifyNumbers[index];
    normal = true;
  }
}
} 

//Exercício Número 06
let zoom = document.getElementById("days");
zoom.addEventListener("mouseover", zoomIn);
zoom.addEventListener("mouseout", zoomOut);

function zoomIn(event) {
  event.target.style.fontSize = "30px";
}
function zoomOut(event) {
  event.target.style.fontSize = "20px";
}

//Exercício Número 07
function addTasks(String) {
  let task = document.createElement("span");
  task.innerText = String;
  let fatherTask = document.querySelector(".my-tasks");
  fatherTask.appendChild(task);
} addTasks("Rever Conteúdo");

//Exercício Número 08
function subtitle(String) {
  let newDiv = document.createElement("div");
  newDiv.className = "task";
  newDiv.style.backgroundColor = String;
  let myTask = document.querySelector(".my-tasks");
  myTask.appendChild(newDiv);
} subtitle("green");

//Exercício Número 09
let myColor = document.querySelector(".task");
  myColor.addEventListener("click", addEvent);
  let selected = false;
function addEvent(event){
  if(selected === false) {
  event.target.className = "task selected";
  selected = true;
} else {
  event.target.className = "task";
  selected = false;
}
}

//Exercício Número 10
let paint = document.getElementById("days");
paint.addEventListener("click", addColor);
let actual = false;
function addColor(event) {
  if(actual === false) {
event.target.style.color = myColor.style.backgroundColor;
    actual = true;
} else {
  event.target.style.color = "rgb(119, 119, 119)";
  actual = false;
}
} 

//Exercício Número 11
let compromisso = document.getElementById("task-input");
compromisso.addEventListener("keypress", addComp);
function addComp(event) {
if(event.keyCode === 13) {
document.body.style.backgroundColor = "black";
}
}
let adicionar = document.getElementById("btn-add");
adicionar.addEventListener("click", click);
function click() {
  input()
}
compromisso.addEventListener("input", input);
function input() {
let createLi = document.createElement("li");
//Paramos com a função enter e clicar do botão pré-feitas e fazendo o 
} 
