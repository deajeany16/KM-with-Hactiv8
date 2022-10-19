function compareNumbers (angka1, angka2){
    if (angka2 > angka1) {
        return true
    } else if (angka1 < angka2) {
        return false
    } else {
        return -1
    }
}

console.log(compareNumbers(5,8))
console.log(compareNumbers(5,3))
console.log(compareNumbers(4,4))
console.log(compareNumbers(3,3))
console.log(compareNumbers(17,2))