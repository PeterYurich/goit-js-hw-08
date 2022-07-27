
import { _ } from "lodash"

const form = document.querySelector('.feedback-form')

function getEnteredData () {
    return JSON.parse(localStorage.getItem("feedback-form-state")) 
}
const enteredData = getEnteredData()
// тут вызов функции работает (правда это единственный случай, где он работает)
if (enteredData) {
    Object.entries(enteredData).forEach(([name, value]) => {
        form.elements[name].value = value
    })
}

const onTapping = (e) => {
    let enteredData = JSON.parse(localStorage.getItem("feedback-form-state"))
    // а тут вызов функции  getEnteredData не работает
    console.log(enteredData)
    enteredData = enteredData ? enteredData : {}
    enteredData[e.target.name] = e.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(enteredData))
}
form.addEventListener('input', _.throttle(onTapping, 1))

form.addEventListener('submit', e => {
    e.preventDefault();
    const enteredData = JSON.parse(localStorage.getItem("feedback-form-state"))
    // и тут тоже
    if (enteredData) {
        console.log(enteredData)
        Object.keys(enteredData).forEach(el => {
            form.elements[el].value = ""
        })
        localStorage.removeItem("feedback-form-state")
    } else { console.log("object 'feedback-form-state' in storage is already removed") }
})

