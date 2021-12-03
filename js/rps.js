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

// console.log(computerPlay());