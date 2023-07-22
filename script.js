'use strict';
const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');
// Player Icons //
const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');
// For Computer Icons //
const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');
const allGameIcons = document.querySelectorAll('.far');
// Imorting Variables from Other Js
import { startConfetti, removeConfetti, stopConfetti } from './confetti.js';

// Global Vairables
const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';

let playerScoreNumber = 0;
let computerScoreNumber = 0;

// REset all selected Icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
}

// Passing Player Selection Values and Styling Icons
function select(playerChoice) {
  checkResult(playerChoice);
  // Add Selected Styling and Update PlayerChoice
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock';
    default:
      break;
  }
}
window.select = select;

// Adding Styles and Changing textContent of Computer
function displayComputerChoice() {
  // Add Selected Styling and Update PlayerChoice
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock';
    default:
      break;
  }
}

// Computer Random Choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = 'paper';
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'scissors';
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock';
  }
}

// fUNCTION
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// Function to update Score
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie";
    stopConfetti();
    removeConfetti();
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = 'You Won!';
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
      startConfetti();
    } else {
      resultText.textContent = 'You Lost :(';
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
      stopConfetti();
      removeConfetti();
    }
  }
}

// Functio to reset everything
function resetAll() {
  resultText.textContent = '';
  computerChoice = '';
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  resetSelected();
}
window.resetAll = resetAll;

resetAll();
