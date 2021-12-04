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
}
// lets play a single round rps
function playRound( playerSelection, computerSelection){
  let ps = playerSelection;
  let cs = computerSelection;
  
  ps = ps.toLowerCase();

  // TODO:  paper and scissors
  
  // if playerSelection is rock
  if ( ps == 'rock' && cs == 'rock' ) {
    return 'It\'s a draw! Rock vs Rock.';
  } else if ( ps == 'rock' && cs == 'paper' ) {
    return 'You lose! Paper beats Rock.';
  } else if ( ps == 'rock' && cs == 'scissor' ) {
    return 'You won! Rock beats Scissor.';
  }

  // if playerSelection is paper
  if ( ps == 'paper' && cs == 'rock' ) {
    return 'You won! Paper beats Rock.';
  } else if ( ps == 'paper' && cs == 'paper' ) {
    return 'It\'s a draw! Paper vs Paper.';
  } else if ( ps == 'paper' && cs == 'scissor' ) {
    return 'You lose! Scissor beats Paper.';
  }

  // if playerSelection is scissor
  if ( ps == 'scissor' && cs == 'rock' ) {
    return 'You lose! Rock beats Scissor.';
  } else if ( ps == 'scissor' && cs == 'paper' ) {
    return 'You won! Scissor beats Paper.';
  } else if ( ps == 'scissor' && cs == 'scissor' ) {
    return 'It\'s a draw! Scissor vs Scissor.';
  }
}


// TESTING STUFF

const playerSelection = 'rock';
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

// console.log(computerPlay());
// console.log('const playerSelection: ' + playerSelection);
// console.log('const computerSelection: ' + computerSelection);