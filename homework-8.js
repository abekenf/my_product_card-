//task 3

const user = {
  myName: 'Assylkhan',
  mySurname: "Beken",
  myJob: 'Kazakhmys',
  myWork: 'Engineer',
  myAge: 37,
  myCountry: 'Kazakhstan',
  myCity: "Karagandy",
}

//task 4

const car = {
  make: 'nissan',
  model: 'teana',
  year: 2003,
  color: 'silver',
  transmission: 'automatic',
}

car.user1 = user;

//task 5

function addMaxSpeed(car) {
  if ('maxSpeed' in car) {
    return;
  }

  car.maxSpeed = 240;
}

addMaxSpeed(car);

console.log(car);

//task 6

function showCarInfo(car, property) {
  console.log(car[property]);
}

showCarInfo(car, 'make');
showCarInfo(car, 'model');

//task 7

const products = [
  'Bread',
  'Milk',
  'Eggs',
  'Cheese',
  'Butter'
];

console.log(products);

//task 8

const books = [
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "Красный",
    genre: "Антиутопия"
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "Чёрный",
    genre: "Роман"
  },
  {
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    year: 1997,
    coverColor: "Синий",
    genre: "Фэнтези"
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    coverColor: "Коричневый",
    genre: "Психологический роман"
  },
  {
    title: "Властелин колец",
    author: "Джон Рональд Руэл Толкин",
    year: 1954,
    coverColor: "Зелёный",
    genre: "Фэнтези"
  }
];

books.push({
  title: "Алхимик",
  author: "Пауло Коэльо",
  year: 1988,
  coverColor: "Золотой",
  genre: "Роман"
});

console.log(books);

//task 9

const booksharryPotterBooks = [
  {
    name: "Гарри Поттер и философский камень",
    year: 1997
  },
  {
    name: "Гарри Поттер и узник Азкабана",
    year: 1998
  },
  {
    name: "Гарри Поттер и Кубок огня",
    year: 2000
  },
  {
    name: "Гарри Поттер и Орден Феникса",
    year: 2003
  },
  {
    name: "Гарри Поттер и Принц-полукровка",
    year: 2005
  }
];

const allBooks = [...books, ...booksharryPotterBooks];

console.log(allBooks);

//task 10

function addIsRare(allbooks) {
  allbooks.map(book => {
    if (book.year > 2000) {
      book.isRare = true;
    } else {
      book.isRare = false;
    }
  });  
}

console.log(addIsRare(allBooks));
