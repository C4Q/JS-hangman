var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var words = ['explain', 'truck', 'neat', 'united', 'branch', 'education', 'decision', 'notice']
var guesses = 0
var gameWord = getRandomWord(words)
var userWord = blankWord(gameWord.length)

function clearScreen() {
  process.stdout.write('\x1B[2J\x1B[0f')
}

function getRandomNumber (min, max) {
  return Math.floor((Math.random() * (max - min)) + min)
}

function getRandomWord () {
  //return a random word
}

function blankWord(length) {
  var underline = '_'
  return underline.repeat(length)
}


function fillInLetter(letter) {
  //iterate through the word and check to see if the letter is in the word
  //if present, update and return the blankWord
}

function handleGuess(letter){
  // process the letter
  // if the letter provided completes the word, then end the game
  // otherwise continue prompting the player for more letters
}


rl.on('line', function(input) {
  // clearScreen()

  // check to see if the input provided is actually a letter
  // prompt the user to provide a letter if not
  // otherwise process a turn with the letter provided

})
