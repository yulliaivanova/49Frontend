// ! arrays массивы
//  сложный тип данных
// синтаксис массива включает фигурные скобки
const arr = [];
// массивы используются для перечиления какихто данных
//  чаще всего мы пеечисляем однородный тип данных
const numbers = [4, 8, 15, 16, 23, 42];
const fruits = ["apple", "orange", "kiwi", "banana"];

const arr1 = [1, "apple", undefined, true];
console.log(arr1);

// чтобы обратиться к элементу масива мы используем его индекс
let kiwi = fruits[2];
console.log(kiwi);

// если мы обратимся к индексу несуществующего элемента - мы получим undefined
let secret = fruits[10];

//* for loop - цикл for
// цикл -повторение одного и того же действия определенное количество раз
// обьявляем переменную итератор, которую мы каэжы йраз изменяем
// for(let i = 0; i < fruits.length; i++ ){
//      можем на каждой итерации выводить значение
//     console.log(fruits[i], "под номером ", i)
// }

//  длина массива fruits
let fruitsLennght = fruits.length;

// * while - цикл(до тех пор пока)

let i = 0;
while (i < 10) {
  console.log(i, "раз");
  // без изменения i мы не выйдем из цикла
  i++;
}

// * if-else

let isStudent = true;

if (isStudent) {
  console.log("похоже вы  👩‍🎓");
} else {
  console.log("кажется, что вы не 🧑‍🎓");
}

// ! методы добавления или удаления  массива
// все методы делятся на мутирующие и немутирующие
// мутирующие-изменяют исходный массив
// немутирующие - не изменяют

const animals = ["schark", "panda", "tiger", "otter"];
const snake = "snake";

// push() метод добавления элемента в конец массива
// методы это функции, которые связаны с какимто обьектом
//  функции мы можем передавать какоето значение
//  мутирующие-
// 1. изменяют исходный массив, добавляет элемент в конец
// 2. возвращенное значение -длина измененного массива
animals.push(snake);
console.log(animals);
const newLengthOfAnimals = animals.push(snake);
console.log(newLengthOfAnimals);
// в консоле увмдим возвращенный размер нового массива 6

// * метод pop() - удаление элементов из конца массива
// мутирующий метод
// 1. изменяет исходный массив, удаляет последний элемент
// 2. возвращенное значение это удаленный элемент
console.log(animals);
const returnedValue = animals.pop();
// animals.pop();
console.log(animals);
console.log(returnedValue);

// * unschift метод добавления элемента в начало массива
// мутирующий метод
// 1. изменяет исходный массив, добавляет элемент в начало
// 2. возвращенное значение это длина измененного массива
const returnedValue3 = animals.unshift("panda");
console.log(animals);
console.log(returnedValue3);

// *schift метод удаления элемента из начала массива
// мутирующий метод
// 1. изменяет исходный массив, удаляет первый элемент в начале
// 2. возвращенное значение это удаленный элемент

const returnedValue4 = animals.shift();
console.log(animals);
console.log(returnedValue4);

// spread syntax(спред оператор)
// чтобы сдедать копию нужно обратиться в квадатных скобкахк исходному массиву черз `...`
// удобный способ сделать копию массива
// работает только для одномерных массивов
// массивы это ссылочный тип данных
// [...animals] это означает что все элементы будут переходить в новый массив
// примерсоздании копии элементов массива через spread (это ...)
const newAnimals = [...animals];

// не путайте с созданием двумерного массива
// если не прописывать ..., то элементы не распакуются
const mixedArr1 = [animals, fruits];

// пример создантя нового массива из обьединенных элементов старого
const mixedArr2 = [...animals, ...fruits];

// мы можем записывать элементы напрямую в новый массив с spread
const newAnimals1 = ["fox", ...animals, "🐭"];
console.log(newAnimals);
console.log(mixedArr1);
console.log(mixedArr2);
console.log(newAnimals1);

// создание глубокой копии для двумерных и более массивов
let mixedArr1Copy = structuredClone(mixedArr1);

mixedArr1Copy[0][1] = "polar bear";

console.log(mixedArr1);
console.log(mixedArr1Copy);

// !Objects
// обьект это ссылочный тип данных
// данные хранятся в обьекте в формате: ключ;значение
// ключи это строковые значения

// у обьекта фигурные скобки
const person1 = {
  // name: это ключ, а "John" это значение
  name: "Rohn",
  lastname: "Weasly",
  age: 40,
  isadult: true,
  isMarried: false,
  siblings: ["Jeanny", "Fred", "Jeorge"],
};
const person2 = {
  name: "Jeanny",
  lastname: "Weasly",
  age: 35,
  isadult: true,
  isMarried: true,
  siblings: ["Rohn", "Fred", "Jeorge"],
};

// как сделать массив из 2 обьектов

// частый случай массива состоящего из обьектов
const family = [person1, person2];
console.log(family);

// к значениям обьектов мы обращаемся по ключам через точку
console.log(person2.name, person2.lastname);

// выводим информацию в виде строки
// c помощью сложения строк: канкатенации
const person2Info =
  person2.name +
  " " +
  person2.lastname +
  " " +
  "is sister of " +
  person1.name +
  " " +
  person1.lastname;
console.log(person2Info);

const person1Info = ` ${person1.name} ${person1.lastname} is brother of ${person2.name} ${person2.lastname}`;
console.log(person1Info);

// пример работы с циклами с массивом из обьектов
// итерируемся по массиву и обращаемся по индексу к каждому обьекту через итератор
// у выбраного обьекта по ключу забираем нужное значение
for (let i = 0; i < family.length; i++) {
  console.log(family[i].name, "is", family[i].age);
}

// мы хотим доьавить в обьект ключ-строку из этой переменной
const variable = "hasWife";

const person3 = {
  name: "Bill",
  lastname: "Weasly",
  age: 40,
  isadult: true,
  [variable]: true,
  "brothers und sisters": ["Rohn", "Fred", "Jeorge", "Jeanny"],
};

// ключи в обьекте стараемяс писать в одно слово, через camel case для того чтобы упростить
// работу с ключами
// если ключ назван строкой с пробелом -обращаемся к ней через квадратные скобки
console.log(person3["brothers und sisters"]);

// так выгдядит запись без деструктуризации
// const name=person1.name
// const age = person1.age

// * деструктуризация обьектов
// в одно действие мы :
// 1. забираем данные по выбранным ключам
// 2. обьявляем переменные с названиями совпадающими с именами этих ключей
// 3. присваиваем значение в эти новые переменные

// пример с деструктуризацией
const { name, lastname, age, isadult, isMarried } = person1;
console.log(name);
console.log(age);

family.push(person3);
console.log(family);

const [rohn, jeanny, bill] = family;
console.log(rohn);
console.log(jeanny);
console.log(bill.name);

// если хотим вывести только bill, то необходимо сохранять порядок и мы 
// ставим в const [, , bill] = family


