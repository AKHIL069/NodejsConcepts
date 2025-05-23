let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#subt')
const guessInput = document.querySelector('#guessField')
const prevGuesses = document.querySelector('.gusses')
const remaining = document.querySelector('.lastResult')
const lowHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let previousGuess = []
let newGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(guessInput.value)
        console.log(guess);
        validateGuess(guess)
    })
    
}

function validateGuess(guess) {
    // validate guess which provide by user input guess field
    if(isNaN(guess)){
        alert("Please enter a valid number.")
    } else if (guess < 1){
        alert("Please enter a number greater than Zero.")
    } else if (guess > 100) {
        alert('Please enter a number less than 100.')
    } else{
        previousGuess.push(guess)
        if (newGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess) {
    // need to check if the guess value is correct / or low / or high
    if (guess === randomNumber) {
        displayMessage(`You guessed it right.`)
        endGame()
    } else if (guess < randomNumber){
        displayMessage(`Number id too Low.`)
    } else if (guess > randomNumber){
        displayMessage(`Number is too High.`)
    }
}

function displayGuess(guess) {
    guessInput.value = ''
    prevGuesses.innerHTML += `${guess} `
    newGuess++;
    remaining.innerHTML = `${11 - newGame}`
}

function displayMessage(message) {
    // 
    lowHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    guessInput.value = ""
    guessInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame>Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        previousGuess = []
        newGuess = 1
        guessInput.innerHTML = ''
        remaining.innerHTML = `$(11 - newGuess)`;
        guessInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true;

    });
}


