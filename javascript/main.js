// Selectors
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

// Canvas 100% Width and Height of viewport.
context.canvas.width = innerWidth;
context.canvas.height = innerHeight;

// Object of images.
let images = {
  background: './images/Background/Background.png'
}

// Classes.
class Board {
  constructor(img) {
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = img
    this.img.onload = () => {
      this.draw()
    }
  }
  
  draw() {
    context.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
}

// Instance and draw
let scenario = new Board(images.background)
scenario.draw()