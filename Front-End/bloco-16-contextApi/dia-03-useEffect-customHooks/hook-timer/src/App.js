import React, { useEffect, useState } from 'react';
import './App.css';

let intervalID;

function App() {
  const [seconds, setSeconds] = useState(10);
  const [randomNumb, setRandomNumb] = useState(0);
  const [hit, setHit] = useState('');

  const startTime = () => {
    intervalID = setInterval(() => setSeconds((seconds) => seconds - 1), 1000);
  }

  const showHit = () => {
    setHit('Acertou!!');
    setTimeout(() => {
      setHit('');
    }, 4000)
  }

  const checkMultiple = (numb) => {
    numb % 3 === 0 || numb % 5 === 0 ? showHit() : setHit('');
  }

  const generateRandom = () => {
    const num = Math.floor(Math.random() * 100 + 1);
    checkMultiple(num);
    setRandomNumb(num);
  }

  useEffect(() => {
    startTime();
  }, []);

  useEffect(() => {
    if (seconds < 1) {
      generateRandom();
      clearInterval(intervalID);
    };
  }, [seconds]);


  return (
    <div className="App">
     Timer
     <div>{ seconds }</div>
     <div>{`Your random Number: ${randomNumb}`}</div>
     <div>{ hit }</div>
    </div>
  );
}

export default App;
