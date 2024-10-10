console.log("hello, DOM!");
console.log(document);
console.dir(document.body);

// 1. Поиск по тегу
// мы обратились к обьекту document и вызвали его метод-функцию,
// передали значение для поиска(h2) и его нулевой индекс[0](потому что
// нам необходим был первый элемент со списка(массива))
// console.log(document.getElementsByTagName("h2")[0])
// для того чтобы результат положить в переменную с названием heading, нужно
let heading = document.getElementsByTagName("h1")[0];

// выводим в консоль
console.log(heading);
//  когда мы инициализируем переменную, мы не указываем ее тип, как в Java

// мы пожем перезаписать значение элемента, например изменить текст
heading.innerText = "Lesson 9. Dom intro 🏯";

// 2. Поиск по классу
let ul = document.getElementsByClassName("method__list")[0];
// предполагается что это тоже будет массив, поэтому вводим номер индекса
// элемента
// console.log(ul[0])
// стили можем поменять через обращение к свойству style
// ul.style.listStyleType = "none"
// console.log(ul)
ul.className = "method__list";
console.log(ul);

// 3. Поиск по ID
// чаще всего переменную называют по названию id
let desc = document.getElementById("desc");
// можем обратиться к атрибуту style и изменили его цвет
// но в исключительных случаях так делаем
// desc.style.color = "darkred"

// добавили элементу заранеее прописанный класс
// desc.className = "desc"
// console.log(desc)

// 4. поиск через универсальный .querySelector()
// ищем через ID
// let descInfo =document.querySelector("#desc_info")
// console.log(descInfo)
//  ищем через класс .method__list
// при таком поиске по классу и по тегу, выдает всегда первый удовлетв результат,
// поэтому если нужно получить сптсок элементов, этот метод нам не пододит
let descInfo = document.querySelector(".method__list");
console.log(descInfo);

// * работа с интерактивными элементами *
// название переменных пишем без пробелов
// cоздаем переменную, обращаемся к документу, нахолим элемент
let btnChangeHeading = document.querySelector("#btn_change-heading");
console.log(btnChangeHeading);
// как запрограмировать ее на какоето действие:
// нам необходим Слушатель событий (это такаая особая фунцкия, которая следит за событиями, которые происходят
// с элементами, например у кнопки есть Клик(когда по элементу кликаем) и мы обьясняем Слушателю событий: я ищу
// событие, которое называется Клик, т е жду, что пользователь кликнет):
//  1. обращаемся к переменной где лежит элемент и через . вешаем Слушатель событий. Первым параметром описываем событие
// в кавычках
// 2. Вторым параметром ставим функцию(стрелочная) и в {} описываем что будет происходить за событие, что должно
// поменяться
btnChangeHeading.addEventListener("click", () => {
    heading.style.color = "red"
    heading.style.fontSize = "40px"
})

let btnHeidList =document.querySelector("#btn_heid-list")
// здесь будем прятать элементы
btnHeidList.addEventListener("click", ()=> {
    // className-перезаписывает классы
    // toggle смотрит, если есть такая  строка уже в классе, если ее нет, он добавляет ее как новый класс , а 
    // если есть то убирает 
    ul.classList.toggle("hide")

})

let btnCreateElement = document.querySelector("#btn_create_element")
console.log(btnCreateElement)
btnCreateElement.addEventListener("click", ()=>{
    // сначала создаем элемент c помощью метода createElement()
    let newElement = document.createElement("p")
    console.log(newElement)
    newElement.innerText ="Кажется, я начинаю понимать этот DOM"
    // можем также добавить класс, но делаем это до того как указываем где будем размещат элемент
    newElement.className= "dom-result"
    console.log(newElement)
    // указываем куда добавляем этот документ, к конец body
    // метод append- ч его помощью мы добавляем элемент в элемент родитель
    document.body.append(newElement)


})