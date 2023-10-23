const input = require(`readline-sync`)

var nome = input.question(`Informe seu nome `)
var sobrenome = input.question(`Informe seu sobrenome `)
//console.log('Olá ' +nome+ +sobrenome)
console.log(`Olá, ${nome} ${sobrenome}`)