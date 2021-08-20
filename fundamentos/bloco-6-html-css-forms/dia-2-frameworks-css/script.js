const selectDropDown = document.getElementById('allStates');
const submitButton = document.querySelector('#submitButton');
const allInputs = document.querySelectorAll('.inputs');
function createAllStateList() {
  const arrayState = [ 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',]; 
  for (let index of arrayState) {
    let tagOption = document.createElement('option');
    tagOption.innerText = index;
    selectDropDown.appendChild(tagOption);
  }
} createAllStateList();

function stopButton(e) {
  const event = e
  event.preventDefault();
  const div = document.createElement('div');
document.body.appendChild(div);
div.className = 'card-panel';
  for (let index of allInputs) {
    let newP = document.createElement('p');
    newP.innerText = index.getAttribute('name') +  index.value;
      div.appendChild(newP);
    }
  }
submitButton.addEventListener('click', stopButton);


