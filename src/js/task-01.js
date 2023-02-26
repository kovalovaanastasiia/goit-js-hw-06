const categoriesList = document.querySelector('#categories');

const categoriesItem = categoriesList.querySelectorAll('li.item')
console.log(`Number of categories: ${categoriesItem.length}`);
categoriesItem.forEach(element => {
    console.log(`Category: ${element.querySelector(`h2`).textContent}`);
    console.log(`Elements: ${element.querySelector(`ul`).children.length}`);
});




