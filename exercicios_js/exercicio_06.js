const input = require('readline-sync')

var altura, largura, profundidade

altura = parseFloat(input.question('informe a altura: '))
largura = parseFloat(input.question('informe a largura: '))
profundidade = parseFloat(input.question('informe a profundidade: '))


console.log(`O volume é ${altura * largura * profundidade} cm`)