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

   if (saveText === null) {
    return;
  }
  form.message.value = saveText.message || '';
  form.email.value = saveText.email || '';

}

form.addEventListener('submit', submitForm);

function submitForm(evt) {
    evt.preventDefault()
    evt.currentTarget.reset()
    localStorage.removeItem("feedback-form-state")
    console.log(onForm)
}