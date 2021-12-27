import { Box, Container, HStack, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import SearchForCity from '../Search/SearchForCity'

function City(props){

    const [complementaryData, setComplementaryData] = useState(null)

    useEffect(() => SearchForCity({city: {id: props.city.id}, handleData: handleSearchRequest}), []);

    function handleSearchRequest(data){
        setComplementaryData(data)
    }

    return (
        <Box p='1em' m='1em' borderTop='1px solid #f4f4f4'>

            <HStack>
                <Container>
                    <Container>{props.city.name}, {props.city.country}{props.city.state !== '' ? ' [' + props.city.state + ']': '' }</Container>
                    <Container>{complementaryData !== null ? 
                        <Box>{complementaryData.main.temp}&deg;C {complementaryData.weather[0].description}</Box>
                    : <></>}</Container>
                    <Container>Geo coords [{ props.city.coord.lon }, { props.city.coord.lat }]</Container>
                </Container>

                <Button colorScheme='blue' size='sm' onClick={() => { props.setCity(complementaryData) }}>Choose</Button>

            </HStack>
        </Box>
    )

}

export default City