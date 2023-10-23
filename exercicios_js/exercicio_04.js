const input = require('readline-sync')

const p2 = 2
const p3 = 3
const p5 = 5

var notaDisciplina01, notaDisciplina02, notaDisciplina03, mediaPonderada

notaDisciplina01 = parseFloat(input.question('informe a nota da disciplina 1: '))
notaDisciplina02 = parseFloat(input.question('informe a nota da disciplina 2: '))
notaDisciplina03 = parseFloat(input.question('informe a nota da disciplina 3: '))

mediaPonderada = (notaDisciplina01 * p2 + notaDisciplina02 * p3 + notaDisciplina03 * p5) / (p2 + p3 + p5)

console.log(`Média Ponderada ${mediaPonderada}`)