
import { _ } from "lodash"
import  {
    saveToLocalStorage,
    loadFromLocalStorage,
    removeFromLocalStorage
} from "./storage"

lOCALSTORAGE_KEY = 'feedback-form-state'
const form = document.querySelector('.feedback-form')

function getEnteredData () {
    return JSON.parse(localStorage.getItem(lOCALSTORAGE_KEY)) 
}
const enteredData = getEnteredData()
// тут вызов функции работает (правда это единственный случай, где он работает)
if (enteredData) {
    Object.entries(enteredData).forEach(([name, value]) => {
        form.elements[name].value = value
    })
}

const onTapping = (e) => {
    let enteredData = JSON.parse(localStorage.getItem(lOCALSTORAGE_KEY))
    // а тут вызов функции  getEnteredData не работает
    enteredData = enteredData ? enteredData : {}
    enteredData[e.target.name] = e.target.value
    localStorage.setItem(lOCALSTORAGE_KEY, JSON.stringify(enteredData))
}
form.addEventListener('input', _.throttle(onTapping, 500))

form.addEventListener('submit', e => {
    e.preventDefault();
    const enteredData = JSON.parse(localStorage.getItem(lOCALSTORAGE_KEY))
    // и тут тоже
    if (enteredData) {
        console.log(enteredData)
        Object.keys(enteredData).forEach(el => {
            form.elements[el].value = ""
        })
        localStorage.removeItem(lOCALSTORAGE_KEY)
    } else { console.log("object 'feedback-form-state' in storage is already removed") }
})

