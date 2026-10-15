const displayOutput = document.querySelector ('.display')
const buttons = document.querySelectorAll ('button')
conts specialOperators = ['%','=','+','-','/','*']
let outPut= ' '
const calculator = (btnValue) => {
  if(btnValue === '=' && output!== ''){
    output= eval(output.replace ('%','/100'))
  }else if (btnValue==='AC'){
    output=''
  }else if (btnValue=== 'DEL') {
    output= output.toString().slice (0,-1)
  }else{
    if (output=== ''&& specialOperators.include(btnValue))return 
  output+= btnValue
  }
  displayOutput.value=output
  }
  buttons.forEach (button => {
    button.addEventListener('clikc',(e) => calculate (e.target.dataset.value)
    )
  })
