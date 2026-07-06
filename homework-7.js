function weatherShow(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

weatherShow('Almaty', '+25');

const speedLight = '299 792 458';

function lightSpeed(speed) {
  if (speed > speedLight) {
    console.log('Сверхсветовая скорость');
  }
  else if (speed === speedLight) {
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