function dividir(num) {
    // console.log(num)
    if (num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num
    }
}
    
console.log(dividir(256))


// função recursiva é uma função que chama ela mesma. 