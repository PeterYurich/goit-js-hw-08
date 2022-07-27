
import { _ } from "lodash"

// const feedback = {
//     email: '',
//     message: ''
// }

// // find objects:
// const emailInputEl = document.querySelector('[name="email"]')
// const messageInputEl = document.querySelector('[name="message"]')
// const submitBtnEl = document.querySelector('[type="submit"]')

// // set entered values:
// emailInputEl.value = JSON.parse(localStorage.getItem("feedback-form-state")).email
// messageInputEl.value = JSON.parse(localStorage.getItem("feedback-form-state")).message

// // update localStorage:
// const onEmailInput = function(e) {
//     e.preventDefault()
//     feedback.email = e.currentTarget.value
//     localStorage.setItem("feedback-form-state", JSON.stringify(feedback))
// }
// emailInputEl.addEventListener('input', _.throttle(onEmailInput, 1))

// const onMessageInput = function(e) {
//     e.preventDefault()
//     feedback.message = e.currentTarget.value
//     localStorage.setItem("feedback-form-state", JSON.stringify(feedback))
// }
// messageInputEl.addEventListener('input', _.throttle(onMessageInput, 1))


// // get values and clear the form:
// submitBtnEl.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
    
//     feedback.email = ''
//     emailInputEl.value = ''
    
//     feedback.message = ''
//     messageInputEl.value = ''
    
//     localStorage.setItem("feedback-form-state", JSON.stringify(feedback))
// })

// **********************************************************************8

const form = document.querySelector('.feedback-form')
let formData = {}

// localStorage.clear()

initForm()

form.addEventListener('submit', e => {
    e.preventDefault();
    // const formEls = new FormData(form)
    // formEls.forEach((value, name) => {console.log(value, name)})
    
    console.log(formData)
    Object.keys(formData).forEach(el => {
        form.elements[el].value = ""
    })
    localStorage.removeItem("feedback-form-state")
    formData = {}
})

const onTapping = (e) => {
    formData[e.target.name] = e.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}
form.addEventListener('input', _.throttle(onTapping, 1))


function initForm () {
    let persistedFormData = localStorage.getItem("feedback-form-state")
    if(persistedFormData) {
        persistedFormData = JSON.parse(persistedFormData)
        Object.entries(persistedFormData).forEach(([name, value]) => {
            formData[name] = value
            form.elements[name].value = value
        })
    }
}