const object = ['rock', 'paper', 'scissors'];
let computerWin = 0
let playerWin = 0
let Round = 1

function playRound(playerSelection) {
    let computerSelection = object[Math.floor(Math.random() * 3)];
    if (computerWin < 3 && playerWin < 3) {
        let playerImage = `images/${playerSelection}.PNG`
        let computerImage = `images/${computerSelection}.PNG`
        playerChoice.setAttribute("src", playerImage)
        computerChoice.setAttribute("src", computerImage)
        if (playerSelection === computerSelection) {

            const result = document.createElement('p')
            result.textContent = `round ${Round}: tie!!! ${computerSelection} vs ${playerSelection}`
            battleLog.appendChild(result)
        } else if (playerSelection === 'scissors' && computerSelection === 'paper' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'rock' && computerSelection === 'scissors') {
            playerWin++
            const result = document.createElement('p')
            result.textContent = `round ${Round}: player wins!!! ${computerSelection} vs ${playerSelection}`

            battleLog.appendChild(result)
        } else {
            computerWin++
            const result = document.createElement('p')
            result.textContent = `round ${Round}: computer wins ${computerSelection} vs ${playerSelection}`

            battleLog.appendChild(result)
        }
        Round++
        if (computerWin ===3){
            const result = document.createElement("h3")
            result.textContent = `Game over!!! computer wins!!!`
            battleLog.appendChild(result)
        } else if (playerWin===3){
            const result = document.createElement("h3")
            result.textContent = `Game over!!! player wins!!!`
            battleLog.appendChild(result)

        }
    }

}


const playerChoice = document.getElementById("playerChoice")

const computerChoice = document.getElementById("computerChoice")

const battleLog = document.getElementById("battle_log")

const rock = document.getElementById("ROCK")

const paper = document.getElementById("PAPER")

const scissors = document.getElementById("SCISSORS")

rock.addEventListener('click', function () {
    playRound('rock')
})

paper.addEventListener('click', function () {
    playRound('paper')
})

scissors.addEventListener('click', function () {
    playRound('scissors')
})









