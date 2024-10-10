// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";
clonedBtn.innerText = "Я изменю тебя"
clonedBtn.className = "second-btn"
clonedBtn.style.backgroungColor ="#a78b71"
clonedBtn.style.color = "white"


btn.addEventListener('click', () => {
  document.body.append(clonedBtn)
  
})
clonedBtn.addEventListener("click", ()=> {
  btn.style.backgroundColor = `#9c4a1a`
  btn.style.color ="#000"
})

// здесь можете создать EventListener для второй кнопки