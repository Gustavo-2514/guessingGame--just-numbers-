let numberAttempts = 5;
let numberRandon = "";
let numberAttemptsTitle = document.getElementById("numberAttempts");
const start = document.getElementById("start");
const title = document.querySelector("h2");
const attempts = document.getElementById("attempts");
const tips = document.getElementById("tips");
const inputNumber = document.getElementById("valueNumber");

function initializeGame() {
  numberAttempts = 5;
  inputNumber.value = "";
  inputNumber.placeholder = "Numero de 0/50...";
  inputNumber.disabled = false;
  inputNumber.focus();
  start.textContent = "Recomeçar";
  title.innerText = "Numero sorteado!";
  title.style.color = "#a5d61e";
  attempts.innerHTML = 'Você tem apenas <span id="numberAttempts"></span> tentativas! ';
  numberAttemptsTitle = document.getElementById("numberAttempts");
  numberAttemptsTitle.innerText = numberAttempts;
  tips.innerText = "Boa sorte!";
  numberRandon = Math.floor(Math.random() * 51);
}

function check() {
  const inputNumber = parseInt(document.getElementById("valueNumber").value);
  console.log("Numero sorteado " + numberRandon);
  console.log("Numero digitado " + inputNumber);

  if (numberRandon === inputNumber) {
    title.innerText = "Você ganhou!";
    attempts.innerHTML = "O numero era: " + numberRandon;
    tips.innerText = "";
    inputNumber.disabled = true;
    inputNumber.placeholder = "";
    inputNumber.value = "";
  } else if (numberRandon != inputNumber && numberAttempts !== 1) {
    numberAttempts--;
    numberAttemptsTitle.innerText = numberAttempts;
    if (inputNumber < numberRandon) {
      tips.innerText = "O numero é MAIOR";
    } else {
      tips.innerText = "O numero é MENOR";
    }
  } else {
    inputNumber.disabled = true;
    attempts.innerHTML = "O numero era: " + numberRandon;
    tips.innerText = "";
    title.innerText = "Você perdeu!";
    title.style.color = "#DC143C";
  }
}

document.querySelector(".check").addEventListener("click", check);
document.getElementById("start").addEventListener("click", initializeGame);

// estilizar mais o jogo e fazer o comentario acima
