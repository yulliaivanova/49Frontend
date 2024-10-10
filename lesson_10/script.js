// обьявление переменных

// * через ключевое слово let
// такой переменной можно переприсвоить значение(и даже другого типа данных)
let hello = "hello, js";
// hello = 100

// если переменной не присвоено значение, она равна undefined
let student;
student = "Vladimir";
student = "Mykola";

console.log(student);
console.log(hello);
console.log(typeof hello);

// * через ключевое слово const
// const мы присваиваем всегда значение, менять значение мы не можем
const language = "Java Script";

// мы не будем использовать var для работы с переменными

// ! примитивные типы в JS
// * string строка
// косые кавычки использ для особого синтаксиса шаблонных строк для работы с перемменными
let planet = "Earth";
let greeting = `Мы с планеты ` + planet;
let planetNumber = 3;
console.log(greeting);

// это синтаксис шаблонных срок для работы с логикой и выражениями внутри строк
//  пищется с косыми кавычками по бокам и знаком $ и {}
let greeting1 = `Мы с планеты ${planet} . Она находится в солнечной системе. Это ${planetNumber} планета от солнца`;
console.log(greeting1);

let example = `This is ${planet}`;

// * number
let n1 = 42;
let n2 = 3.14;
let n3 = -41;
console.log(n1, n2);
// Number.MAX_SAFE_INTEGER максим значение в js, которое мы можем использовать
let lastSafeInteger = Number.MAX_SAFE_INTEGER;
console.log(lastSafeInteger);

// * boolean булевое значение
// при создании переменной испольуем вопрос
let isStudent = true;
let isBackend = false;

// * undefined - неопределенное значение
// неявное указание на отсутствие значений
// часто приходит как результат недопустимых операций

let value;
console.log(value);

// * null пустое значение
let user = null;
// лтсутствие пользователя

// * bigint - большое число

let bigNumber = 1000n;
console.log(typeof bigNumber);

// * symbol уникальное символьное значение
let symbolId = Symbol(10);
console.log(symbolId);

// ! операции над данными js

// * приведение типов

// преобразование в строку
//  неявное

// число, которое мы сложим со строкой станет строкой 
let sum = 2+ "2"

// явное через String
let sum1 = String(42) + `- ответ на главный вопрос`
console.log(sum1);

// * преобразование в число
// явное через Number
//  получится преобразовать если все значения допустимые для перевода в число
let sum2 = 2 + Number("2")
console.log(sum2);

let sum3= 1000 + Number("100$")
console.log(sum3);
// в ответ получим NaN- not a number

// явное через parseInt() преобразовует ту часть строки, которую можна и отбрасывает ту которую нельзя
let sum4 = 1000 + parseInt("100$")
console.log(sum4);

// логическое преобразование в булевое значение 

// значение для false в js:
// false
// 0
// null
// undefined
// "" (пустая строка)
// NaN
// 0n(begint)
// -0

// остальные значения считаются истинными

let b1 = Boolean("")  
console.log(b1);

// ! математические операторы




