// ["Somay", "oddo", "ipong"]
// ubahlah agar menjadi seperti ini
// ["Somay", "oddo", "Pipo", "ipong",]

const hp = ["Somay", "oddo", "ipong"]
hp.splice(3,0,"Pipo")
console.log(hp)

/*
    terdapat data seperti ini ["Somay", "oddo", "Pipo", "ipong",]
    ubahlah agar menjadi seperti ini ["Somay", "Semsang", "Ashus", "Pipo", "ipong",]
*/

const hp_lagi = ["Somay", "oddo", "Pipo", "ipong"]
hp_lagi.splice(1, 1, "Semsang", "Ashus")
console.log(hp_lagi)