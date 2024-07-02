let gameBoard = document.querySelector("#gameBoard");
let intro = document.getElementById("intro");
let popup = document.getElementById("popup");
let winner = document.getElementById("winner");
let turnX = false;
const winningPattan = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
gameBoard.addEventListener("click", (event) => {
  intro.innerHTML = "--";
  let clickedBtn = event.target.id;
  if (clickedBtn == "gameBoard") {
    return;
  }
  let element = document.getElementById(clickedBtn);
  element.disabled = true;
  turnX = !turnX;
  if (turnX == true) {
    element.innerHTML = "x";
    element.style.color = "red";
  } else {
    element.innerHTML = "o";
    element.style.color = "green";
  }

  for (element of winningPattan) {
    checkingBtn1 = document.getElementById(`btn-${element[0]}`).innerHTML;
    checkingBtn2 = document.getElementById(`btn-${element[1]}`).innerHTML;
    checkingBtn3 = document.getElementById(`btn-${element[2]}`).innerHTML;

    if (checkingBtn1 == "" || checkingBtn2 == "" || checkingBtn3 == "") {
    } else {
      if (checkingBtn1 == checkingBtn2 && checkingBtn2 == checkingBtn3) {
        winner.innerHTML = checkingBtn1;
        popup.style.visibility = "visible";
        gameBoard.style.pointerEvents = "none";
      }
    }
  }
});
const restart = () => {
  for (i = 1; i <= 9; i++) {
    let selectedBtn = document.getElementById(`btn-${i}`);
    selectedBtn.innerHTML = "";
    selectedBtn.disabled = false;
    popup.style.visibility = "hidden";
    gameBoard.style.pointerEvents = "all";
  }
};

const closePop = ()=>{
  popup.style.visibility = "hidden";
}



