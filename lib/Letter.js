function Letter(char) {
  // A string value to store the underlying character for the letter
  this.char = char;
  // A boolean value that stores whether that letter has been guessed yet
  this.guessed = false;
}

// A function that returns the underlying character if the letter has been guessed, or a placeholder
//(like an underscore) if the letter has not been guessed
Letter.prototype.getLetter = function() {
  if ( this.guessed ) {
    return this.char;
  } else {
    return '_';
  }
}

// A function that takes a character as an argument and checks it against the underlying character,
// updating the stored boolean value to true if it was guessed correctly
Letter.prototype.checkGuess = function(char) {
  if ( char.toLowerCase() == this.char.toLowerCase() ) {
    this.guessed = true;
    return true;
  } else {
    return false;
  }
}

module.exports = Letter;