const input = require('readline-sync')

var avelocidade, tempo, distancia

distancia = 435

velociade = parseFloat(input.question('informe a sua velocidade: '))

tempo = distancia / velocidade

console.log(`Na velocidade: ${velocidade.toFixed(2)} m/s levará o tempo de ${tempo}`)