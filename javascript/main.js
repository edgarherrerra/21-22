// Selectors
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

// Canvas 100% Width and Height of viewport.
context.canvas.width = innerWidth;
context.canvas.height = innerHeight;

// Variables aux.
let frames = 0
let interval

// Instance and draw
let scenario = new Board(images.background)
scenario.draw()

function update() {
  frames++
  context.clearRect(0, 0, canvas.width, canvas.height);
  scenario.draw()
}

function startGame() {
  if(interval) return
  interval = setInterval(update, 1000 / 120)
}

startGame()