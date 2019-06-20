// Object of images.
let images = {
  background: './images/Background/background.png'
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
    context.drawImage(this.img, this.x + canvas.width, this.y, this.width, this.height)
    this.moveBoard()
  }

  moveBoard() {
    this.x--
    if (this.x < -canvas.width) this.x = 0
 }
}
