/*console.log(axios.get("https://api.coincap.io/v2/assets"));

console.log("test!");*/


const searchButton = document.getElementById("search");

searchButton.addEventListener("click", async () =>{
    const responceApi = await axios.get ("https://restcountries.eu/rest/v2/name/Zimbabwe");

        console.log(responceApi);
});

//Maak op basis van de response de volgende string en log dit in de console:
//[country-naam] is situated in [subarea-name]. It has a population of [amount] people.

const apiUrl = "https://restcountries.eu/rest/v2/name/Belgie"

async function getNames(){
    const namesGet = await fetch(apiUrl);
    const names = await namesGet.json();
    //console.log(names[0].nativeName + " is situated in " + names[0].subregion + ". It has a population of " + names[0].population + " people.")
    return names[0].nativeName + " is situated in " + names[0].subregion + ". It has a population of " + names[0].population + " people."
}
console.log (getNames())


//Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden,
// een string maakt. In een land kunnen één of twee currencies gebruikt worden:
//1 valuta: and you can pay with [currency]'s
// 2 valuta's: and you can pay with [currency]'s and [currency]'s
/*async function getMoney () {
    const getCurrency = await fetch(apiUrl);
    const currencyGet = await getCurrency.json();
    let doos = (currencyGet[length].currencies)
    console.log (doos)
    }

getMoney()*/


async function getMoney () {
    const getCurrency = await fetch(apiUrl);
    const currencyGet = await getCurrency.json();
    let doos = (currencyGet[length].currencies)
    const punani = doos.filter ((check) => {
        console.log (check.name)})
}
getMoney()


//Zorg ervoor dat de opgehaalde data op de volgende manier wordt toegevoegd aan de DOM:
/*[IMAGE: flag]
[country-name]
[country-naam] is situated in [subarea-name]. It has a population of [amount] people.
The capital is [city] and you can pay with [currency]'s
They speak [language], [language] and [language]*/

async function getFlag(){
    const responce = await fetch("https://restcountries.eu/data/bel.svg")
    const blob = await responce.blob()
    document.getElementById('flag').src = URL.createObjectURL(blob)
}

getFlag()

async function dataGet() {
    const getData = await fetch(apiUrl);
    const data = await getData.json();
    console.log (data[0].capital);

}
dataGet()

