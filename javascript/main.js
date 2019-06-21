// Selectors
const canvas = document.querySelector('canvas')
const onePlayerButton = document.querySelector('.one-player')
const twoPlayerButton = document.querySelector('.two-player')
const playerButtonContainer = document.querySelector('.players')
const keysGameContainer = document.querySelectorAll('.keys-game-container')
const context = canvas.getContext('2d')
let correctSound = ''


// Canvas 100% Width and Height of viewport.
context.canvas.width = innerWidth;
context.canvas.height = innerHeight;

// Variables aux.
let frames = 0
let interval
let startInterval
let musicInterval
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
  setInterval(playAudio, 4000)
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
  musicInterval = setInterval(playAudio, 4000)
  playerButtonContainer.remove()
}

// Obstacles
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

// Collitions
function checkCollition() {
  obstacles.map((obstacle, i) => {
    if (character21.isTouching(obstacle)) {
      lifes -= 1
      gameOver()
      obstacles.splice(i, 1)
    }
    if (character22.isTouching(obstacle)) {
      lifes -= 1
      gameOver()
      obstacles.splice(i, 1)
    }
  })
}


// Game over
function gameOver() {
  if(lifes == 0) {
    clearInterval(interval)
    clearInterval(musicInterval)
  }
}

// Play random sound
let audio = new Audio()
function playAudio() {
  audio.src = sounds[Math.floor(Math.random() * sounds.length)]
  correctSound = audio.src
  audio.play()
}


// Detect key. Canvas.
let divSmall
function playNote(e){
  let keyCodeValues = [65, 83, 68, 70, 71, 72, 74, 75]

  // Validations
  if (!keyCodeValues.includes(e.keyCode)) {
    return
  }
  if(correctSound == '') {
    return
  }

  if(e.keyCode == 65) {
    if(correctSound.includes('c.mp3')) {
      lifes += 1
    } else {
      lifes -= 1
    }
  } else if (e.keyCode == 83) {
    if(correctSound.includes('d.mp3')) {
      lifes += 1
    } else {
      lifes -= 1
    }
  } else if (e.keyCode == 68) {
    if(correctSound.includes('e.mp3')) {
      lifes += 1
    } else {
      lifes -= 1
    }
  } else if (e.keyCode == 70) {
    if(correctSound.includes('f.mp3')) {
      lifes += 1
    } else {
      lifes -= 1
    }
  } else if (e.keyCode == 71) {
    if(correctSound.includes('g.mp3')) {
      lifes += 1
    } else {
      lifes -= 1
    }
  } else if (e.keyCode == 72) {
    if(correctSound.includes('a.mp3')) {
      lifes += 1
    } else {
      lifes -= 1
    }
  } else if (e.keyCode == 74) {
    if(correctSound.includes('b.mp3')) {
      lifes += 1
    } else {
      lifes -= 1
    }
  } else if (e.keyCode == 75) {
    if(correctSound.includes('cplus.mp3')) {
      lifes += 1
    } else {
      lifes -= 1
    }
  }
  if(lifes > 3) {
    lifes = 3
  }
  gameOver()

  divSmall = document.querySelector(`div[data-small="${e.keyCode}"]`)
  if(!divSmall) return
  divSmall.classList.add('playing')
}

// Remove class
function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}


// Listeners

onePlayerButton.addEventListener("click", singleGame)
twoPlayerButton.addEventListener("click", multiplayerGame)
keysGameContainer.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playNote)

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