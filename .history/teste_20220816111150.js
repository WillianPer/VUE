console.log(module)
const aluno = {
    nome: "joao",
    carro: {
        nome: 'ferrari'
    }
}

aluno.export = aluno

console.log(this)
console.log(aluno)