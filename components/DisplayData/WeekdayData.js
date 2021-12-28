import { Text, Container, HStack, VStack, Center } from '@chakra-ui/react'
import { ValueText, UnitText } from './StyledText'
import getDayOfWeekFromTimestamp from './../Helpers/GetDayOfWeekFromTimestamp'
import WeatherImage from '../Helpers/WeatherImage';

function WeekdayData(props){

    const data = props.data;

    return(
        <Container fontSize='1.1em' fontFamily='Roboto' color='#fff' bg='#464C58' borderRadius='1em' textAlign='left' p='1em' mx='1em'>
            <HStack>
                <Container>
                    <Text fontSize='1.7em' fontWeight='500'>{getDayOfWeekFromTimestamp(data.dt)}</Text>
            
                    <HStack>
                        <WeatherImage name={data.weather[0].icon}/>
                        <Text fontSize='.83em'>{data.weather[0].description}</Text>
                    </HStack>

                    <VStack pt='.5em' pb='1em' spacing='.8em'>

                        <Container bg='#777D8A' borderRadius='1em' fontSize='.82em' py='.5em'>
                            <Center fontSize='1.2em' pb='.2em'>Temperature</Center>

                            <HStack>

                                <VStack alignItems='flex-start' w='100%' spacing='.1em' w='100%'>
                                    <Text>Morning: <ValueText>{data.temp.morn}</ValueText><UnitText>&deg;C</UnitText></Text>
                                    <Text>Day: <ValueText>{data.temp.day}</ValueText><UnitText>&deg;C</UnitText></Text>
                                    <Text>Evening: <ValueText>{data.temp.eve}</ValueText><UnitText>&deg;C</UnitText></Text>
                                    <Text>Night: <ValueText>{data.temp.night}</ValueText><UnitText>&deg;C</UnitText></Text>
                                </VStack>

                                <VStack alignItems='flex-end' w='fit-content' spacing='.1em'>
                                    <Text>Max: <ValueText>{data.temp.max.toFixed(2)}</ValueText><UnitText>&deg;C</UnitText></Text>
                                    <Text>Min: <ValueText>{data.temp.min.toFixed(2)}</ValueText><UnitText>&deg;C</UnitText></Text>
                                </VStack>

                            </HStack>

                        </Container>

                        <Container bg='#777D8A' borderRadius='1em' fontSize='.8em' py='.5em'>
                            <Center fontSize='1.2em' pb='.2em'>Feels like temperature</Center>

                            <VStack spacing='.1em' alignItems='flex-start'>
                                <Text>Morning: <ValueText>{data.feels_like.morn}</ValueText><UnitText>&deg;C</UnitText></Text>
                                <Text>Day: <ValueText>{data.feels_like.day}</ValueText><UnitText>&deg;C</UnitText></Text>
                                <Text>Evening: <ValueText>{data.feels_like.eve}</ValueText><UnitText>&deg;C</UnitText></Text>
                                <Text>Night: <ValueText>{data.feels_like.night}</ValueText><UnitText>&deg;C</UnitText></Text>
                            </VStack>

                        </Container>

                    </VStack>
                    
                    <Text fontSize='.88em'>Atmospheric pressure: <ValueText>{data.pressure}</ValueText><UnitText>hPa</UnitText></Text>
                    <Text fontSize='.88em'>Cloudiness: <ValueText>{data.clouds}</ValueText><UnitText>%</UnitText></Text>
                    <Text fontSize='.88em'>Humidity: <ValueText>{data.humidity}</ValueText><UnitText>%</UnitText></Text>
                    <Text fontSize='.88em'>Wind speed: <ValueText>{(data.wind_speed * 3.6).toFixed(2)}</ValueText><UnitText>km/h</UnitText></Text>
                    <Text fontSize='.88em'>Moon phase: <ValueText>{data.moon_phase * 100}</ValueText><UnitText>%</UnitText></Text>
                    <Text fontSize='.88em'>Probability of precipitation: <ValueText>{data.pop * 100}</ValueText><UnitText>%</UnitText></Text>
                </Container>

                

            </HStack>
        </Container>
    )
    
}

export default WeekdayData