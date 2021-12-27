import citiesList from './../../res/city.list.json'

function FindMatchingCities(city){

    return citiesList.filter(c => c.name === city)

}

export default FindMatchingCities