const { distance, time } = require('./questions');

const avgSpeed = (d, t) => {
  return d / t;
}

const dist = distance();
const tm = time();

console.log(`The average speed is => ${Math.floor(avgSpeed(dist, tm))} m/s`);

module.exports = avgSpeed;