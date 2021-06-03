let number = 0
let sentence = "hello, this is the number 3."

document.getElementById('button').addEventListener('click', square)

function square () {
  number = document.getElementById('input').value

  number = parseInt(number)

  number = number * number
  
  alert(number)
}