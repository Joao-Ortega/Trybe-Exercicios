const randomNumber = () => Math.floor((Math.random() * 100) + 1);

const toUpperCase = (str) => str.toUpperCase();

const firstLetter = (str) => str[0];

const concatStrings = (str1, str2) => str1.concat(str2);

const fetchDoguinho = () => {
  return fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => resp.json()
      .then(data => resp.ok ? Promise.resolve(data) : Promise.reject(data))
  );
}

module.exports = { randomNumber, toUpperCase, firstLetter, concatStrings, fetchDoguinho };