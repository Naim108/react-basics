const loadCountries=()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}
const displayCountries=countries=>{
    // console.log(countries)
    const container=document.getElementById("countries")
    const countryHTML=countries.map(country=>getCountryHTML(country))
    container.innerHTML=countryHTML.join(' ')
}
const getCountryHTML=country=>{
    return `
    <div>
    <h2>${country.name} </h2>
    <h4>${country.capital}</h4>
    <img src="${country.flag}"
    </div>   `
}
loadCountries()