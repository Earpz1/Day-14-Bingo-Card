const allNumbersDrawn = []

window.onload = function () {
  generateBoard()
}

function generateBoard() {
  const bingoBoard = document.getElementById('bingo-board')

  for (let i = 0; i < 90; i++) {
    const newNumberBox = document.createElement('div')
    newNumberBox.classList.add('number-container')
    const h3 = document.createElement('h3')
    h3.id = i + 1
    h3.innerHTML = i + 1

    newNumberBox.appendChild(h3)
    bingoBoard.appendChild(newNumberBox)
  }
}

function markNumberMainBoard(drawnNumber) {
  const markNumber = document.getElementById(drawnNumber)
  markNumber.classList.add('drawn')
}

function generateRandomNumber() {
  let number = Math.floor(Math.random() * 91)

  if (allNumbersDrawn.includes(number)) {
    generateRandomNumber()
  } else {
    const drawnNumber = document.getElementById('drawn-number')
    drawnNumber.innerHTML = number
    allNumbersDrawn.push(number)
    console.log(allNumbersDrawn)

    markNumberMainBoard(number)
  }
}
