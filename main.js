var players = ['Trivago.webp', 'Ayslan.webp', 'Predador.webp', 'Jeff.webp']
var result1, result2
var player1 = document.getElementById('player1')
var player2 = document.getElementById('player2')

function sorteia() {
    result1 = Math.round(Math.random() * 3)
    result2 = Math.round(Math.random() * 3)
    console.log(result1)
 
    if (result1 == result2) {result2++}
    console.log(result2)

    player1.src = `${players[result1]}`
    player2.src = `${players[result2]}`


    console.log (`${players[result1]} e ${players[result2]}`)
}