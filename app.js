import Player from "./player.js"
import Enemy from "./enemy.js"
import HandleInput from "./handleInput.js"
import Background from "./background.js"
import { drawStatusText } from "./utils.js"
export let background

window.addEventListener('load', () => {
let canvas = document.querySelector('canvas')
const attack = document.querySelector('#attack')
canvas.width = window.innerWidth
canvas.height = window.innerHeight - 200
let canvasWidth = canvas.width
 let canvasHeight = canvas.height
const ctx = canvas.getContext('2d')

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight - 200
    canvasWidth = canvas.width
    canvasHeight = canvas.height
    init()
})

let enemies = []
let enemyTimer = 0
let enemyInterval = 2000
let randInterval = Math.random() * 1000 + 500
function handleEnemies(deltatime) {
    if(enemyTimer > enemyInterval + randInterval) {
    enemies.push(new Enemy(canvasWidth,canvasHeight))
    enemyTimer = 0
    } else {
   enemyTimer += deltatime
    }
 enemies.forEach(enemy =>{
     enemy.draw(ctx,deltatime)
     enemy.update()
 })
 enemies = enemies.filter(enemy => !enemy.markedForDeletion)
}

let player
let input
function  init() {
    enemies = []
    player = new Player(canvasWidth,canvasHeight)
    input = new HandleInput()
    background = new Background(canvasWidth,canvasHeight)
}

  let lastime = 0
function animate(timestamp) {
    let deltatime = timestamp - lastime
    lastime = timestamp
    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    background.draw(ctx)
    background.update()
    player.draw(ctx,deltatime,enemies)
    player.update(input.lastKey,enemies)
    handleEnemies(deltatime)
    drawStatusText(ctx, input,player)
    if(!player.gameOver) 
    requestAnimationFrame(animate)
}
init()
animate(0)
})