const promise = () => {
const myPromise = new Promise((resolve, reject) => {
  const arr = [];
  let result = 0;
  for (let i = 0; i < 10; i += 1) {
    let number = Math.floor(Math.random() * 130) + 1;
    arr.push(number * number);
    result = arr.reduce((acc, crr) => acc + crr);
    (result < 8000) ? resolve(result) : reject(result);
  }

})
myPromise
.then(oneBefore => [2, 3, 5, 10].map((value) => Math.round(oneBefore / value)))
.then(div => div.reduce((acc, elem) => acc + elem))
.then(msg => console.log(msg))
.catch(msg => console.log(`${msg} É mais de oito mil! Essa promise deve estar quebrada!`))
}

promise();




