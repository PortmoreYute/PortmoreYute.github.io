let round = 0;
let pScore = 0;
let cScore = 0;
let dScore = 0;
var userScore = document.getElementById("pScore");
var compScore = document.getElementById("cScore");
var drawScore = document.getElementById("dScore");

function computerPlay() {
  let randomCount = Math.floor((Math.random()*3)+1)
  if (randomCount==1) {
    return "ROCK"
  }
  if (randomCount==2) {
    return "PAPER"
  }
  if (randomCount==3) {
    return "SCISSORS"
  }
}

function playRound(pChoice,cChoice) {
  if (pChoice=="ROCK") {
    if (cChoice=="ROCK") {
      dScore++;
      return "It Was A Draw\n" +"Player Chose: "+ pChoice + "\nComputer Chose: " + cChoice;
    }
    if (cChoice=="PAPER") {
      cScore++;
      return "You Lose\n" +"Player Chose: "+ pChoice + "\nComputer Chose: " + cChoice;
    }
    if (cChoice=="SCISSORS") {
      pScore++;
      return "You Win\n" +"Player Chose: "+ pChoice + "\nComputer Chose: " + cChoice;
    }
  }
  if (pChoice=="PAPER") {
    if (cChoice=="ROCK") {
      pScore++;
      return "You Win\n" +"Player Chose: "+ pChoice + "\nComputer Chose: " + cChoice;
    }
    if (cChoice=="PAPER") {
      dScore++;
      return "It Was A Draw\n" +"Player Chose: "+ pChoice + "\nComputer Chose: " + cChoice;
    }
    if (cChoice=="SCISSORS") {
      cScore++;
      return "You Lose\n" +"Player Chose: "+ pChoice + "\nComputer Chose: " + cChoice;
    }
  }
  if (pChoice=="SCISSORS") {
    if (cChoice=="ROCK") {
      cScore++;
      return "You Lose\n" +"Player Chose: "+ pChoice + "\nComputer Chose: " + cChoice;
    }
    if (cChoice=="PAPER") {
      pScore++;
      return "You Win\n" +"Player Chose: "+ pChoice + "\nComputer Chose: " + cChoice;
    }
    if (cChoice=="SCISSORS") {
      dScore++;
      return "It Was A Draw\n" +"Player Chose: "+ pChoice + "\nComputer Chose: " + cChoice;
    }
  }
}

function play(pChoice) {
  console.log(playRound(pChoice.toUpperCase(),computerPlay()));
  userScore.innerHTML = "Player:" + pScore;
  compScore.innerHTML = "Computer:" + cScore;
  drawScore.innerHTML = "Draw:" + dScore;
  round++;
  if(round==5){
    if (pScore<cScore) {
      alert("You Lost")
      round = 0;
    }
    if (pScore>cScore) {
      alert("You Won")
      round = 0;
    }
    if (pScore==cScore) {
      alert("It was a draw")
      round = 0;
    }
    pScore=0;
    cScore=0;
    dScore=0;
    userScore.innerHTML = "Player: 0" ;
    compScore.innerHTML = "Computer: 0";
    drawScore.innerHTML = "Draw: 0";
  }
}

console.log(pScore);
console.log(cScore);
