// Classes.
class Board {
  constructor(img) {
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = images.background
    this.img.onload = () => {
      this.draw()
    }
  }

  draw() {
    context.drawImage(this.img, this.x, this.y, this.width, this.height)
    context.drawImage(this.img, this.x + canvas.width, this.y, this.width, this.height)
    context.font = '50px Arial'
    lifes == 3 ? context.fillText("☕️☕️☕️", canvas.width - 200, 80) :
      lifes == 2 ? context.fillText("☕️☕️", canvas.width - 150, 80) :
        lifes == 1 ? context.fillText("☕️", canvas.width - 100, 80) : context.fillText("", canvas.width - 100, 80)
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
    this.status = 'Breathe'
    this.animateHelper = 0
    this.changeStatus = (status) => {
      this.status = status
    }

    this.img = new Image()
    this.img.src = breathe21.breathe1

    this.run = new Image()
    this.run.src = run21.run1

    this.jump = new Image()
    this.jump.src = jump21.jump1

    this.img2 = new Image()
    this.img2.src = breathe21.breathe2

    this.run2 = new Image()
    this.run2.src = run21.run2

    this.jump2 = new Image()
    this.jump2.src = jump21.jump2

    this.img3 = new Image()
    this.img3.src = breathe21.breathe3

    this.run3 = new Image()
    this.run3.src = run21.run3

    this.jump3 = new Image()
    this.jump3.src = jump21.jump3

    this.img4 = new Image()
    this.img4.src = breathe21.breathe4

    this.run4 = new Image()
    this.run4.src = run21.run4

    this.jump4 = new Image()
    this.jump4.src = jump21.jump4

    this.img5 = new Image()
    this.img5.src = breathe21.breathe5

    this.run5 = new Image()
    this.run5.src = run21.run5

    this.jump5 = new Image()
    this.jump5.src = jump21.jump5

    this.img6 = new Image()
    this.img6.src = breathe21.breathe6

    this.run6 = new Image()
    this.run6.src = run21.run6

    this.jump6 = new Image()
    this.jump6.src = jump21.jump6

    this.img7 = new Image()
    this.img7.src = breathe21.breathe7

    this.run7 = new Image()
    this.run7.src = run21.run7

    this.jump7 = new Image()
    this.jump7.src = jump21.jump7

    this.img8 = new Image()
    this.img8.src = breathe21.breathe8

    this.run8 = new Image()
    this.run8.src = run21.run8

    this.jump8 = new Image()
    this.jump8.src = jump21.jump8

    this.img9 = new Image()
    this.img9.src = breathe21.breathe9

    this.run9 = new Image()
    this.run9.src = run21.run9

    this.jump9 = new Image()
    this.jump9.src = jump21.jump9

    this.img10 = new Image()
    this.img10.src = breathe21.breathe10

    this.run10 = new Image()
    this.run10.src = run21.run10

    this.jump10 = new Image()
    this.jump10.src = jump21.jump10

    this.img11 = new Image()
    this.img11.src = breathe21.breathe11

    this.run11 = new Image()
    this.run11.src = run21.run11

    this.jump11 = new Image()
    this.jump11.src = jump21.jump11

    this.img12 = new Image()
    this.img12.src = breathe21.breathe12

    this.run12 = new Image()
    this.run12.src = run21.run12

    this.jump12 = new Image()
    this.jump12.src = jump21.jump12

    this.img13 = new Image()
    this.img13.src = breathe21.breathe13

    this.run13 = new Image()
    this.run13.src = run21.run13

    this.jump13 = new Image()
    this.jump13.src = jump21.jump13

    this.img14 = new Image()
    this.img14.src = breathe21.breathe14

    this.run14 = new Image()
    this.run14.src = run21.run14

    this.jump14 = new Image()
    this.jump14.src = jump21.jump14

    this.img15 = new Image()
    this.img15.src = breathe21.breathe15

    this.run15 = new Image()
    this.run15.src = run21.run15

    this.jump15 = new Image()
    this.jump15.src = jump21.jump15

  }

  draw() {

    if (frames % 24 === 0) {
      if (this.animateHelper < 15) {
        this.animateHelper += 1
      } else {
        this.animateHelper = 0
      }
    }

    if (this.status === 'Breathe') {
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
    }

    if (this.status === 'Run') {
      this.img =
        this.animateHelper === 0 ? this.run :
          this.animateHelper === 1 ? this.run2 :
            this.animateHelper === 2 ? this.run3 :
              this.animateHelper === 4 ? this.run4 :
                this.animateHelper === 5 ? this.run5 :
                  this.animateHelper === 6 ? this.run6 :
                    this.animateHelper === 7 ? this.run7 :
                      this.animateHelper === 9 ? this.run8 :
                        this.animateHelper === 10 ? this.run9 :
                          this.animateHelper === 11 ? this.run10 :
                            this.animateHelper === 12 ? this.run11 :
                              this.animateHelper === 13 ? this.run12 :
                                this.animateHelper === 13 ? this.run13 :
                                  this.animateHelper === 14 ? this.run14 : this.run15

    }

    if (this.status === 'Jump') {
      this.img =
        this.animateHelper === 0 ? this.jump :
          this.animateHelper === 1 ? this.jump2 :
            this.animateHelper === 2 ? this.jump3 :
              this.animateHelper === 4 ? this.jump4 :
                this.animateHelper === 5 ? this.jump5 :
                  this.animateHelper === 6 ? this.jump6 :
                    this.animateHelper === 7 ? this.jump7 :
                      this.animateHelper === 9 ? this.jump8 :
                        this.animateHelper === 10 ? this.jump9 :
                          this.animateHelper === 11 ? this.jump10 :
                            this.animateHelper === 12 ? this.jump11 :
                              this.animateHelper === 13 ? this.jump12 :
                                this.animateHelper === 13 ? this.jump13 :
                                  this.animateHelper === 14 ? this.jump14 : this.jump15

    }
    context.drawImage(this.img, this.x, this.y, this.img.width, this.img.height)
  }

  moveRight() {
    if (this.x > canvas.width - this.img.width - 10) return
    this.x += 10
  }

  moveUp() {
    this.y -= 100
  }

}

class CharacterTwo extends Character {
  constructor(x, y) {
    super(x, y);
    this.img = new Image
    this.img.src = breathe22.breathe1

    this.img2 = new Image
    this.img2.src = breathe22.breathe2

    this.img3 = new Image
    this.img3.src = breathe22.breathe3

    this.img4 = new Image
    this.img4.src = breathe22.breathe4

    this.img5 = new Image
    this.img5.src = breathe22.breathe5

    this.img6 = new Image
    this.img6.src = breathe22.breathe6

    this.img7 = new Image
    this.img7.src = breathe22.breathe7

    this.img8 = new Image
    this.img8.src = breathe22.breathe8

    this.img9 = new Image
    this.img9.src = breathe22.breathe9

    this.img10 = new Image
    this.img10.src = breathe22.breathe10

    this.img11 = new Image
    this.img11.src = breathe22.breathe11

    this.img12 = new Image
    this.img12.src = breathe22.breathe12

    this.img13 = new Image
    this.img13.src = breathe22.breathe13

    this.img14 = new Image
    this.img14.src = breathe22.breathe14

    this.img15 = new Image
    this.img15.src = breathe22.breathe15

  }

}