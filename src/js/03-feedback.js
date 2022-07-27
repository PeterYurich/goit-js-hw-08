
import { _ } from "lodash"

const form = document.querySelector('.feedback-form')

const enteredData = JSON.parse(localStorage.getItem("feedback-form-state"))

if (enteredData) {
    Object.entries(enteredData).forEach(([name, value]) => {
        form.elements[name].value = value
    })
}

const onTapping = (e) => {
    let enteredData = localStorage.getItem("feedback-form-state")
    enteredData = enteredData ? JSON.parse(enteredData) : {}
    enteredData[e.target.name] = e.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(enteredData))
}
form.addEventListener('input', _.throttle(onTapping, 1))

form.addEventListener('submit', e => {
    e.preventDefault();
    const enteredData = JSON.parse(localStorage.getItem("feedback-form-state"))
    if (enteredData) {
        console.log(enteredData)
        Object.keys(enteredData).forEach(el => {
            form.elements[el].value = ""
        })
        localStorage.removeItem("feedback-form-state")
    } else { console.log("object 'feedback-form-state' in storage is already removed") }
})