function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showWeather('Almaty', '+25');

const LIGHT_SPEED = '299 792 458';

function lightSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость');
  }
  else if (speed === LIGHT_SPEED) {
    console.log('Скорость света');
  }
  else {
    console.log('Субсветовая скорость');
  }
}

lightSpeed('299 792 458');

let variableNumber1 = 'bread';
let variableNumber2 = 'price';

function breadPrice(currentBudget, variableNumber2) {
  if (currentBudget > variableNumber2) {
    console.log(`${variableNumber1} приобретён. Спасибо за покупку!`);
  }
  else {
    console.log(`Вам не хватает ${variableNumber2 - currentBudget}, пополните баланс`);
  }
}

breadPrice(100, 150);