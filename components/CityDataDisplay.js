import { Container, Text, Box } from '@chakra-ui/react'

function CityDataDisplay(props){

    return(

        <Container maxW='100%' display={props.display === true ? 'block' : 'none'}>
            {typeof props.data.main !== 'undefined' ? 
            
                <Container maxW='100%' fontSize='1.15em' fontFamily='Roboto' color='#F3F9FF'>
                    <Text>Temperature: <ValueText>{props.data.main.temp}</ValueText><UnitText>&deg;C</UnitText></Text>
                    <Text>Min temp: <ValueText>{props.data.main.temp_min}</ValueText><UnitText>&deg;C</UnitText></Text>
                    <Text>Max temp: <ValueText>{props.data.main.temp_max}</ValueText><UnitText>&deg;C</UnitText></Text>
                    <Text>Feels like: <ValueText>{props.data.main.feels_like}</ValueText><UnitText>&deg;C</UnitText></Text>
                    <Text>Atmospheric pressure: <ValueText>{props.data.main.pressure}</ValueText><UnitText>hPa</UnitText></Text>
                    <Text>Humidity: <ValueText>{props.data.main.humidity}</ValueText><UnitText>%</UnitText></Text>
                    <Text>Wind speed: <ValueText>{(props.data.wind.speed * 3.6).toFixed(2)}</ValueText><UnitText>km/h</UnitText></Text>
                    <Text>Cloudiness: <ValueText>{props.data.clouds.all}</ValueText><UnitText>%</UnitText></Text>

                </Container>
        
            : <></> }
            
        </Container>

    )

}

const ValueText = (props) => {
    return <Text fontFamily='Ubuntu' fontSize='.95em' fontWeight='500' display='inline' color='#00C6BB'>{props.children}</Text>
}

const UnitText = (props) => {
    return <Text fontFamily='Ubuntu' fontSize='.95em' fontWeight='500' display='inline' color='#87B1FF'>{props.children}</Text>
}

export default CityDataDisplay