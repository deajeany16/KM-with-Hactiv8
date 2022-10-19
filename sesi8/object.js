const siswa = {
    nama : 'Dea' ,
    programstudi : 'Teknik Informatika',
    smt : '5',
    matkul : ['PTI', 'Statistik', 'Kalkulus']
}
console.log(siswa.nama)
console.log(siswa.programstudi)
console.log(siswa.matkul)
siswa.matkul[1] = 'PBO'
console.log(siswa.matkul)
siswa.matkul[3] = 'Jarkom'
console.log(siswa.matkul)