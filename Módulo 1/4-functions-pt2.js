// console.log('Enzo Grigol'.length)
// console.log('Enzo Grigol'.charAt(0)) 
// console.log('Enzo Grigol'.indexOf('o')) 
// console.log('Enzo Grigol'.replace('Enzo', 'Guilherme')) 
// console.log('Enzo Grigol'.substr(1, 8)) 
// console.log('Enzo Grigol'.toUpperCase())
// console.log('Enzo Grigol'.toLowerCase())
// console.log('-'+ ' Denize'.trim()+'-') 


// console.log(Math.ceil(9.5))//Arredonda para cima
// console.log(Math.floor(9.5))//Arredonda para baixo
// console.log(Math.round(9.4))//Arredonda normalmente
// console.log(Math.sqrt(81))
// console.log(Math.pow(81, 2))
// console.log(Math.cbrt(81))
// console.log(Math.abs(81.3123123))
// console.log(Math.random() * 100)

let date = new Date()

console.log(date.getDate())
console.log(date.getMonth() + 1)
console.log(date.getFullYear())
console.log(date.toString())

let date1 = new Date(2025, 7, 5)
let date2 = new Date(2002, 7, 5)

console.log(date1.toString())
console.log(date2.toString())

console.log(date1.getTime())
console.log(date2.getTime())

let milissegundosEntreDatas = Math.abs((date1.getTime()) - date2.getTime())

console.log(milissegundosEntreDatas)

let milissegundosPorDia = (1 * 24 * 60 * 60 * 1000)

console.log(`A diferença entre as datas é de ${Math.ceil(milissegundosEntreDatas/milissegundosPorDia), dias}`)

function reverseString(str){
    return str.split().reverse().join('')
}

console.log(reverseString('Olá, mundo!'))

function formatDate(date){
    let day = date.getDate().toString().padStart(2, '0')
    let month = (date.getMonth() + 1).toString().padStart(2, '0')
    let year = date.getFullYear()
}

console.log(formatDate(date))

function randomBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(rancdomBetween(1, 5))


function countVowels(str){
    let vowels = str.match(/[aeiou]/gi)
    return vowels ? vowels.length : 0
}

console.log(countVowels('Gremio tetracampeao da libertadores'))