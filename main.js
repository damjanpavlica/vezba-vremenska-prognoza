const ispis = document.getElementById('ispis')
const dugme = document.getElementById('dugme')

function ucitajPrognozu() {
  const idGrada = 615702  // Paris
  const proxyServer = 'https://proxy-requests.herokuapp.com/' // zbog CORS ogranicenja
  const apiUrl = `https://www.metaweather.com/api/location/${idGrada}/`
  
  fetch(proxyServer + apiUrl)
    .then(response => response.json())
    .then(data => {
      ispis.innerText = `Vremenska prognoza za ${data.title} je ${data.consolidated_weather[0].the_temp.toFixed(1)} stepeni.`
      console.log(data.consolidated_weather)
    })
}

dugme.addEventListener('click', ucitajPrognozu)