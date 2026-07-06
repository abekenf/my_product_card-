function shoWweather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

shoWweather('Almaty', '+25');

const SPEED_LIGHT = '299 792 458';

function speedLight(speed) {
  if (speed > SPEED_LIGHT) {
    console.log('Сверхсветовая скорость');
  }
  else if (speed === SPEED_LIGHT) {
    console.log('Скорость света');
  }
  else {
    console.log('Субсветовая скорость');
  }
}

speedLight('299 792 458');

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