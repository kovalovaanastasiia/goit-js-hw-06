const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const field = document.querySelector('#value');

let counterValue = 0;

const decrementBtnClickHandler = () => {
    counterValue -= 1;
    field.textContent = counterValue;
};
const incrementBtnClickHandler = () => {
    counterValue += 1;
    field.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrementBtnClickHandler);
incrementBtn.addEventListener('click', incrementBtnClickHandler);




