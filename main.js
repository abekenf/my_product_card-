const firstCard = document.querySelector('.product-card-item-mousse');
const changeColorMousseItem = document.querySelector('#change-color-mousse');

changeColorMousseItem.addEventListener('click', () => {
  firstCard.style.backgroundColor = '#d91313';

});

const cardsAll = document.querySelectorAll('.product-card');
const changeColorAll = document.querySelector('#change-color-all');

changeColorAll.addEventListener('click', () => {
  cardsAll.forEach(card => {
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

const colorChangeBtn = document.querySelector('.change-button-color');

colorChangeBtn.addEventListener('click', changeButtonColor);
function changeButtonColor() {
  colorChangeBtn.classList.toggle("active")

}
