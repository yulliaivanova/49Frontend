const transport = {
  // любой тип данных может быть значением  свойства(функция, обьект, метод и т д)
  speed: 140,
  color: "red",
  move: function () {
    console.log("I am moving");
  },
  //   type: {
  //     model:"X",
  //     typeOffule:"gas",

  //   }
};

const prop = "speed";

//  обращение к свойству обьекта
console.log(transport.speed);
// второй вариант обращения чере []
console.log(transport["speed"]);

//  вызываем функцию
transport.move();
// если функция это свойство обьекта-она называется метод

Math.min();

// у каждого массива есть функция map
// nameOfArray.map;

// для JS характерны прототипные наследования : есть 1 обьект и с него можна наследовать другой обьект и перенимать сойства и методы
const car = {
  model: "Tesla Model 3",
  //   присваиваиваем протип через сеттер
  __proto__: transport,
};
console.log(car.model);

// если данное свойство не прописано в обьекте car, оно не может быть применено, выведет в консоль undefined, но когда указываем в обьекте car -__proto__: transport(т е он является прототипом обьекта transport) и он переймет его свойства и методы
console.log(car.speed);

// пример создание обьекта с помощью конструктора
const ship = new Object();
// const ship= {}   // c помощью литерала
ship.year = 1999;
console.log(ship.year);

// присваиванм протип через статический метод конструктора  Object, он ринимает 2 аргумента кому и от кого
Object.setPrototypeOf(ship, transport);
ship.move();

const JonnyDepp = {
  name: "Jonny",
  surname: "Depp",
  age: 50,
  hobbies: ["cricket", "bowling", "fishing"],
  films: {
    year1999: ["Pirates", "Edward"],
    year2003: ["Pirates2", "Pirates3"],
  },
  //  вариант записи function
  singing() {
    console.log("I am singing");
  },
};
JonnyDepp.singing();

// обьект событие
const RikkiMartinConcert24051988 = {
  city: "Berlin",
  date: "1998-05-24",
  bilets: 8000,
  songs: ["La La", "Da vida Loca"],
};

console.log(JonnyDepp.name);
console.log(JonnyDepp["name"]);

JonnyDepp.weight = 70;
console.log(JonnyDepp);

// удаление свойств у обьектов
delete JonnyDepp.age;
console.log(JonnyDepp);

// метод проверки наличия свойств: in
const ifJonnyHas = "age " in JonnyDepp;
console.log(ifJonnyHas);

const ifJonnyHas1 = "weight" in JonnyDepp;
console.log(ifJonnyHas1);

console.log(Object.hasOwn(JonnyDepp, "weight"));

// Работа с обьектами
// получение списка всех ключей
// Object.keys()
const keysForJonny = Object.keys(JonnyDepp);
console.log(keysForJonny);

//получение списка значений Object.values()
const valuesforJonny = Object.values(JonnyDepp);
console.log(valuesforJonny);


//! Классна работа: получить все фильмы в одномерном массиве
// Мое решение:
const valuesForJonnyFilms1 = Object.values(JonnyDepp.films.year1999);
const valuesForJonnyFilms2 = Object.values(JonnyDepp.films.year2003);
const valuesAllFilms = [...valuesForJonnyFilms1, ...valuesForJonnyFilms2];
console.log(valuesAllFilms);




// решение 1 : .flat()
const filmValuesForJonny =Object.values(JonnyDepp.films)
console.log(filmValuesForJonny);
const filmsOfJonny = filmValuesForJonny.flat()
console.log(filmsOfJonny);


// решение 2:.forEach()
const allFilms =[]
filmValuesForJonny.forEach(filmOfYear =>{
  allFilms.push(...filmOfYear)
})
console.log(allFilms);

// получение списка ключ значение 
console.log( Object.entries(JonnyDepp)
);
