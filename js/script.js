const field = document.querySelector('.field'),
      btns = field.querySelectorAll('.btn'),
      score = document.querySelector('.score'),
      res = document.querySelector('.restart');

let player1 = '';
let player2 = '';
const name1 = prompt("Кто играет за X?");
const name2 = prompt("Кто играет за O?");
let finish = true;

function play(action) {
  if (finish) { 
    if (player1 === "" && action.target.textContent === "") {
      player2 = "";
      player1 = "X";
      action.target.textContent = player1;
    }
    if (player2 === "" && action.target.textContent === "") {
      player1 = "";
      player2 = "O";
      action.target.textContent = player2;
    }
    if (
      (btns[0].textContent === "X" &&
        btns[1].textContent === "X" &&
        btns[2].textContent === "X") ||
      (btns[3].textContent === "X" &&
        btns[4].textContent === "X" &&
        btns[5].textContent === "X") ||
      (btns[6].textContent === "X" &&
        btns[7].textContent === "X" &&
        btns[8].textContent === "X") ||
      (btns[0].textContent === "X" &&
        btns[3].textContent === "X" &&
        btns[6].textContent === "X") ||
      (btns[1].textContent === "X" &&
        btns[4].textContent === "X" &&
        btns[7].textContent === "X") ||
      (btns[2].textContent === "X" &&
        btns[5].textContent === "X" &&
        btns[8].textContent === "X") ||
      (btns[0].textContent === "X" &&
        btns[4].textContent === "X" &&
        btns[8].textContent === "X") ||
      (btns[2].textContent === "X" &&
        btns[4].textContent === "X" &&
        btns[6].textContent === "X")
    ) {
      score.textContent = `Побеждает: ${name1}`;
      finish = false;
    }
    if (
      (btns[0].textContent === "O" &&
        btns[1].textContent === "O" &&
        btns[2].textContent === "O") ||
      (btns[3].textContent === "O" &&
        btns[4].textContent === "O" &&
        btns[5].textContent === "O") ||
      (btns[6].textContent === "O" &&
        btns[7].textContent === "O" &&
        btns[8].textContent === "O") ||
      (btns[0].textContent === "O" &&
        btns[3].textContent === "O" &&
        btns[6].textContent === "O") ||
      (btns[1].textContent === "O" &&
        btns[4].textContent === "O" &&
        btns[7].textContent === "O") ||
      (btns[2].textContent === "O" &&
        btns[5].textContent === "O" &&
        btns[8].textContent === "O") ||
      (btns[0].textContent === "O" &&
        btns[4].textContent === "O" &&
        btns[8].textContent === "O") ||
      (btns[2].textContent === "O" &&
        btns[4].textContent === "O" &&
        btns[6].textContent === "O")
    ) {
      score.textContent = `Побеждает:  ${name2}`;
      finish = false;
    }

      if(
        btns[0].textContent !== '' &&
        btns[1].textContent !== '' &&
        btns[2].textContent !== '' &&
        btns[3].textContent !== '' &&
        btns[4].textContent !== '' &&
        btns[5].textContent !== '' &&
        btns[6].textContent !== '' &&
        btns[7].textContent !== '' &&
        btns[8].textContent !== ''){
        score.textContent = 'Ничья';
        finish = false;
      }
  }
}

function restart(e){
  res.classList.add('hide');
  btns.forEach(btn=>{
    btn.textContent = '';
  });
  score.textContent = `${name1} VS ${name2}`;
  finish = true;
  play(e);

}

score.textContent = `${name1} VS ${name2}`;

field.addEventListener('click', (e)=>{
  play(e);
  if(finish === false){
    res.classList.remove("hide");
    res.addEventListener('click', (e)=>{
      restart(e);
    });
  }
})