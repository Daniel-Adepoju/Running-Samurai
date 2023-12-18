import { restartBtn } from "./app.js"
 export function drawStatusText(context,input,player) {
    context.font = '30px monospace'
    context.fillStyle = 'black'
    context.fillText(`HP: ${Math.ceil(player.hp)}X`,53,42)
    context.fillText(`Score: ${Math.ceil(player.score)}`,53,72)


    context.fillStyle = 'white'
    context.fillText(`HP: ${Math.ceil(player.hp)}X`,50,40)
    context.fillText(`Score: ${Math.ceil(player.score)}`,50,70)

    if(player.gameOver) {
  context.font = '17px monospace'
  context.fillStyle = 'darkblue'
  context.fillText(`Game Over`,player.gameWidth/2.5,120) 
  context.fillStyle = 'white'
  context.fillText(`Game Over`,player.gameWidth/2.51,121)
restartBtn.classList.remove('hide')
}
}
