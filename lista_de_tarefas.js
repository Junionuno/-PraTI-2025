const prompt = require("prompt-sync")();

//Atividade 1:

// let number = 13

// if (number % 2 === 0){
//     console.log(`O número ${number} é par`)
// }else{
//     console.log(`O número ${number} é ímpar`)
// }



// Atividade 2:

// let age = 65

// if (age <= 12){
//     console.log('Criança')
// }else if(age >= 13 && age < 18){
//     console.log('Adolescente')
// }else if(age >= 18 && age < 60){
//     console.log('Adulto')
// }else{
//     console.log('Idoso')
// }



//Atividade 3:

// let nota = 7

// if (nota >= 7){
//     console.log('Aprovado')
// }else if(nota < 7 && nota > 4){
//     console.log('Recuperação')
// }else{
//     console.log('Reprovado')
// }



//Atividade 4:

// let escolha = prompt('Selecione uma opção: 1, 2 ou 3  ')

// switch (escolha){
//     case '1':
//         console.log('Você escolheu a opção número 1')
//         break;
//     case '2': 
//         console.log('Você escolheu a opção número 2')
//         break;
//     case '3':
//         console.log('Você escolheu a opção número 3')
//         break;    
// }



//Atividade 5:

// let peso = prompt(parseInt(console.log('Qual o seu peso: Ex: 69.2')))
// let altura = prompt(parseInt(console.log('Qual a sua altura: Ex: 1.70')))

// let IMC = peso / (altura * altura)

// console.log(`O seu IMC é de: ${IMC}`)

// if(IMC < 18.5){
//     console.log('Magreza!')
// }else if(IMC >= 18.5 && IMC <= 24.9){
//     console.log('Normal!')
// }else if(IMC >= 25 && IMC <= 29,9){
//     console.log('Sobrepeso!')
// }else if(IMC >= 30 && IMC <= 39.9){
//     console.log('Obesidade!')
// }else{
//     console.log('Obesidade grave!')
// }



//Atividade 6:

// let ladoA = prompt(parseInt(console.log('Digite o lado A: ')))
// let ladoB = prompt(parseInt(console.log('Digite o lado B: ')))
// let ladoC = prompt(parseInt(console.log('Digite o lado C: ')))

// let verificaTriangulo = undefined

// if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
//     verificaTriangulo = true
// }else{
//     verificaTriangulo = false
// }

// if (verificaTriangulo = true){
//     if (ladoA === ladoB && ladoB === ladoC){
//         console.log('É um triângulo equilátero!')
//     }else if (ladoA != ladoB && ladoB != ladoC){
//         console.log('É um triângulo escaleno!')
//     }else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
//         console.log('É um triângulo isósceles!')
//     }
// }else{
//     console.log('Não é um triângulo!')
// }



//Atividade 7: 

// let macasCompradas = 1
// let valor = undefined


// if (macasCompradas <= 12){
//     valor = 0.3
//     console.log(`O valor total das maçãs foram de ${macasCompradas * valor}`)
// }else{
//     valor = 0.25
//     console.log(`O valor total das maçãs foram de ${macasCompradas * valor}`)
// }



//Atividade 8: 

// let valor1 = 2
// let valor2 = 24

// if (valor1 === valor2){
//     console.log('VALORES IGUAIS NÃO SERÃO LIDOS!')
// }else if(valor1 < valor2){
//     console.log(`Os números em ordem crescente é: ${valor1} e ${valor2}`)
// }else {
//     console.log(`Os números em ordem crescente é: ${valor2} e ${valor1}`)
// }



//Atividade 9:

// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }



// Atividade 10:

// let number = 20

// for (let i = 0; i < 10; i++){
//     console.log(number)
// }



//Atividade 11:

// let numero = 0
// let soma = 0

// for (let i = 1; i <= 5; i++){
//     numero = parseFloat(prompt('Digite o número: '))

//     soma += numero;
// }

// console.log(soma)



//Atividade 12:

// let numero = parseInt(prompt('Digite um número para mostrar a tabuada: (1 a 10) '))

// for(let i = 1; i <= 10; i++){
//     let resultado = 0
//     resultado = numero * [i]

//     console.log(`${numero} X ${i} = ${resultado} `)
// }



//Atividade 13:

// let num
// let soma = 0
// let contador = 0

// do{
//     num = parseFloat(prompt('Digite o seu número: (0 para poder sair)'))

//     if (num != 0){
//         soma += num 
//         contador++
//     }
// }while(num !==0)

// if (contador > 0){
//     let media = soma / contador;
//     console.log(`A média aritmética é de: ${media}`)
// }else{
//     console.log('Nenhum número válido foi escolhido!')
// }



//Atividade 14:
//Feito em aula:

// function fatorial(number){
//     let fatorial = 1
//     for(let i = 1; i <= number; i++){
//         fatorial *= i
//     }
//     console.log(fatorial)
// }
// fatorial(5)



//Atividade 15:
//Feito em aula:

// function fibonacci(){
//     let a = 0, b = 1, temp
    
//     for(let i = 3; i <= 10; i++){
//         temp = a + b
//         console.log(temp)
//         a = b
//         b = temp
//     }
// }

// fibonacci()