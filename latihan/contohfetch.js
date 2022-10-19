import fetch from "node-fetch"

fetch("https://covid-193.p.rapidapi.com/statistics", {
    method: 'GET',
    mode: 'cors',
    headers: {
    'X-RapidAPI-Key': '112152885emsh438c4fa29c23b9ep1e16f2jsn4cb3ca2992c8',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
})
.then((response) => response.json())
.then((json) => console.log(json))



console.log(data.response[i].cases.active)
            console.log(data.response[i].cases.new)
            console.log(data.response[i].cases.recovered)
            console.log(data.response[i].cases.total)
            console.log(data.response[i].deaths.total)
            console.log(data.response[i].tests.total)