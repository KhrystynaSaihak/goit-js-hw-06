// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль 
// при клике на button.change - color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  bodyRef: document.querySelector('body'),
  outputRef: document.querySelector('.color'),
  btnRef: document.querySelector('.change-color'),
};

const changeColor = (tag, color) => {
  tag.style.color = color;
};

refs.btnRef.addEventListener('click', function (event) {
  const color = getRandomHexColor();
  changeColor(refs.bodyRef, color);
  refs.outputRef.textContent = color;
})