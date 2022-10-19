import fetch from "node-fetch"

let cntry = 'nuie'

fetch("https://covid-193.p.rapidapi.com/statistics", {
    method: 'GET',
    mode: 'cors',
    headers: {
    'X-RapidAPI-Key': '112152885emsh438c4fa29c23b9ep1e16f2jsn4cb3ca2992c8',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
})
.then((response) => response.json())
.then((data) => {
    console.log(data.response[1].country)
    console.log(data.response[1].cases.active)
    console.log(data.response[1].cases.new)
    console.log(data.response[1].cases.recovered)
    console.log(data.response[1].cases.total)
    console.log(data.response[1].deaths.total)
    console.log(data.response[1].tests.total)
})
.catch(err => console.log(err));

