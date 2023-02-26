const button = document.querySelector('#button')
const color = document.querySelector('#inputColor')
const caixaColor = document.querySelector('#caixaColor')
const p = document.querySelector('p')
const inputs = {
  inputColor: (inputColor) => caixaColor.style.background = inputColor,
  inputText: (inputText) => caixaColor.style.background = inputText,
  pInner: (inputColor) => p.innerHTML = inputColor.toUpperCase(),
  pInnerText: (inputText) => p.innerHTML = inputText.toUpperCase(),
  pColor: (inputColor) => p.style.color = inputColor 
}
const inputFunction = (inputColor, inputText) => {
  inputs.inputColor(inputColor, inputText)
  inputs.pInnerText(inputColor, inputText)
  inputs.inputText(inputColor, inputText)
  inputs.pInner(inputColor, inputText)
  inputs.pColor(inputColor,inputText)
}
button.addEventListener('click',() => {
  const inputColor = color.value
  const inputText = document.querySelector('#inputText').value
  
  inputFunction(inputColor, inputText)

  if(inputColor == '#ffffff') {
    p.style.color = '#000'
  }

})


