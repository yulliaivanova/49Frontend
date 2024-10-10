// ! Funktions функции
// в функцию мы заворачиваем когда хотим, чтоы действие  повторялось много раз
// функции позволяют переиспользовать написанный код
// если нужно, то можно создать функциЮ, которую можно будет
// переиспользовать с разными данными
// функции помогают организовывать и структурировать код

// важная часть функции это return (возвращаемое значение)
// в нем мы указываем на то, что функция 'произведет" или вернет
// поэтому return
// такое возвращенное значение можно забрать из функции и использовать дальше в программе
// если у функции нет возвращенного значения- она возвращает undefined

// * 1. funktion deklaration- обьявление через ключевое слово funktion
// имя фенцкии указывается с мал буквы, в скобках указываем параметр функции
// value это параметр за место которого в функцию при вызове прийдет значение

// пример с hosting (поднятие), вызовом функции до ее обьявления
const greeting3 = helloWorld(42);

// это обьявление функции
function helloWorld(value) {
  // даем возможность передать значение как строку или как число чеорез проверку с typeof
  if (typeof value === "string" || typeof value === "nuumder")
    return `Hello ${value}!`;
}
// "выбрасываем ошибку, чтобы не дать испол функцию с с данными неверного типа"
// throw new Error("give me string value, please");
// console.log("give me string value, please");

// чтобы пользоваться возвращенным значением в кодк, мы кладем его в переменную
//  ("JavaScript") это аргумент
const greeting1 = helloWorld("JavaScript");
// мы можем функцию переиспользовать
const greeting2 = helloWorld("sun");

// const greeting4 = helloWorld(["MOON", "EARTH"])
console.log(greeting1);
console.log(greeting2);
console.log(greeting3);

// *2. * funktion expression- обьявление в переменной + ключевое слово funktion
// такие функци кладутся в переменную и обладают ее свойствами, их нельзя вызывать до инициализации переменной
// мы явно указываем, что функция приходит в переменную
const sum = function (num1, num2) {
  return num1 + num2;
};
const sumResult = sum(50, 30);
console.log("суммы 2 чисел ", sumResult);

// *3 Cтрелочные функции или arrow funktions
// называется так изза символов ==>
// return не пишем, он будет автоматически
// если выражение можно уместить в одну строку-стрелочным функциям не нужен return
// результат действий станет возвращенным значением
const multiply = (a, b, c) => a * b * c;
console.log(multiply(10, 2, 3));

// если действие в теле функции не уместить в одну строку мы добавляем фигурные скобки
// если не указать  return такая функция вернет underfined

const multiply1 = (a, b, c) => {
  const result = a * b * c;
  return ` ${result} -  это результат умножения ${a}, ${b} и ${c} `;
};
console.log(multiply1(10, 2, 3));

const multiply2 = (a, b, c) => {
  a * b * c;
};
// console.log(multiply2(10, 2, 3)); вернет underfined, поскольку нет return

// !Методы массивов

const brothers = [
  { name: "Legolas", height: 190, race: "elf", age: 500, hasMagic: true },
  { name: "Ghimli", height: 50, race: "dwarf", age: 200, hasMagic: false },
  { name: "Aragorn", height: 190, race: "human", age: 50, hasMagic: false },
  { name: "Gendalf", height: 200, race: "magician", age: 2000, hasMagic: true },
];

let frodo = {
  name: "Frodo",
  height: 105,
  race: "hobbit",
  age: 33,
  hasMagic: false,
};

// выводим новую длину массива
console.log("новая длина массива ", brothers.push(frodo));

console.log(brothers);

// * map()
//  не мутирующий массив - не изменит исходный массив
// метод возвращает новый массив с колич элементов исходного
// нужен для создания нового массива на основании исходного.
// метод итерируется по элементам исходного массива

// 1. Создаем массив строк с именами героев
// новый массив нужно положить в новую переменную
// заместо параметра brother в стрелочной функциина каждой итерации будет поочередно приходить след элемент массива, итераций будет столько, сколько элементов в массиве
// после =>указываем каким будет элемент в новом массиве например в нашем случае мы оставили только значение по имени - name
// brother это имя параметра , который мы придумываем сами, на каждой итерации на его месте мы подставляем элемент массива
// т е на каждой итерации brother =>brother.name мы обращаемся к каждому элементу массива и говорим: от тебя останется например name(это то чо прийдет в новый массив)

const brothersNames = brothers.map((brother) => brother.name);
console.log(brothersNames);
// если бы мы хотели создать просто новый массив с братьями, то мы бы оставили после brother => только   brother

// 2. Создаем новый массив с возрастом братьев
const brothersAges = brothers.map((brother) => brother.age);
console.log(brothersAges);

// 3. Создаем массив из строк  с именами и возрастом
const brothersNamesAndAges = brothers.map(
  (element) => element.name + " " + element.age
);
// console.log(brothersNamesAndAges);

// *filter ()
// не мутирующий
// возвращает новый массив элементов удовлетворяющих условию, если такой элемент всего один -вам придет
// один элемент в массиве
// если таких элементов нет-придет пустой массив
//метод гарантировано вернет массив

console.log(
  brothers.filter((brother) => brother.age > 100 && brother.hasMagic === true)
);

// *find()
// не мутирующий
// он возвращает первый элемент удовлетворяющий условию

console.log(brothers.find((brother) => brother.race === "hobbit"));
const oldHero = brothers.find((brother) => brother.age > 100);
console.log(oldHero);

// * reduce ()
// не муирующий
// считаем сумму возраста всех братьев

// реализация без reduce() через цикл
let sum1 = 0;

for (let i = 0; i < brothersAges.length; i++) {
  sum1 += brothersAges[i];
}

console.log("сумма возрастов из цикла", sum1);

// с использованием reduce()
// в reduce() принимает в себя 2 аргумента :
// 1. аргумент это стрелочная функция: в стрелочной функции 1 аргумент-аккумулируемое значение, а 2- текущей элемент массива
// 2 аргумент- это начальное значение для переменной внутри функции
// в стрелочной функци  мы обьясняем как она будет с этой переменной работать (она называется аккумулятором асс)
// current- это текущее значение для переменной-аккумулятора в массиве

let sum2 = brothersAges.reduce((acc, current) => acc + current, 0);
console.log("сумма возрастов из reduce ", sum2);

// пример с массивом из обьектов
let sum3 = brothers.reduce((acc, current) => acc + current.age, 0);
console.log("сумма возрастов из reduce (из обьекта) ", sum3);

let brothersNamesInString = brothers.reduce(
  (acc, current) => acc + current.name + ", ",
  "Братство кольца: "
);
console.log(brothersNamesInString);

// удаляем 2 последних символа в строке через slice()-метод строк
// slice не мутирующий метод6 возвращает новый элемент
console.log(brothersNamesInString.slice(0, -2));
