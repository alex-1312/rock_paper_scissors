// function randomly returns rock, paper or scissors
function computerPlay(){
  let x = Math.floor((Math.random() * 3) + 1);
  let result = '';
  switch ( x ) {
    case 1:
      result = 'Rock';
      break;
    case 2:
      result = 'Paper';
      break;
    case 3:
      result = 'Scissor';
      break;
  }
  return result;
}
// lets play a single round rps
function playRound( playerSelection, computerSelection){
  let ps = playerSelection;
  let cs = computerSelection;
  
  // TODO:  paper and scissors
  //        catching user input

  if ( ps == 'rock' && cs == 'Rock' ) {
    return 'It\'s a draw! Rock vs Rock.';
  } else if ( ps == 'rock' && cs == 'Paper' ) {
    return 'You lose! Paper beats Rock.';
  } else if ( ps == 'rock' && cs == 'Scissor' ) {
    return 'You won! Rock beats Scissor.';
  }
}


// TESTING STUFF

const playerSelection = 'rock';
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

// console.log(computerPlay());
// console.log('const playerSelection: ' + playerSelection);
// console.log('const computerSelection: ' + computerSelection);