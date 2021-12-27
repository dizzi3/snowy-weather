import { Container, Text } from '@chakra-ui/react'

function CityDataDisplay(props){

    console.log(props.data);

    return(

        <Container maxW='100%' display={props.display === true ? 'block' : 'none'}>
            {typeof props.data.main !== 'undefined' ? 
            
                <Container maxW='100%'>
                    <Text>Temperature: {props.data.main.temp}&deg;C</Text>
                    <Text>Min temp: {props.data.main.temp_min}&deg;C</Text>
                    <Text>Max temp: {props.data.main.temp_max}&deg;C</Text>
                    <Text>Feels like: {props.data.main.feels_like}&deg;C</Text>
                    <Text>Atmospheric pressure: {props.data.main.pressure}hPa</Text>
                    <Text>Humidity: {props.data.main.humidity}%</Text>
                    <Text>Wind speed: {props.data.wind.speed}m/h</Text>
                    <Text>Cloudiness: {props.data.clouds.all}%</Text>

                    

                </Container>
        
            : <></> }
            
        </Container>

    )

}

export default CityDataDisplay