// Object of images.
let images = {
  background: './images/Background/background.png',
}

let breathe21 = {
  breathe1: './images/21/Breathe/breathe-1.png',
  breathe2: './images/21/Breathe/breathe-2.png',
  breathe3: './images/21/Breathe/breathe-3.png',
  breathe4: './images/21/Breathe/breathe-4.png',
  breathe5: './images/21/Breathe/breathe-5.png',
  breathe6: './images/21/Breathe/breathe-6.png',
  breathe7: './images/21/Breathe/breathe-7.png',
  breathe8: './images/21/Breathe/breathe-8.png',
  breathe9: './images/21/Breathe/breathe-9.png',
  breathe10: './images/21/Breathe/breathe-10.png',
  breathe11: './images/21/Breathe/breathe-11.png',
  breathe12: './images/21/Breathe/breathe-12.png',
  breathe13: './images/21/Breathe/breathe-13.png',
  breathe14: './images/21/Breathe/breathe-14.png',
  breathe15: './images/21/Breathe/breathe-15.png'
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

class Character {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 50
    this.height = 40
    this.status = 'breathe'
    this.animateHelper = 0

    this.img = new Image
    this.img.src = breathe21.breathe1

    this.img2 = new Image
    this.img2.src = breathe21.breathe2

    this.img3 = new Image
    this.img3.src = breathe21.breathe3

    this.img4 = new Image
    this.img4.src = breathe21.breathe4

    this.img5 = new Image
    this.img5.src = breathe21.breathe5

    this.img6 = new Image
    this.img6.src = breathe21.breathe6

    this.img7 = new Image
    this.img7.src = breathe21.breathe7

    this.img8 = new Image
    this.img8.src = breathe21.breathe8

    this.img9 = new Image
    this.img9.src = breathe21.breathe9

    this.img10 = new Image
    this.img10.src = breathe21.breathe10

    this.img11 = new Image
    this.img11.src = breathe21.breathe11

    this.img12 = new Image
    this.img12.src = breathe21.breathe12

    this.img13 = new Image
    this.img13.src = breathe21.breathe13

    this.img14 = new Image
    this.img14.src = breathe21.breathe14

    this.img15 = new Image
    this.img15.src = breathe21.breathe15

  }

  draw() {
    if (frames % 24 === 0) {
      this.img =
        this.animateHelper === 0 ? this.img :
        this.animateHelper === 1 ? this.img2 :
        this.animateHelper === 2 ? this.img3 :
        this.animateHelper === 4 ? this.img4 :
        this.animateHelper === 5 ? this.img5 :
        this.animateHelper === 6 ? this.img6 :
        this.animateHelper === 7 ? this.img7 :
        this.animateHelper === 9 ? this.img8 :
        this.animateHelper === 10 ? this.img9 :
        this.animateHelper === 11 ? this.img10 :
        this.animateHelper === 12 ? this.img11 :
        this.animateHelper === 13 ? this.img12 :
        this.animateHelper === 13 ? this.img13 :
        this.animateHelper === 14 ? this.img14 : this.img15
      if (this.animateHelper < 15) {
        this.animateHelper += 1
      } else {
        this.animateHelper = 0
      }
    }
    context.drawImage(this.img, this.x, this.y, this.img.width, this.img.height)
  }
  
  moveRight() {
    if(this.x > canvas.width - this.width - 10) return
    this.x += 10
  }
  
  moveUp() {
    if(this.y < 0 + this.height - 40) return
    this.y -= 100 
  }

}
