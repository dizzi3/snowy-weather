function makeOpenWeatherRequest(props){

    const request = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + props.city.lat + '&lon=' + props.city.lon + '&units=metric&exclude=hourly,minutely,alerts&appid=' + process.env.OPEN_WEATHER_API_KEY

    fetch(request).then(response => response.json()).then(data => readRequestData(props, data));
}

function readRequestData(props, data){
    props.handleData(data);
}

function SearchForCity(props){

    makeOpenWeatherRequest(props);

}

export default SearchForCity