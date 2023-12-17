export const state = {
  attack1: 0,
  attack2: 1,
  attack3: 2,
  dead: 3,
  hurt: 4,
  idle: 5,
  jump: 6,
  run: 7,
  shield: 8,
  walk: 9,
}
import { background } from "./app.js"

class State {
  constructor(state) {
    this.state = state
  }
}

export class Idle extends State {
  constructor(player) {
    super('idle')
    this.player = player
  }

  enter() {
    this.player.frameY = state.run
    this.player.maxFrame = 7
    background.speed = 3
  }
  handleInput(input) {
    if (input === 'PRESS a') {
      this.player.setState(state.attack1)
      // background.speed = 0
    }
    if (input === 'PRESS q') {
      this.player.setState(
        state.attack2
      )
      // background.speed = 0
    }
    if(input === 'PRESS z') {
      this.player.setState(state.attack3)
      // background.speed = 0
    }
    if(input === 'PRESS s') {
      this.player.setState(state.shield)
      background.speed = 0
    }
  
    if (input === 'PRESS ArrowUp') {
      this.player.setState(state.jump)
    }
  }
}

export class Attack1 extends State {
  constructor(player) {
    super('attack1')
    this.player = player
  }
  enter() {
    this.player.frameY = state.attack1
    this.player.maxFrame = 5
  }
  handleInput(input) {
    if (input === 'RELEASE a') {
      this.player.setState(state.idle)
    }
  }
}

export class Attack2 extends State {
  constructor(player) {
    super('attack2')
    this.player = player
  }
  enter() {
    this.player.frameY = state.attack2
    this.player.maxFrame = 3
  }
  handleInput(input) {
    if (input === 'RELEASE q') {
      this.player.setState(state.idle)
    }
  }
}

export class Run extends State {
  constructor(player) {
    super('run')
    this.player = player
  }
  enter() {
    this.player.speed =
    this.player.maxSpeed
    this.player.frameY = state.run
    this.player.maxFrame = 7
  }
  handleInput(input) {
    if (input === 'RELEASE ArrowRight') {
      this.player.speed = 0
      this.player.setState(state.idle)
    }
    if (input === 'PRESS ArrowUp') {
      this.player.setState(state.jump)
    }
  }
}

export class Attack3 extends State {
  constructor(player) {
    super('attack3')
    this.player = player
  }
  enter() {
    this.player.frameY = state.attack3
    this.player.maxFrame = 2
  }
  handleInput(input) {
    if (input === 'RELEASE z') {
      this.player.setState(state.idle)
    }
  }
}

export class Jump extends State {
  constructor(player) {
    super('jump')
    this.player = player
  }
  enter() {
    this.player.frameY = state.jump
    this.player.maxFrame = 11
    if (this.player.onGround()) {
      this.player.dy -= 13.4
    }
  }
  handleInput(input) {
    if(input === 'PRESS a') {
      this.player.setState(state.attack1)
    }
    if(input === 'PRESS q') {
      this.player.setState(state.attack2)
    }
    if(input === 'PRESS z') {
      this.player.setState(state.attack3)
    }
    if (this.player.onGround()) {
      this.player.speed = 0
      this.player.setState(state.idle)
    }
  }
}

export class Dead extends State {
  constructor(player) {
    super('dead')
    this.player = player
  }
  enter() {
    this.player.frameY = state.dead
    this.player.maxFrame = 2
   setTimeout(()=>{
    this.player.gameOver = true
   },90) 
  }
  handleInput(input) {}
}

export class Hurt extends State {
  constructor(player) {
    super('hurt')
    this.player = player
  }
  enter() {
    this.player.frameY = state.hurt
    this.player.maxFrame = 7
  }
  handleInput() {}
}

export class Shield extends State {
  constructor(player) {
    super('shield')
    this.player = player
  }
  enter() {
    this.player.frameY = state.shield
    this.player.maxFrame = 1
  }
  handleInput(input) {
    if (input === 'RELEASE s') {
      this.player.setState(state.idle)
    }
  }
}
