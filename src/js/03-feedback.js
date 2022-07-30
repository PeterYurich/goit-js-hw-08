
import { _ } from "lodash"
import  {
    saveToLocalStorage,
    loadFromLocalStorage,
    removeFromLocalStorage
} from "./storage"

lOCALSTORAGE_KEY = 'feedback-form-state'
const form = document.querySelector('.feedback-form')

initForm()
function initForm () {const enteredData = loadFromLocalStorage(lOCALSTORAGE_KEY)
if (enteredData) {
    Object.entries(enteredData).forEach(([name, value]) => {
        form.elements[name].value = value
    })
}}

const onTapping = (e) => {
    let enteredData = loadFromLocalStorage(lOCALSTORAGE_KEY)
    enteredData = enteredData ? enteredData : {}
    enteredData[e.target.name] = e.target.value
    localStorage.setItem(lOCALSTORAGE_KEY, JSON.stringify(enteredData))
}
form.addEventListener('input', _.throttle(onTapping, 500))

form.addEventListener('submit', e => {
    e.preventDefault();
    const enteredData = loadFromLocalStorage(lOCALSTORAGE_KEY)
    if (enteredData) {
        console.log(enteredData)
        Object.keys(enteredData).forEach(el => {
            form.elements[el].value = ""
        })
        localStorage.removeItem(lOCALSTORAGE_KEY)
    } else { console.log("object 'feedback-form-state' in storage is already removed") }
})

