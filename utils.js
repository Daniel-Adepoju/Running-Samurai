

 export function drawStatusText(context,input,player) {
    context.font = '30px monospace'
    context.fillStyle = 'black'
    context.fillText(`HP: ${Math.ceil(player.hp)}X`,53,42)
    context.fillText(`Last Input: ${input.lastKey}`,50,20)
    context.fillStyle = 'white'
    context.fillText(`HP: ${Math.ceil(player.hp)}X`,50,40)
}
