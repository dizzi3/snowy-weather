function makeOpenWeatherRequest(props){

    const request = 'https://api.openweathermap.org/data/2.5/weather?lat=' + props.city.lat + '&lon=' + props.city.lon + '&units=metric&appid=' + process.env.OPEN_WEATHER_API_KEY

    fetch(request).then(response => response.json()).then(data => readRequestData(props, data));
}

function readRequestData(props, data){
    
    if(data.cod === 200)
        props.handleData(data);

}

function SearchForCity(props){

    makeOpenWeatherRequest(props);

}

export default SearchForCity