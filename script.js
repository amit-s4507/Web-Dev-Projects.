let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}



function validateGuess(guess) {
  if(isNaN(guess)){
    alert('Please Enter avalid Number')
  }
  else if( guess < 1 || guess >100){
    alert('Please Enter a valid number between 1 and 100')
  }
  else{
    prevGuess.push(guess);
    if(numGuess == 11){
        displayGuess(guess)
        displayMessage(`Game Over !!  Random Number was ${randomNumber}`)
        endGame();
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumber){
    displayMessage(`Congratulations!! You Guessed it in ${numGuess} guesses`)
    endGame();
  }
  else if(guess > randomNumber){
    displayMessage('Too High');
  }
  else if(guess < randomNumber){
    displayMessage('Too Low');
  }
}

function displayGuess(guess) {
  userInput.value = ''
}

function displayMessage(message) {
  
}

function endGame() {

}

function newGame() {
 
 
}