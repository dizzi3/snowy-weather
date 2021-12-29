import { Container, HStack, Text, VStack, Center } from '@chakra-ui/react'
import WeatherImage from '../Helpers/WeatherImage'
import { ValueText, UnitText } from './StyledText'

function TodayData(props){

    const data = props.data

    return(
        <Container maxW='100%' w={{sm: 'fit-content', md: '33%'}} fontSize='1.1em' fontFamily='Roboto' color='#fff' bg='#464C58' 
                    borderRadius='1em' textAlign='left' p={{sm: '.8em', md: '1em'}}>
            <HStack>
                <Container>
                    <Text fontSize='1.7em' fontWeight='500'>Today</Text>
            
                    <HStack>
                        <WeatherImage name={data.current.weather[0].icon}/>
                        <Text fontSize='.83em'>{data.current.weather[0].description}</Text>
                    </HStack>

                    <Text>Temperature: <ValueText>{data.current.temp}</ValueText><UnitText>&deg;C</UnitText></Text>
                    <Text>Feels like: <ValueText>{data.current.feels_like}</ValueText><UnitText>&deg;C</UnitText></Text>
                    <Text>Wind speed: <ValueText>{(data.current.wind_speed * 3.6).toFixed(2)}</ValueText><UnitText>km/h</UnitText></Text>
                    <Text>Cloudiness: <ValueText>{data.current.clouds}</ValueText><UnitText>%</UnitText></Text>
                    <Text>Humidity: <ValueText>{data.current.humidity}</ValueText><UnitText>%</UnitText></Text>
                    <Text>Atmospheric pressure: <ValueText>{data.current.pressure}</ValueText><UnitText>hPa</UnitText></Text>
                    <Text>Moon phase: <ValueText>{data.daily[0].moon_phase * 100}</ValueText><UnitText>%</UnitText></Text>
                    <Text>Probability of precipitation: <ValueText>{data.daily[0].pop * 100}</ValueText><UnitText>%</UnitText></Text>
                </Container>

                <VStack w='85%' pt={{sm: '0em', md: '1em'}}>

                    <Container bg='#777D8A' borderRadius='1em' maxW='100%' w='100%' fontSize='.82em' py='.5em'>
                        <Center fontSize='1.2em' pb='.2em'>Temperature</Center>

                        <HStack>

                            <VStack alignItems='flex-start' w='100%' spacing='.1em'>
                                <Text>Morning: <ValueText>{data.daily[0].temp.morn}</ValueText><UnitText>&deg;C</UnitText></Text>
                                <Text>Day: <ValueText>{data.daily[0].temp.day}</ValueText><UnitText>&deg;C</UnitText></Text>
                                <Text>Evening: <ValueText>{data.daily[0].temp.eve}</ValueText><UnitText>&deg;C</UnitText></Text>
                                <Text>Night: <ValueText>{data.daily[0].temp.night}</ValueText><UnitText>&deg;C</UnitText></Text>
                            </VStack>

                            <VStack alignItems='flex-end' w='fit-content' spacing='.1em'>
                                <Text>Max: <ValueText>{data.daily[0].temp.max.toFixed(2)}</ValueText><UnitText>&deg;C</UnitText></Text>
                                <Text>Min: <ValueText>{data.daily[0].temp.min.toFixed(2)}</ValueText><UnitText>&deg;C</UnitText></Text>
                            </VStack>

                        </HStack>

                    </Container>

                    <Container bg='#777D8A' borderRadius='1em' fontSize='.8em' py='.5em'>
                        <Center fontSize='1.2em' pb='.2em'>Feels like temperature</Center>

                        <VStack spacing='.1em' alignItems='flex-start'>
                            <Text>Morning: <ValueText>{data.daily[0].feels_like.morn}</ValueText><UnitText>&deg;C</UnitText></Text>
                            <Text>Day: <ValueText>{data.daily[0].feels_like.day}</ValueText><UnitText>&deg;C</UnitText></Text>
                            <Text>Evening: <ValueText>{data.daily[0].feels_like.eve}</ValueText><UnitText>&deg;C</UnitText></Text>
                            <Text>Night: <ValueText>{data.daily[0].feels_like.night}</ValueText><UnitText>&deg;C</UnitText></Text>
                        </VStack>

                    </Container>

                </VStack>

            </HStack>
        </Container>
    )

}



export default TodayData