// Selectors
const canvas = document.querySelector('canvas')
const onePlayerButton = document.querySelector('.one-player')
const twoPlayerButton = document.querySelector('.two-player')
const playerButtonContainer = document.querySelector('.players')
const context = canvas.getContext('2d')

// Canvas 100% Width and Height of viewport.
context.canvas.width = innerWidth;
context.canvas.height = innerHeight;

// Variables aux.
let frames = 0
let interval
let startInterval
let lifes = 3
let bol = true
let obstacles = []
 
// Instance and draw
let scenario = new Board()
let character21 = new Character(400, canvas.height - 500, images.characterOne)
let character22 = new CharacterTwo(800,  canvas.height - 500, images.characterTwo)


// Pre-StartGame.
function preStarGame() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  scenario.draw()
}

startInterval = setInterval(preStarGame, 1000 / 120)


// Multiplayer
function update() {
  frames++
  context.clearRect(0, 0, canvas.width, canvas.height);
  scenario.draw()
  character21.draw()
  character22.draw()
  drawObstacles()
  checkCollition()
  clearInterval(startInterval)
}
function multiplayerGame() {
  if(interval) return
  interval = setInterval(update, 1000 / 120)
  playerButtonContainer.remove()
}


// Single game
function updateSingleGame() {
  frames++
  context.clearRect(0, 0, canvas.width, canvas.height);
  scenario.draw()
  character21.draw()
  drawObstacles()
  checkCollition()
  clearInterval(startInterval)
}
function singleGame() {
  interval = setInterval(updateSingleGame, 1000 / 120)
  playerButtonContainer.remove()
}

onePlayerButton.addEventListener("click", singleGame)
twoPlayerButton.addEventListener("click", multiplayerGame)


function generateObstacles() {
  obstacles.push(new Obstacle())
}

function drawObstacles() {
    if(frames % 800 === 0) {
      generateObstacles()    
  } 
  obstacles.forEach(obstacle => {
    obstacle.draw()
  })
}

function checkCollition() {
  obstacles.map(obstacle => {
    if (character21.isTouching(obstacle)) {
      gameOver()
    }
  })
}

function gameOver() {
  console.log('Collision');
}


addEventListener('keydown', (e) => {
  if(e.keyCode === 39) {
      character21.moveRight()    
      character21.changeStatus('Run')
    } else if(e.keyCode === 38) {
      if(bol) {
        character21.moveUp()
        character21.changeStatus('Jump')
        bol = false
      }
    }
    else if(e.keyCode === 90) {
      character22.moveRight()
      character22.changeStatus('Run')
    } 
    else if(e.keyCode === 88) {
      if(bol) {
        character22.moveUp()
        character22.changeStatus('Jump')
        bol = false
      }
    } 
})


addEventListener("keyup", (e) => {
  if(e.keyCode === 39) {
    character21.changeStatus('Breathe')
  } else if(e.keyCode === 38) {
    bol = true
    character21.y = canvas.height - 500
    character21.changeStatus('Breathe')
    character21.animateHelper = 0
  }
  else if(e.keyCode === 90) {
    character22.changeStatus('Breathe')
  } 
  else if(e.keyCode === 88) {
    bol = true
    character22.y = canvas.height - 500
    character22.changeStatus('Breathe')
    character22.animateHelper = 0
  }
})