// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector('#font-size-control');
const changedFieldRef = document.querySelector('#text');

inputRef.addEventListener('input', function (event) {
    const newFontSize = event.currentTarget.value;
    changedFieldRef.style.fontSize = newFontSize + "px"; 
})