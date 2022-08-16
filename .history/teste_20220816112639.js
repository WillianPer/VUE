console.log(module)
const aluno = {
    nome: "joao",
    carro: {
        nome: 'ferrari'
    }
}

this = aluno.carro

console.log(this)
console.log(aluno.export)