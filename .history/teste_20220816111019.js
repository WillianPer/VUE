console.log(module)
const aluno = {
    nome: "joao",
    carro: {
        nome: 'ferrari'
    }
}

aluno.export = aluno.carro.nome

console.log(this)