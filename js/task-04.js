// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать 
// и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const counter = {
    counterValue: 0,
    step:1,
    decrement() {
        this.counterValue -= this.step;
    },
    increment() {
        this.counterValue += this.step;
    },
}

const decrBtnRef = document.querySelector('button[data-action="decrement"]');
const incrBtnRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

const changeValueText = text => {
    valueRef.textContent = text;
}

decrBtnRef.addEventListener('click', function () {
    counter.decrement();
    changeValueText(counter.counterValue);
});
incrBtnRef.addEventListener('click', function () {
    counter.increment();
    changeValueText(counter.counterValue);
});