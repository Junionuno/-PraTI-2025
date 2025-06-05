let num = undefined

while (num != 0){
    num = Number(prompt('Digite um número: '))
    if (num > 0){
        console.log('POSITIVO')
    }else if (num == 0){
        break
    }else{
        console.log('NEGATIVO')
    }
}