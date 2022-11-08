import throttle from 'lodash.throttle';

const refs = {
form: document.querySelector('.feedback-form'),
inputMail: document.querySelector('.feedback-form input'),
inputMessage: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onFormSubmit)
getTextInForm()

function onInputForm(evt) {
    const itemForm = {
        email: refs.inputMail.value,
        message: refs.inputMessage.value,
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(itemForm))
}

function getTextInForm(evt) {
    const saveText = localStorage.getItem("feedback-form-state")
    const parceText = JSON.parse(saveText)
    
    if (parceText) {
        refs.inputMail.value = parceText.email
        refs.inputMessage.value = parceText.message
    }
}

function onFormSubmit(evt) {
    const getInfo = localStorage.getItem("feedback-form-state")
    const parseText = JSON.parse(getInfo)
    evt.preventDefault()
    evt.currentTarget.reset()
    localStorage.removeItem("feedback-form-state")
    console.log(parseText)
}