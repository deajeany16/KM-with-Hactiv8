function getdataCovid(event){
    const cntry = document.getElementById('cntry').value

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
        for (let i = 0; i < data.response.length; i++) {
            if (data.response[i].country == cntry) {
                document.getElementById('active').innerHTML = data.response[i].cases.active
                document.getElementById('neww').innerHTML = data.response[i].cases.new 
                document.getElementById('recovered').innerHTML = data.response[i].cases.recovered
                document.getElementById('total').innerHTML = data.response[i].cases.total
                document.getElementById('rip').innerHTML = data.response[i].deaths.total
                document.getElementById('test').innerHTML = data.response[i].tests.total
                document.getElementById('country').innerHTML = data.response[i].country
                document.getElementById('days').innerHTML = data.response[i].day
            }
        }
    })
    .catch(err => alert(err));
}