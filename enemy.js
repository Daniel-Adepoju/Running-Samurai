
const enemyImgs = ['enemyImg','enemyImg2','enemyImg3']
 
export default class Enemy {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.image = document.getElementById(enemyImgs[Math.floor(Math.random() * 3)])
        this.width =  896/7
        this.height = 128
        this.x = this.gameWidth - this.width
        this.y = this.gameHeight - this.height
        this.frameX = 0
        this.frameY = 0
        this.maxFrame = 0 
        this.speed = 0
        this.maxSpeed = Math.floor(Math.random() * -7 - 2)
        this.fps = 9
        this.frameTimer = 0
        this.frameInterval = 1000 / this.fps
        this.markedForDeletion = false
      }
     
      draw(context, deltatime) {
        this.x += this.maxSpeed
        if (
          this.frameTimer >
          this.frameInterval
        ) {
          if (this.frameX >= this.maxFrame) {
            this.frameX = 0
          } else {
            this.frameX++
            this.frameTimer = 0
          }
        } else {
          this.frameTimer += deltatime
        }
        
        context.fillStyle = 'red'
       context.beginPath()
      context.arc(
      this.x + this.width/2,
      this.y + this.height/2,
      this.width/4,
      0,
     Math.PI * 2)
     context.stroke()
        context.drawImage(
            this.image,
            this.frameX * this.width,
            this.frameY * this.height,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
          )
    }

      update() {
   this.image === document.getElementById('enemyImg3') ? this.maxFrame = 4: this.maxFrame = 6 
       if (this.x < 0 - this.width) {
        this.markedForDeletion = true
       } 
      }
 }