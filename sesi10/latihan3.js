const datadiri = {
    nama_depan : "Dea",
    nama_belakang : "Jeany",
    hobi : ["Makan", "Tidur"],
    angka_favorit : 2,
    memakai_kacamata : true,
}

console.log(datadiri)

const nama_lengkap = datadiri.nama_depan + " " + datadiri.nama_belakang
console.log(nama_lengkap)

datadiri.angka_favorit = 3
console.log(datadiri.angka_favorit)

datadiri.hobi.push("Coding")
console.log(datadiri.hobi)

datadiri.lulusan = "Hactiv8"
console.log(datadiri)

datadiri.hobi.forEach(hobi => {
    console.log(hobi)
})

console.log(Object.keys(datadiri))
console.log(Object.values(datadiri))

Object.keys(datadiri).forEach(i => {
    console.log(i, datadiri[i])
})