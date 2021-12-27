import { Box, Container, HStack, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import SearchForCity from '../Search/SearchForCity'

function City(props){

    const [complementaryData, setComplementaryData] = useState(null)

    useEffect(() => SearchForCity({city: {lat: props.city.latitude, lon: props.city.longitude}, handleData: handleSearchRequest}), []);

    function handleSearchRequest(data){
        setComplementaryData(data)
    }

    return (
        <Box p='1em' m='1em' borderTop='1px solid #f4f4f4' maxW='100%' w='40%' mt='3em'>

            <HStack>
                <Container maxW='100%'>
                    <Container>{props.city.name}, {props.city.countryCode}{props.city.stateCode !== '' ? ' [' + props.city.stateCode + ']': '' }</Container>
                    <Container>{complementaryData !== null ? 
                        <Box>{complementaryData.main.temp}&deg;C {complementaryData.weather[0].description}</Box>
                    : <></>}</Container>
                    <Container>Geo coords [{ props.city.longitude * 1}, { props.city.latitude * 1 }]</Container>
                </Container>

                <Button colorScheme='blue' size='sm' p={5} onClick={() => { props.viewOnMap([props.city.latitude, props.city.longitude]) }}>View on map</Button>
                <Button colorScheme='blue' size='sm' p={5} onClick={() => { props.setCity(complementaryData) }}>Choose</Button>

            </HStack>
        </Box>
    )

}

export default City