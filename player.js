import { animationData } from './animationData.js'
import Background from './background.js'
import {
  Idle,
  Attack1,
  Attack2,
  Run,
  Dead,
  Attack3,
  Hurt,
  Shield,
  Jump,
} from './state.js'
import { background } from './app.js'
export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
    this.states = [
      new Attack1(this),
      new Attack2(this),
      new Attack3(this),
      new Dead(this),
      new Hurt(this),
      new Idle(this),
      new Jump(this),
      new Run(this),
      new Shield(this),
    ]
    this.currentState = this.states[5]
    this.image = document.getElementById('img')
    this.width = 1540 / 12
    this.height = 2604 / 20
    this.x = 1
    this.y = this.gameHeight - this.height
    this.frameX = 0
    this.frameY = 7
    this.maxFrame = 7
    this.speed = 0
    this.maxSpeed = 7
    this.fps = 30
    this.frameTimer = 0
    this.frameInterval = 1000 / this.fps
    this.dy = 0
    this.weight = 0.4
    this.hp = 2
    this.gameOver = false
    this.score = 0
  }
  draw(context, deltatime,enemies) {
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX >= this.maxFrame) {
        this.frameX = 0
      } else {
        this.frameX++
        this.frameTimer = 0
      }
     
    } else {
      this.frameTimer += deltatime
    }
    
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
  update(input,enemies) {
    enemies.forEach(enemy => {
      const dx = enemy.x - this.x
      const dy = enemy.y - this.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < enemy.width/4 + this.width/4) {
   let hurtTime  = setTimeout(() => {
          this.setState(4)
          if(this.hp <= 0) {
            this.hp = 0
            clearTimeout(hurtTime)
            this.setState(3)
          }
        },1)
        this.hp = this.hp - 0.05
        if(input === 'PRESS a') {
          clearTimeout(hurtTime)
          this.setState(0)
          enemy.markedForDeletion = true
          this.gameOver = false 
          this.score += 1
        }
      if(input === 'PRESS q') {
        clearTimeout(hurtTime)
        this.setState(1)
         enemy.markedForDeletion = true
         this.gameOver = false
         this.score += 1
      }
      if(input === 'PRESS z') {
        clearTimeout(hurtTime)
        this.setState(2)
        enemy.markedForDeletion = true
        this.gameOver = false
        this.score += 1
      }
      
    } else {
      this.setState(5)
    }
     });
    
    if (this.x >= this.gameWidth - this.width) {
      this.x = this.gameWidth - this.width
    }
    if(this.x <= 0) {
        this.x = 0
    }
    this.y += this.dy
    if(this.y >= this.gameHeight - this.height) {
      this.y = this.gameHeight - this.height
    }
    if(!this.onGround()) {
        this.dy += this.weight
    } else {
        this.dy = 0
    }
    
    this.currentState.handleInput(input)
}
onGround() {
    return this.y >= this.gameHeight - this.height
}
  setState(state) {
    this.currentState = this.states[state]
    this.currentState.enter()
  }
}
