import { City } from 'country-state-city';

function FindMatchingCities(city){

    return City.getAllCities().filter(c => c.name.toUpperCase() === city.toUpperCase())

}

export default FindMatchingCities