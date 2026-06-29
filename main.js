const firstCard = document.querySelector('.product-card-item-mousse');
const changeColorMousseItem = document.querySelector('#change-color-mousse');
changeColorMousseItem.addEventListener('click', () => {
  firstCard.style.backgroundColor = '#d91313';
});

const allCard = document.querySelectorAll('.product-card');
const changeColorAll = document.querySelector('#change-color-all');
changeColorAll.addEventListener('click', () => {
  allCard.forEach(card => {
    card.style.backgroundColor = '#79d913';
  });
})

const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', openGoogle);
function openGoogle() {
  window.open('https://google.com');
};

const logAlert = document.querySelector('#console-log');
let counter = 0;
logAlert.addEventListener('click', logAlertMessage);
function logAlertMessage() {
  counter++;
  console.log(counter);
  window.alert(`You clicked the button' + counter + 'times!`);
}

const productTitle = document.querySelector('.product-card-title');
productTitle.addEventListener('mouseover', () => {
  console.log(productTitle.textContent);
});

const buttonColor = document.querySelector('.change-button-color');
buttonColor.addEventListener('click', changeButtonColor);
function changeButtonColor() {
  buttonColor.classList.toggle("active")
}
