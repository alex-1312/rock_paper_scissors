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
  ps = '';
  let cs = computerSelection;
  let err = 'Oops. Something went wrong!'; 
  
  ps = ps.toLowerCase();
  
  // if playerSelection is rock
  if ( ps == 'rock' && cs == 'rock' ) {
    return 'It\'s a draw! Rock vs Rock.';
  } else if ( ps == 'rock' && cs == 'paper' ) {
    return 'You lose! Paper beats Rock.';
  } else if ( ps == 'rock' && cs == 'scissor' ) {
    return 'You won! Rock beats Scissor.';
  } else {
    return err;
  }

  // if playerSelection is paper
  if ( ps == 'paper' && cs == 'rock' ) {
    return 'You won! Paper beats Rock.';
  } else if ( ps == 'paper' && cs == 'paper' ) {
    return 'It\'s a draw! Paper vs Paper.';
  } else if ( ps == 'paper' && cs == 'scissor' ) {
    return 'You lose! Scissor beats Paper.';
  } else {
    return err;
  }

  // if playerSelection is scissor
  if ( ps == 'scissor' && cs == 'rock' ) {
    return 'You lose! Rock beats Scissor.';
  } else if ( ps == 'scissor' && cs == 'paper' ) {
    return 'You won! Scissor beats Paper.';
  } else if ( ps == 'scissor' && cs == 'scissor' ) {
    return 'It\'s a draw! Scissor vs Scissor.';
  } else {
    return err;
  }
}
// play the game 5 times in a row
function game ( ){  
  for ( let i = 1; i <= 5; i++ ){
    // console.log('Loop: ' + i);
    let ps = prompt('Your Choise. Rock, Paper or Scissor');
    let cs = computerPlay();
    console.log('Loop ' + i + ': ' + playRound(ps, cs));
  }
} 


// TESTING STUFF

const playerSelection = 'rock';
const computerSelection = computerPlay();

game();

// console.log(playRound(playerSelection, computerSelection));

// console.log(computerPlay());
// console.log('const playerSelection: ' + playerSelection);
// console.log('const computerSelection: ' + computerSelection);