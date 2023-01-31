const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
const arr = [];

ingredients.map(element => {

	let li = document.createElement('li');
	li.textContent = element;
	li.classList.add('item');
	arr.push(li);
});

listIngredients.append(...arr);