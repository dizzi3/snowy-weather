import { Box, Container, HStack, Button, Link, Flex, Spacer } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import SearchForCity from '../Search/SearchForCity'

function City(props){

    const [complementaryData, setComplementaryData] = useState(null)
    
    useEffect(() => SearchForCity({city: {lat: props.city.latitude, lon: props.city.longitude}, handleData: handleSearchRequest}), []);

    function handleSearchRequest(data){
        setComplementaryData(data);
    }

    function viewOnMap(){
        props.viewOnMap([props.city.latitude, props.city.longitude]);
    }

    return (
        <Box borderTop='1px solid #f4f4f4' maxW='100%' w={{sm: '100%', md: '40%'}} mt='3em' fontFamily='Roboto' pt={3} pb={3}>
            
            <HStack>
                <Container maxW='100%' w='100%'>
                    <Container>{props.city.name}, {props.city.countryCode}{props.city.stateCode !== '' ? ' [' + props.city.stateCode + ']': '' }</Container>
                    <Container>{complementaryData !== null ? 
                        <Box>{complementaryData.current.temp}&deg;C</Box>
                    : <></>}</Container>

                    <Container>{complementaryData !== null ? 
                        <Box>{complementaryData.current.weather[0].description}</Box>
                    : <></>}</Container>

                    <Container><Link onClick={viewOnMap}>Geo coords [{ props.city.longitude * 1}, { props.city.latitude * 1 }]</Link></Container>
                </Container>

                <Flex direction={{sm: 'column', md: 'row'}}>
                    <Button colorScheme='blue' mr={{sm: 0, md: '1.3em'}} mb={{sm: '.8em', md: 0}} size={{sm: 'xs', md: 'sm'}} fontWeight='400' fontSize={{sm: '1em', md: '1em'}} px={{sm: 3, md: 5}} py={{sm: 3, md: 4}} onClick={viewOnMap}>View on map</Button>
                    <Spacer/>
                    <Button colorScheme='blue' size={{sm: 'xs', md: 'sm'}} fontWeight='400' fontSize={{sm: '1em', md: '1em'}} px={{sm: 3, md: 5}} py={{sm: 3, md: 4}} onClick={() => { props.setCity(complementaryData) }}>Choose</Button>
                </Flex>

            </HStack>
        </Box>
    )

}

export default City