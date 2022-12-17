// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.Функция создает столько < div >,
//   сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  refs: document.querySelector('input[type="number"]'),
  btnCreateRef: document.querySelector('button[data-create]'),
  btnDestroyRef: document.querySelector('button[data-destroy]'),
  outputFieldRef: document.querySelector('#boxes'),
};

const createBoxes = amount => {
  const elementsString = [];
  let width = 30;
  let height = 30;
  const step = 10;

  for (let i = 0; i <= amount; i++){
    const bgColor = getRandomHexColor();
    const addedStr = `<div style="height: ${height}px; width: ${width}px; background-color:${bgColor}"></div>`;
    elementsString.push(addedStr);
    
    width += step;
    height += step;
  }
  return elementsString.join(" ");
}

const destroyBoxes = () => {
  refs.outputFieldRef.textContent=' ';
}

refs.btnCreateRef.addEventListener('click', function () {
  const outputString = createBoxes(refs.refs.value);
  refs.outputFieldRef.insertAdjacentHTML('beforeend', outputString);
});

refs.btnDestroyRef.addEventListener('click', function () {
  destroyBoxes();
})