import { City } from 'country-state-city';

function FindMatchingCities(city){

    return City.getAllCities().filter(c => c.name === city)

}

export default FindMatchingCities