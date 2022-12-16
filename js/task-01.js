// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesRef =  document.querySelector('#categories')
const categoriesItem = categoriesRef.querySelectorAll('.item');

const getNumberOfCategories = () => {
   console.log(`Number of categories: ${categoriesItem.length}`);
};

const getCategory = () => {
   categoriesItem.forEach(item => {
        console.log(`Category: ${item.querySelector('h2').innerHTML}`);
        console.log(`Elements: ${item.querySelectorAll('li').length}`)
    });  
}

getNumberOfCategories();
getCategory();