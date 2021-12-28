import { Box, Container, HStack, Button, Link } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import SearchForCity from '../Search/SearchForCity'

function City(props){

    const [complementaryData, setComplementaryData] = useState(null)

    useEffect(() => SearchForCity({city: {lat: props.city.latitude, lon: props.city.longitude}, handleData: handleSearchRequest}), []);

    function handleSearchRequest(data){
        setComplementaryData(data)
    }

    function viewOnMap(){
        props.viewOnMap([props.city.latitude, props.city.longitude]);
    }

    return (
        <Box p='1em' m='1em' borderTop='1px solid #f4f4f4' maxW='100%' w='40%' mt='3em' fontFamily='Roboto'>

            <HStack>
                <Container maxW='100%'>
                    <Container>{props.city.name}, {props.city.countryCode}{props.city.stateCode !== '' ? ' [' + props.city.stateCode + ']': '' }</Container>
                    <Container>{complementaryData !== null ? 
                        <Box>{complementaryData.main.temp}&deg;C {complementaryData.weather[0].description}</Box>
                    : <></>}</Container>
                    <Container><Link onClick={viewOnMap}>Geo coords [{ props.city.longitude * 1}, { props.city.latitude * 1 }]</Link></Container>
                </Container>

                <Button colorScheme='blue' size='sm' fontWeight='400' fontSize='1em' px={10} py={6} onClick={viewOnMap}>View on map</Button>
                <Button colorScheme='blue' size='sm' fontWeight='400' fontSize='1em' px={10} py={6} onClick={() => { props.setCity(JSON.parse(JSON.stringify(complementaryData))) }}>Choose</Button>

            </HStack>
        </Box>
    )

}

export default City