//instanciando objeto Produto

function Produto(nome)
{
    this.nome = nome
}

const p1 = new Produto('Caneta')
const p2 = new Produto('Caderno')

console.log(p1.nome, p2.nome)
console.log(typeof p1)
console.log(typeof p2)