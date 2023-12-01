const minDiceNumber = 1;
const maxDiceNumber = 6;
const attempstNumber = 3;

let player_1 = [];
let player_2 = [];
let attemptCounter = 0;

while(attemptCounter !== attempstNumber){
    player_1.push(getRandomIntInclusive(minDiceNumber, maxDiceNumber));
    player_2.push(getRandomIntInclusive(minDiceNumber, maxDiceNumber));
    attemptCounter++;
}

let resultPlayer_1 = player_1.reduce((sum, current) => sum + current, 0);
let resultPlayer_2 = player_2.reduce((sum, current) => sum + current, 0);

let message = (resultPlayer_1 > resultPlayer_2) ? 'Player_1 win!' :
  (resultPlayer_1 < resultPlayer_2) ? 'Player_2 win!' :
  'The draw!'; 

console.log(message);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}