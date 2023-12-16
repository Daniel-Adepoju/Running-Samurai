import  {animationData} from './animationData.js'

const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight - 80
let canvasWidth = canvas.width
 let canvasHeight = canvas.height
const ctx = canvas.getContext('2d')
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvasWidth = canvas.width
    canvasHeight = canvas.height
})
const samuraiImage = new Image()
samuraiImage.src ='./images/spritesheet.png'
// divide img width by num of columns
const spriteWidth = 1538/12
//divide img height y num of rows
const spriteHeight = 1300/10


let frameRate = 0
let staggerFrame = 4
const spriteAnimation = []
const animationStates = animationData
 animationStates.forEach((state,index) => {
    let frames = {
        loc:[]
    }
    for(let i =0; i < state.frames; i++) {
    let positionX = i * spriteWidth
    let positionY = index * spriteHeight
    frames.loc.push({x:positionX,y:positionY})
    }
    spriteAnimation[state.name] = frames
 })
 let playerStatus ='idle'
 console.log(spriteAnimation)
function animate() {
    ctx.clearRect(0,0,canvasWidth,canvasHeight)
    let position = Math.floor(frameRate/staggerFrame) % spriteAnimation[playerStatus].loc.length
    let frameX = spriteAnimation[playerStatus].loc[position].x
    let frameY = spriteAnimation[playerStatus].loc[position].y
    ctx.drawImage(samuraiImage, frameX, frameY,spriteWidth,spriteHeight,0,canvasHeight/2,spriteWidth,spriteHeight)
    frameRate++
    requestAnimationFrame(animate)
}
animate()
