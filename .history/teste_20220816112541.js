console.log(module)
const aluno = {
    nome: "joao",
    carro: {
        nome: 'ferrari'
    }
}

export aluno= aluno.carro

console.log(this)
console.log(aluno.export)