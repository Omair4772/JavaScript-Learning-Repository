const sumbitBtn = document.querySelector("#subt")
const userInput = document.querySelector("#GuessField")
const guessSolt = document.querySelector(".guesses")
const remaining = document.querySelector(".lastresult")
const hint = document.querySelector(".LowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1
let randomNumber = parseInt(Math.random()* 100 + 1) // It will store 1 to 100 values 

let playGame = true

if(playGame){
    sumbitBtn.addEventListener('click', function(event){
        event.preventDefault()
        const guess =  parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
        if(guess === "" || isNaN(guess) || guess < 1 || guess > 100 ){
        
            if(guess === ""){
                alert(`${guess} is Not a Valid Number!`)
            }
            else if(isNaN(guess)){
                alert(`Your Guess is Not a Number!`)
            }
            else if(guess < 1 ){
                alert(`Your Guess is Less Then 1`)
            }
            else if(guess > 100 ){
                alert(`Your Guess is Greater Then 100`)
            }
        }
        else{
                prevGuess.push(guess)
                if(numGuess === 10){
                   displayguess(guess)
                   displayMsg(`Game Over, Random Number Was ${randomNumber}`)
                   endGame()
                }else{
                    displayguess(guess)
                    checkGuess(guess)
                }
        }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMsg(`You Win :)`)
        endGame()
    }else if (guess < randomNumber){
        displayMsg(`Your Guess is Too Low.`)
    }else if(guess > randomNumber){
        
        displayMsg(`Your Guess is Too High.`)
    }
}

function displayguess(guess){

    userInput.innerHTML = '' // CleanUp
    guessSolt.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML--
}

function displayMsg(message){
    hint.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    playGame = false
    userInput.value =''
    userInput.setAttribute('disabled','')
    p.innerHTML = '<h2 id="newGame"> Start New Game</h2>';
    startOver.appendChild(p)
    newGame();
}

function newGame(){
    const newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener('click', function(event){
        randomNumber = parseInt(Math.random()* 100 + 1)
        displayMsg("")
        prevGuess = []
        numGuess = 1
        guessSolt.innerHTML = ''
        remaining.innerHTML = 10
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        playGame = true
    })
}

