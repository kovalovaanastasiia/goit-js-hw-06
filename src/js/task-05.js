const inputField = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');

const textInputHandler = () => {
    if (!inputField.value) {
        textEl.textContent = "Anonymous";
    } else {
        textEl.textContent = inputField.value
    }
}
inputField.addEventListener('input', textInputHandler)
