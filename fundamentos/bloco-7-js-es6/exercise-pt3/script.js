const button = document.querySelector('#click-btn');
const numberOfClicks = document.querySelector('#number-of-clicks');
let clicks = 0
const counter = () => {
  clicks += 1;
  numberOfClicks.innerHTML = clicks;
  if (clicks === 100) {
    alert(`Congratulations! Don't You have nothing to do in your life?`)
  } else if (clicks === 500) {
    alert(`OMG! Stop please!`);
  }  
}

button.addEventListener('click', counter);