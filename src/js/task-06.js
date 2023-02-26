const inputField = document.querySelector('#validation-input');
const trueValue = Number(inputField.dataset.length);
const inputBlurHandler = () => {
    inputField.classList.remove('valid', 'invalid');
    if (inputField.value.length === trueValue) {
        inputField.classList.add('valid');
    } else {
        inputField.classList.add('invalid')
    }
}
inputField.addEventListener('blur', inputBlurHandler);