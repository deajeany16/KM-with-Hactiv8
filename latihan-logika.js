function isPrime(angka) {
    let bagi = 0
    for(let i = 1; i <= angka; i++){
        if(angka%i == 0){
            bagi++
        }
    }
    if (bagi == 2) {
        return true
    } else {
        return false
    }
}

console.log(isPrime(3))
console.log(isPrime(7))
console.log(isPrime(6))
console.log(isPrime(23))
console.log(isPrime(33))