let aluno = {
    nome : 'Arthur',
    idade : '21',
    curso : 'Engenharia civil',
    notas : [7, 8, 1, 9],
    
    media : function(){
        return this.notas.reduce((soma, n) => soma + n, 0) / this.notas.length
    }
}

console.log('O aluno(a) ' + aluno.nome + ' do curso ' + aluno.curso + ' tem média de: ' + aluno.media())

let carro = {
    marca: 'Chevrolet',
    modelo: 'Vectra',
    ano: 2000
}

console.log(`O carro é um ${carro.marca} ${carro.modelo} de ${carro.ano}`)


let pessoa = {
    nome : 'Karinny',
    idade : 21,
    
    saudar : function(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

pessoa.saudar()


let usuario = {
    nome : 'Karinny Meire',
    idade: 21,
    endereco: {
        rua : 'Rua José Gonçalves de Melo',
        numero : 45,
        cidade : 'Belo Horizonte'
    },
    
    verificarIdade : function(){
         if (this.idade >= 18){
        console.log('Usuário maior de idade')
    }else{
        (console.log('Usuário menor de idade'))
    }
    }
}

usuario.verificarIdade()
console.log(`${usuario.nome} mora em ${usuario.endereco.cidade}`)

// aula 12 Objects 

let livros = [
    {titulo: 'Código limpo', autor: 'Martin', ano: 2019},
    {titulo: 'The gunslinger', autor: 'Stephen king', ano: 1991},
    {titulo: 'Laranja Mecânica', autor: 'Nicole', ano: 1810},
    {titulo: 'Pequeno Príncipe', autor: 'Fabiana', ano: 1903},
    {titulo: 'As crônicas Marciana', autor: 'Bradbury', ano: 2010}
]

for (let livro of livros){
    if (livro.ano < 2000){
        console.log(livro)
    }
}

let filmes = [
    {titulo: 'Velozes e Furiosos', genero: 'Ação'},
    {titulo: 'Harry Potter', genero: 'Ficção'},
    {titulo: 'Senhor dos Anéis', genero: 'Ficção'},
    {titulo: 'Jogo da Imitação', genero: 'Histórico'},
    {titulo: 'Ilha do Medo', genero: 'Terror'},
    {titulo: 'Pulp Fiction', genero: 'Ação'},
    {titulo: 'DVD do Renight', genero: 'Histórico'},
    {titulo: 'Ai, que vida!', genero: 'Comédia'},
    {titulo: 'Kill Bill', genero: 'Ação'}
]

let contagemGenero = {}

filmes.forEach(filme =>{
    if(contagemGenero[filme.genero]){
        contagemGenero[filme.genero]++
    }else{
        contagemGenero[filme.genero] = 1
    }
})

console.table(contagemGenero)

let pessoas = ['Geraldo', 'Karinny', 'Terezinha', 'Ailton','João Guilherme']

let contagemPessoas = 0

pessoas.forEach(pessoa =>{
    contagemPessoas += 1
    console.log(`${contagemPessoas}. Olá, ${pessoa}! Seja Bem-vindo(a)!`)
})

let alunos = [
    {aluno: 'Geraldo', nota: 8,},
    {aluno: 'Karinny', nota: 10},
    {aluno: 'Marcos', nota: 3},
    {aluno: 'Luiz', nota: 6}
]

function avaliarAluno(aluno){
    if (aluno.nota <= 7){
        console.log(`${aluno.aluno}, Nota: ${aluno.nota} APROVADO!`)
    }else{
        console.log(`${aluno.aluno}, Nota: ${aluno.nota} REPROVADO!`)
    }
}

alunos.forEach(aluno =>{
    avaliarAluno(aluno)
})

function fatorial(number){
    let fatorial = 1
    for(let i = 1; i <= number; i++){
        fatorial *= i
    }
    console.log(fatorial)
}
fatorial(5)

function fibonacci(){
    let a = 0, b = 1, temp
    
    for(let i = 3; i <= 10; i++){
        temp = a + b
        console.log(temp)
        a = b
        b = temp
    }
}

fibonacci()