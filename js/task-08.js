const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", formSubmitHandler);
function formSubmitHandler (event) {
    event.preventDefault()
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    if (!email || !password) {
        return alert('Fill in all fields!')
    }
    console.log({email, password});
    formEl.reset()
}

