import axios  from "axios";

// GET request https://restcountries.com/v3.1/all
// GET request https://restcountries.com/v3.1/all?fields=name,flag,currencies,region

// 1. Installeer de dependency axios (npm install axios)
// 2. schrijf asynchroom functie
// 3. maak een GET request met axios(met await)
// 4. Try / catch blok om de errors af te vangen
// 5. Element in HTML maken, referentie opslaan vanuit JS
// 6. De data injecteren (map-methode!)

const countryList = document.getElementById('countries');


async function getCountries(){
    try{
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,currencies,region,population,continents');
        console.log(response.data);
        //countryList.innerHTML = `<li> <img src="${response.data[0].flags.svg}"> ${response.data[0].name.common} has a population of ${response.data[0].population} people</li>`;

           countryList.innerHTML = response.data.map((country)=>{

        return `<li>
        <div class="landLook">
        <img src="${country.flags.svg}"> 
        <h3 class="${regionColor(country.region)}"> ${country.name.common}</h3class>
        <p>has a population of ${country.population} people</p>
        </div>
        </li>`;
               console.log(country.continents)
        })


        }catch(e){
        console.error(e)
    }
}

void getCountries();

function regionColor(region){
    switch (region){
        case 'Africa':
            return 'African';
        case 'North America':
            return 'American';
        case 'Asia':
            return 'Asian';
        case 'Europe':
            return 'European';
        case 'Oceania':
            return 'Oceanian';

    }


}