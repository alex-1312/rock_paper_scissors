// capitalize the first char 
function capitalize( str ){
  if ( typeof str === 'string' ) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } else {
    return '';
  }
}

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

function playRound( playerSelection, computerSelection){
  let ps = playerSelection;
  let cs = computerSelection;
  let err = 'Oops. Something went wrong!'; 

  ps = ps.toLowerCase();

  if ( ps == cs ) { 
    return `It\'s a draw! ${capitalize(ps)} vs ${capitalize(cs)}.`; 
  } else if ( ( ps == 'rock' && cs == 'paper' ) ||
            ( ps == 'scissor' && cs == 'rock' ) ||
            ( ps == 'paper' && cs == 'scissor' ) ) { 
      return `You lose! ${capitalize(cs)} beats ${capitalize(ps)}.`; 
  } else if ( ( ps == 'rock' && cs == 'scissor' )||
              ( ps == 'scissor' && cs == 'paper' ) ||
              ( ps == 'paper' && cs == 'rock' ) ) { 
      return `You won! ${capitalize(ps)} beats ${capitalize(cs)}.`; 
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

game();

// TESTING STUFF
// console.log(capitalize('hello'));