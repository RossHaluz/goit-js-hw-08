import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputForm, 500))
getText()
const onForm = {}

function onInputForm(evt) {
    onForm[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(onForm))
}

function getText(evt) {
    const saveText = JSON.parse(localStorage.getItem("feedback-form-state"))

    if (saveText) {
        form.email.value = saveText.email
        form.message.value = saveText.message
    }

}

form.addEventListener('submit', submitForm);

function submitForm(evt) {
    evt.preventDefault()
    evt.currentTarget.reset()
    localStorage.removeItem("feedback-form-state")
    console.log(onForm)
}