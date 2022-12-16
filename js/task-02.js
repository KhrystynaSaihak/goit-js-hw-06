// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const makeIngredientsList = (name) => {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.innerHTML = name;
  return ingredientEl;
}

const addContentToHtml = (content, place) => {
  place.append(...content);
}

const ingredientElArr = ingredients.map(makeIngredientsList);
addContentToHtml(ingredientElArr, ingredientsRef);