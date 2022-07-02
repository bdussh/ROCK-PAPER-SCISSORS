const object = ['rock', 'paper', 'scissors'];

function playRound(playerSelection) {
        let computerWin = 0
        let playerWin = 0
        let computerSelection = object[Math.floor(Math.random() * 3)];
        let playerImage = `images/${playerSelection}.PNG`
        let computerImage = `images/${computerSelection}.PNG`

        if (playerSelection === computerSelection) {

            const result = document.createElement('p')
            result.textContent = `tie!!! ${computerSelection} vs ${playerSelection}`
            battleLog.appendChild(result)
        } else if (playerSelection === 'scissors' && computerSelection === 'paper' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'rock' && computerSelection === 'scissors') {
            playerWin++
            const result = document.createElement('p')
            result.textContent = `player wins!!! ${computerSelection} vs ${playerSelection}`

            battleLog.appendChild(result)
        } else {
            computerWin++
            const result = document.createElement('p')
            result.textContent = `computer wins ${computerSelection} vs ${playerSelection}`

            battleLog.appendChild(result)
        }
        playerChoice.setAttribute("src", playerImage)
        computerChoice.setAttribute("src", computerImage)
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









