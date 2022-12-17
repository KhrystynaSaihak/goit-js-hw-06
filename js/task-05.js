// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

const changeOutputText = event => {
    const standartText = "Anonymous";
    const newText = event.currentTarget.value;
   
    if (newText) {
        refs.output.textContent = event.currentTarget.value;
        return
    }
    refs.output.textContent = standartText;
};

refs.input.addEventListener('input', changeOutputText);