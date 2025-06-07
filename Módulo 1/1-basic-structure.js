// console.log("Hello World!")

// console.log('O termo "Zé" é comum em Belo Horizonte')

// console.log(`Geraldo Junio`)

// console.log(1.5)
// console.log(typeof(1.5))

// let name = 'Geraldo'
// var anotherName = 'Junio'
// const CITY = 'Belo Horizonte'
// //CITY = 'Salvador'  IRÁ GERAR UM ERRO POIS CITY É UMA CONST E ELA NÃO SE ALTERA

// let teste
// console.log(teste)

// let titulosDoInter = null
// console.log(titulosDoInter)

// let cursando = true
// console.log(cursando)
// console.log(typeof(cursando))

// let num1 = 6
// let num2 = 2

// console.log (num1 + num2)
// console.log (num1 - num2)
// console.log (num1 * num2)
// console.log (num1 / num2)
// console.log (num1 ** num2)
// console.log (num1 % num2)

//() -> Maior precedência
//** -> Em segundo
// * / % 
// + -

// let num = '4'
// console.log(parseInt(num) + 10)

// let counter = 2 
// counter *= 5
// console.log(++counter)
// console.log(counter)

// let counter = 1
// let step = 2

// counter += step
// counter += step
// counter += step
// counter += step
// counter += step
// counter += step

// console.log(counter)


// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 <= 5)
// console.log(10 == '10')
// console.log(10 === '10')

// let usuario = 'Jaques'
// let senha = '234'

// let autentificacao = usuario === 'Jaques' && senha === '234'
// console.log(autentificacao)

// const nota = 70

// if (nota > 60) {
//     console.log ('Aprovado')
// } else {
//     console.log ('Reprovado')
// }

// if (nota >= 90) {
//     console.log ('Aprovado com conceito máximo')
// } else if (nota >= 70){
//     console.log ('Aprovado com as calças na mão!')
// } else {
//     console.log ("Reprovado.")
// }

// const idade = 31

// if (idade >= 18 && idade <= 32){
//     console.log('Pode se inscrever')
// } else {
//     console.log('Não pode se inscrever')
// 

// let resultado = (idade >= 18 && idade <= 32) ? console.log ('Pode se inscrever') : console.log('Não pode se inscrever')

// EXERCÍCIO 1:

// let num1 = 4

// if (num1 % 2 == 0) {
//     console.log('PAR')
// }else{
//     console.log('IMPAR')
// }

// EXERCÍCIO 2:

// let num1 = 50
// let num2 = 29
// let num3 = 39

// if (num1 > num2 && num1 > num3){
//     console.log("NÚMERO 1 É MAIOR")
// }else if (num2 > num1 && num2 > num3){
//     console.log("NÚMERO 2 É MAIOR")
// }else {
//     console.log("NÚMERO 3 É MAIOR")
// }


// let a = true
// let b = false

// console.log(a && (b || !a))

// Exercício 2 aula 4:

const prompt = require("prompt-sync")();

// let escolha = prompt('Escolha um número: ')
// let num = parseInt(escolha)

// if ((num % 2) == 0){
//     console.log('Esse número não é primo, ele é par!')
// }else if (((num / 1) == num) && ((num / num) == 1)) {
//     console.log('Esse número é primo!')
// }

// Exercício 3 aulas 4:

let escolha1 = prompt('Escolha o primeiro número: ')
let num1 = parseInt(escolha1);

let escolha2 = prompt('Escolha o segundo número: ')
let num2 = parseInt(escolha2)

let opcao = prompt('Qual operação deseja realizar: x, /, -, +  ')
resultado = 0

switch (opcao) {
    case 'x':
        resultado = num1 * num2 
        break;
    case '/':
        resultado = num1 / num2
        break;
    case '+':
        resultado = num1 += num2
        break;
    case '-':
        resultado = num1 -= num2
        break
}

console.log('O resultado é: ', resultado)