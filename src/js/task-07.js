const inputSlider = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = `${inputSlider.value}px`;
const sliderInputHandler = () => {
    textEl.style.fontSize = `${inputSlider.value}px`;
}
inputSlider.addEventListener('input', sliderInputHandler);