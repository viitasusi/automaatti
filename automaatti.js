let moneyOnAccount = 200.00;
let selectedAmount = null;

const outOfCash = `Tilillä ei ole tarpeeksi rahaa.`;
const thanks = `Kiitos nostosta! Nostit `;
const sumNotSelected = `Valitse nostettava summa.`

function init() {
  document.getElementById(`money-on-account`).innerHTML = moneyOnAccount;
}

function selectAmount(amount) {
  selectedAmount = amount;
}

function showInfoMessage(message) {
  const infoText = document.getElementById(`info-text`);
  infoText.innerText = message;
  setTimeout(function () {
    infoText.innerText = ``;
  }, 3000);
} 

function raiseCash() {
  if (selectedAmount && moneyOnAccount >= selectedAmount) {
    moneyOnAccount = moneyOnAccount - selectedAmount;
    showInfoMessage(`${thanks}${selectedAmount} euroa`);
    selectedAmount = null;
  } else if (moneyOnAccount < selectedAmount) {
      showInfoMessage(outOfCash);
  } else if (!selectedAmount) {
    showInfoMessage(sumNotSelected);
  }
  document.getElementById(`money-on-account`).innerHTML = moneyOnAccount;
}

