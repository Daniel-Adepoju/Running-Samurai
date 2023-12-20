export default class Background {
 constructor(gameWidth,gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight  
    this.image =  document.getElementById('backimg')
    this.width = this.gameWidth
    this.height = this.gameHeight
    this.x = 0
    this.y = 0
    this.speed = 3
    this.fps = 15 % this.width
    this.frameTimer = 0
    this.frameInterval = 1000 / this.fps
 }
 

  draw(ctx) {
 ctx.drawImage(this.image,this.x - 99,this.y,this.width,this.height)
 ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
 ctx.drawImage(this.image,this.x + this.width,this.y,this.width,this.height)
 }
 update() {
  this.x -= this.speed
  if (this.x < 0 - this.width) {
    this.x = 0
  }
  if(this.x > 0) {
    this.x = 0
  }
 }
}