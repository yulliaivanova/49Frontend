//находим элемент header и записываем в переменную
const headerElement = document.querySelector(".header");
headerElement.innerText = "Калькулятор";
console.log(headerElement);
headerElement.classList.add("red");

// const inputElements = document.querySelectorAll("input");
// console.log([...inputElements]);
// console.log(inputElements[0]);

// свойство value;
// inputElements[1].value;

// создание  элемента Кнопка
const submitButtonElement = document.createElement("button");
submitButtonElement.innerText = "Результат";
submitButtonElement.classList.add("submit-button");
// добавляем созданный элемент в определенное место
headerElement.after(submitButtonElement);


// cоздадим функцию с реакцией на клик по кнопке (такие функции называют хенлерами)
const submitButtonHanler = () => {
   
    
  // console.log('кнопку нажали');

// cначала найдем и удалим существующий span(если есть)
const createdSpanElement =document.querySelector('.result')
if(createdSpanElement){createdSpanElement.remove()}


  // ищем наши элементы
  const inputElements = document.querySelectorAll("input");
  // запишем значения из инпутов в переменные и добавляем value
  const element1 = inputElements[0].value;
  const element2 = inputElements[1].value;

  //   приведение к числу
  // parse /Number ()/ +
  const summ = +element1 + +element2;
  console.log(summ);
  //   создадим элемент для вывода на страничку
  const resultElement = document.createElement("span");
resultElement.classList.add('result')

  // заполняем его значениями ( результатом )
  resultElement.innerText = summ;
  // отобразим на страничке(в конце body)
  const bodyElement = document.querySelector("body");
  bodyElement.append(resultElement);
//   body можно не искать отдельно, так работает только с body
// document.body.append
};

//добавляем на кнопку действие
//addEventListener() это метод, который слушает какоето действие и потом выполняет
// submitButtonElement.addEventListener(чего ожидаем, что делать )
// submitButtonElement.addEventListener('click', ()=>{})
submitButtonElement.addEventListener("click", submitButtonHanler);
console.log("Javascript");
