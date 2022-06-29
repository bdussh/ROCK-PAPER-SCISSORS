const object = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return object[Math.floor(Math.random() * 3)]
}

function playerPlay() {
    let playerSelection = prompt("choose your weapon!").toLowerCase();
    while (!object.includes(playerSelection)) {
        playerSelection = prompt("you wrote something stupid choose your weapon again!").toLowerCase();
    }
    return playerSelection
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `That's tie! ${playerSelection} vs ${computerSelection}`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'rock' && computerSelection === 'scissors') {
        return `player wins! ${playerSelection} vs ${computerSelection}`
    } else {
        return `computer wins! ${playerSelection} vs ${computerSelection}`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();
        console.log(playRound(playerSelection, computerSelection));

    }
}

game();









