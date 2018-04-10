var Letter = require('./Letter');

function Word(word) {
  // An array of new Letter objects representing the letters of the underlying word
  this.letters = [];

  for ( var i = 0; i < word.length; i++ ) {
    this.letters.push(new Letter(word[i]));
  }
}

/* A function that returns a string representing the word. This should call the function on 
  each letter object(the first function defined in Letter.js) that displays the character or an underscore and concatenate those together. 
*/
Word.prototype.displayWord = function() {
  var word = '';

  for ( var i = 0; i < this.letters.length; i++ ) {
    word += this.letters[i].getLetter() + ' ';
  }

  return word;
}

/* A function that takes a character as an argument and calls the guess function on each letter object
  (the second function defined in Letter.js) 
*/
Word.prototype.guessLetter = function(char) {
  var is_correct = false;

  for ( var i = 0; i < this.letters.length; i++ ) {
    if ( this.letters[i].checkGuess(char) ) {
      is_correct = true;
    }
  }

  return is_correct;
}

Word.prototype.checkIfGuessed = function() {
  var is_guessed = true;

  for ( var i = 0; i < this.letters.length; i++ ) {
    if ( !this.letters[i].guessed ) {
      is_guessed = false;
    }
  }

  return is_guessed;
}

module.exports = Word;