// function fatorial(n) {
//   if (n === 1) {
//     return 1; // caso base
//   } else {
//     return n * fatorial(n - 1); // chamada recursiva
//   }
// }

// console.log(fatorial(5)); 


// function contagemRegressiva(n){
//     if(n === 0){
//         console.log('FIM!');
//     }else{
//         console.log(n)
//         contagemRegressiva(n - 1)
//     }
// }

// console.log(contagemRegressiva(10))

// function contagem(n){
//     if(n === 0){
//         console.log('FIM!')
//     }else{
//         console.log(n)
//         contagem(n - 1)
//     }
// }

// console.log(contagem(10))

// function contagemRegressiva(n, atual = 1){
//     if(n === atual){
//         console.log(n)
//         console.log('FIM')
//     }else{
//         console.log(atual)
//         contagemRegressiva(n, atual + 1)
//     }
// }

// contagemRegressiva(10)


// function fatorial(n){
//     if(n === 1){
//       return 1
//     }else{
//         return n * fatorial(n - 1)
//     }
// }

// console.log(fatorial(5))


// function soma(n, atual = 0){
//     if (n === atual){
//         return 0
//     }else{
//         return n + soma(n -1)
//     }
// }

// console.log(soma(10))


// function potencia(b, e){
//     if(e === 0){
//         return 1
//     }else{
//         return b * potencia(b, e - 1)
//     }
// }

// console.log(potencia(7, 0))


// function soma(n){
//     if (n === 1){
//         return 1
//         console.log("FIM")
//     }else{
//         return n + soma(n - 1)
//     }
// }

// console.log(soma(4))


// function contaN(n){
//     if(n === 0){
//         console.log('FIM!')
//     }else{
//         console.log(n)
//         contaN(n - 1)
//     }
// }

// console.log(contaN(10))



// function contaAte(n, atual = 1){
//     if(atual > n){
//         console.log('FIM!')
//     }else{
//         console.log(atual)
//         contaAte(n, atual + 1)
//     }
// }

// contaAte(10)


// function contarAte(n, atual = 0){
//     if(n < atual){
//         console.log('FIM')
//     }else{
//         console.log(atual)
//         contarAte(n, atual + 1)
//     }
// }
// contarAte(10)


// function contagemRegressiva(n){
//     if(n <= 0){
//         console.log('FELIZ ANO NOVO!')
//     }else{
//         console.log(n)
//         contagemRegressiva(n - 1)
//     }
// }

// contagemRegressiva(25)