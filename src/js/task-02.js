const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector(`#ingredients`);
const arrayIngredients = [];
ingredients.map(element => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = element;
  ingredientsItem.classList.add('item');
  arrayIngredients.push(ingredientsItem);

});
ingredientsList.append(...arrayIngredients);



