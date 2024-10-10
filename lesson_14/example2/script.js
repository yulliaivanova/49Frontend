const submitButtonElement = document.querySelector(".submit-button");

submitButtonHandler = (evt) => {
  evt.preventDefault();
  console.log(evt);
};

submitButtonElement.addEventListener("click", submitButtonHandler);
