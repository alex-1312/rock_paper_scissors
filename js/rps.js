// capitalize the first char 
function capitalize( str ){
  if ( typeof str === 'string' ) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } else {
    return '';
  }
};

// function randomly returns rock, paper or scissors
function computerPlay(){
  let x = Math.floor((Math.random() * 3) + 1);
  let result = '';
  switch ( x ) {
    case 1:
      result = 'rock';
      break;
    case 2:
      result = 'paper';
      break;
    case 3:
      result = 'scissor';
      break;
  }
  return result;
};

function playRound( playerSelection, computerSelection){
  let ps = playerSelection;
  let cs = computerSelection;
  let err = 'Oops. Something went wrong!'; 
  
  ps = ps.toLowerCase();

  if ( ps == cs ) { 
    combatText.textContent = `It\'s a draw! ${capitalize(ps)} vs ${capitalize(cs)}.`; 
  } else if ( ( ps == 'rock' && cs == 'paper' ) ||
            ( ps == 'scissor' && cs == 'rock' ) ||
            ( ps == 'paper' && cs == 'scissor' ) ) {
      computerScore++;
      scoreParaContainer.textContent = computerScore;
      combatText.textContent = `You lose! ${capitalize(cs)} beats ${capitalize(ps)}.`; 
  } else if ( ( ps == 'rock' && cs == 'scissor' )||
              ( ps == 'scissor' && cs == 'paper' ) ||
              ( ps == 'paper' && cs == 'rock' ) ) { 
      playerScore++;
      scoreParaPlayer.textContent = playerScore;
      combatText.textContent = `You won! ${capitalize(ps)} beats ${capitalize(cs)}.`; 
  } else {
      return err;
  }
  round++;
  roundText.textContent = `Rounds: ${round}`;
  if ( playerScore == 3 || computerScore == 3 ) {
    let msgPara = document.createElement('p');
    msgPara.textContent = 'GAME OVER!';
    let btnReset = document.createElement('button');
    btnReset.textContent = 'New Game';
    btnReset.classList.add('btn');
    btnReset.addEventListener('click', newGame);
    
    if ( playerScore == 3 ) {
      combatText.textContent = `You won ${playerScore} out of ${round} rounds. Your opponent scored ${computerScore}.`;
    } else {
      combatText.textContent = `You lost! You got ${playerScore} points out of ${round} rounds. Your opponent scored ${computerScore}.`;
    }

    combatText.appendChild(msgPara);
    combatText.appendChild(btnReset);

    // remove eventListener from btn's
    document.getElementById('btn-rock').removeEventListener('click', rock);
    document.getElementById('btn-paper').removeEventListener('click', paper);
    document.getElementById('btn-scissor').removeEventListener('click', scissor);
  }
};

function rock() {
  playRound('rock', computerPlay());
};

function paper() {
  playRound('paper', computerPlay());
};

function scissor() {
  playRound('scissor', computerPlay());
};

function newGame(){
  location.reload();
}
// ########################################################################

// vars
let computerScore = 0;
let playerScore = 0;
let round = 0;

// container
const scoreParaPlayer = document.querySelector('#ps');
const scoreParaContainer = document.querySelector('#cs');
const combatText = document.querySelector('#combat-text');
const roundText = document.querySelector('#round');

// button eventListener 
// variables
const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissor = document.querySelector('#btn-scissor');
// events
btnRock.addEventListener('click', rock);
btnPaper.addEventListener('click', paper);
btnScissor.addEventListener('click', scissor);

// TESTING STUFF
