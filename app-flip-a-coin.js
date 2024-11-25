const score = getItemStorage() || {
  wins: 0,
  losses: 0
};

displayScore(); //A chamada de displayScore() vem logo após a criação de score para garantir que a interface mostre o valor atual de score imediatamente. Sem essa chamada, o usuário não veria os dados corretos até que algo mais os atualizasse.

function computerMove(){
  const randomMove = Math.random();
  let computerMove = '';

  if (randomMove < 0.5){
    computerMove = 'Heads';
  } else {
    computerMove = 'Tails';
  }
    return computerMove
}

function playGame(playerMove){
  const computerChoice = computerMove();
  let result = '';

  if(playerMove === computerChoice){
      result = 'You won!'
    } else{
      result = 'You lost!'
    }   

    if (result === 'You won!'){
      score.wins++
    } else {
      score.losses++
    }

  setItemStorage();

  displayScore();

  document.querySelector('.js-display-result').
    innerHTML = result;

  document.querySelector('.js-display-moves').
    innerHTML = `You picked: ${playerMove}. The coin flipped: ${computerChoice}.`          
}

function setItemStorage(){
  localStorage.setItem('score', JSON.stringify(score));
}

function getItemStorage(){
  return JSON.parse(localStorage.getItem('score'))
}

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  localStorage.removeItem('score');
  displayScore();
}

function displayScore(){
  document.querySelector('.js-display-score').
    innerHTML = `Wins: ${score.wins},
  Losses: ${score.losses}.`;
}
