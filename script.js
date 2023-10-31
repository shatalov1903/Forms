const ta = document.querySelector('.counte-input')
const counter = document.querySelector('.counter-text__current')

ta.addEventListener('input', onInput)

function onInput(evt){
const length = evt.target.value.length
counter.innerText = length
}