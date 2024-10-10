const headerElement = document.querySelector(".header");
// headerElement.classList.add('green');

const submitButtonElement = document.createElement("button");
submitButtonElement.innerText = "Результат";
submitButtonElement.classList.add("submit-button");
document.body.append(submitButtonElement);

const submitButtonHandler = () => {
  const inputElements = document.querySelectorAll("input");
  const element1 = inputElements[0].value;
  const element2 = inputElements[1].value;
  const summ = +element1 + +element2;
  console.log(summ);

  const createdSpanElement = document.querySelector(".result");
  if (createdSpanElement) {
    createdSpanElement.remove();
  }
  const resultElement = document.createElement("span");
  resultElement.classList.add("result");
};
submitButtonElement.addEventListener("click", submitButtonHandler);

// if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
//   console.log("Вы ыыели неправильное значение");
// }

const massIndex = function (weight, height) {
  massIndex = 1.3 * (weight / height) * 100;
  return;
};

if (massIndex < 25) {
  console.log("Недостаточная масса тела");
} else if (massIndex > 25) {
  console.log("Ваш вес не в норме: обратите внимание на питание!");
} else if (massIndex >= 25 && massIndex <= 30) {
  console.log("У вас избыточная масса");
} else if (massIndex >= 30) {
  console.log("У вас ожирение");
}

const resultBodyMassIndex = `${("Ваш результат:", massIndex)} `;
const buttonResultBodyMassIndex = resultBodyMassIndex;
document.body.after(buttonResultBodyMassIndex);
