const hiddenDice = document.querySelector('.dice');
hiddenDice.classList.add('hidden');
// Player 1 variables

let currScoreElOne = document.getElementById('current--0');
let currScoreVariableOne = 0;
let activePlayer1 = document.querySelector('.player--0');
let scoreOneEl = document.getElementById('score--0');
scoreOneVariable = 0;

// Player 2 variables
let currScoreElTwo = document.getElementById('current--1');
let currScoreVariableTwo = 0;
let activePlayer2 = document.querySelector('.player--1');
let scoreTwoEl = document.getElementById('score--1');
let scoreTwoVariable = 0;

// Change players
const changePlayer = function () {
  // document.getElementById(`current--${currPlayer}`).textContent = 0;
  currPlayer === 0 ? (currPlayer = 1) : (currPlayer = 0);
  activePlayer1.classList.toggle('player--active');
  activePlayer2.classList.toggle('player--active');
};

// Current player
let currPlayer = 0;

// Dice roll
document.querySelector('.btn--roll').addEventListener('click', function () {
  hiddenDice.classList.remove('hidden');
  let numRandom = Math.trunc(Math.random() * 6) + 1;
  let dicEl = (document.querySelector('.dice').src = `dice-${numRandom}.png`);

  // if main score is greater than 1000
  if (scoreOneVariable > 100 || scoreTwoVariable > 100) {
    numRandom = 0;

    if (numRandom === 0) {
      winner();
    }
  }

  //If the dice falls on another number other than 1
  if (numRandom !== 1) {
  }
  if (currPlayer === 0) {
    currScoreVariableOne += numRandom;
    currScoreElOne.textContent = currScoreVariableOne;
  } else {
    currScoreVariableTwo += numRandom;
    currScoreElTwo.textContent = currScoreVariableTwo;
  }

  // Otherwise if dice falls on 1, change player and reset current score
  if (numRandom === 1) {
    if (scoreOneVariable > 100 || scoreTwoVariable > 100) {
      numRandom = 0;
      hiddenDice.classList.add('hidden');
      console.log(numRandom);
      activePlayer2.classList.add('player--active');
    } else {
      currScoreVariableOne = 0;
      currScoreVariableTwo = 0;
      currScoreElOne.textContent = currScoreVariableOne;
      currScoreElTwo.textContent = currScoreVariableTwo;
      changePlayer();
    }
  }
});

// Winner announced
const winner = function () {
  hiddenDice.classList.add('hidden');
  numRandom = 0;
  if (scoreOneEl.textContent > 100) {
    console.log(currPlayer + ' is winner');
    activePlayer1.classList.add('player--winner');
    activePlayer2.classList.remove('player--active');
    currScoreVariableOne = 0;
    currScoreVariableTwo = 0;
    currScoreElOne.textContent = currScoreVariableOne;
    currScoreElTwo.textContent = currScoreVariableTwo;
  }
  if (scoreTwoEl.textContent > 100) {
    numRandom = 0;
    console.log(currPlayer + ' is winner');
    activePlayer2.classList.add('player--winner');
    activePlayer1.classList.remove('player--active');
    currScoreVariableOne = 0;
    currScoreVariableTwo = 0;
    currScoreElOne.textContent = currScoreVariableOne;
    currScoreElTwo.textContent = currScoreVariableTwo;
  }
};

// Hold the score and change players
document.querySelector('.btn--hold').addEventListener('click', function () {
  let numRandom = Math.trunc(Math.random * 6) + 1;
  if (scoreOneEl.textContent > 100 || scoreTwoEl.textContent > 100) {
    numRandom = 0;

    if (numRandom === 0) {
      activePlayer2.classList.remove('player--active');
      winner();
    }
  }

  if (numRandom === 1) {
    if (scoreOneVariable > 100 || scoreTwoVariable > 100) {
      numRandom = 0;

      if (numRandom === 0) {
        activePlayer2.classList.remove('player--active');
        winner();
      }
    } else {
      changePlayer();
    }
  }

  if (currPlayer === 0) {
    winner();
    scoreOneVariable += currScoreVariableOne;
    scoreOneEl.textContent = scoreOneVariable;
    currScoreVariableOne = 0;
    currScoreElOne.textContent = currScoreVariableOne;

    winner();
    changePlayer();
  } else {
    scoreTwoVariable += currScoreVariableTwo;
    scoreTwoEl.textContent = scoreTwoVariable;
    currScoreVariableTwo = 0;
    currScoreElTwo.textContent = currScoreVariableTwo;

    winner();
    changePlayer();
  }
});

// Reset game
document.querySelector('.btn--new').addEventListener('click', function () {
  scoreOneVariable = 0;
  scoreTwoVariable = 0;
  currScoreVariableOne = 0;
  currScoreVariableTwo = 0;
  scoreOneEl.textContent = scoreOneVariable;
  scoreTwoEl.textContent = scoreTwoVariable;
  currScoreElOne.textContent = currScoreVariableOne;
  currScoreElTwo.textContent = currScoreVariableTwo;
  numRandom = 0;
  currPlayer = 0;

  if (currPlayer === 0) {
    // console.log(currPlayer);
    activePlayer1.classList.remove('player--winner');
    activePlayer1.classList.add('player--active');
    activePlayer2.classList.remove('player--active');
    // winner();
  }
  if (currPlayer === 1) {
    // console.log(currPlayer);
    activePlayer1.classList.add('player--active');
    activePlayer2.classList.remove('player--winner');
  }
});
