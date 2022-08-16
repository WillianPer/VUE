console.log(module)
const aluno = {
    nome: "joao",
    carro: {
        nome: 'ferrari'
    }
}

aluno.export = carro

console.log(this)
console.log(aluno)