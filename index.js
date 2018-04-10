var inquirer = require('inquirer');
var Word = require('./lib/Word');
var words = ['Superman', 'Batman'];
var ranWord;
var guessesLeft;


function promptRestart() {
  inquirer.prompt({
    name: 'restart',
    message: 'Play again?',
    type: 'rawlist',
    choices: ['Yes', 'No']
  }).then(function(answer) {
    if ( answer.restart == 'Yes' ) {
      startGame();
    } else {
      console.log('Thanks for playing!');
    }
  }); 
}


function showResult(is_winner) {
  if ( is_winner ) {
    console.log('You guessed it!\n');
  } else {
    console.log('Game Over....\n');
  }

  promptRestart();
}

function getUserGuess() {
  if (ranWord.checkIfGuessed()) {
    return showResult(true);
  }

  if (!guessesLeft) {
    return showResult(false);
  }

  inquirer.prompt({
    name: 'char',
    // Create a new line and show the word along with the message
    message: 'Choose a letter!\n' + ranWord.displayWord(),
    validate: function(val) {
      // One way
      // return val.match(/[a-z]/gi) != null;
      // Best way
      return /[a-z]/gi.test(val);
    }
  }).then(function(answer) {
    if ( ranWord.guessLetter(answer.char) ) {
      console.log('\nCorrect!\n');
    } else {
      console.log('\nIncorrect..\n');
      guessesLeft--;
      console.log('You have ' + guessesLeft + ' guesses left');
    }

    getUserGuess();
  });  
}

function startGame() {
  guessesLeft = 10;
  ranWord = new Word(words[Math.floor(Math.random() * words.length)]);

  // Create Line Break
  console.log('\n');

  getUserGuess();
}

startGame();