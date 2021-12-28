import React from "react";
import City from "./City";
import { Container, VStack } from '@chakra-ui/react'

function ChooseCity(props){

    if(typeof props.cities === 'undefined' || props.cities === null)
        return <></>;

    return (

        <Container maxW='100%'>
            <VStack>
                {props.cities.map((city) => (
                    React.createElement(City, {key: props.cities.indexOf(city), city: city, setCity: props.setCity, viewOnMap: props.viewOnMap})
                ))}
            </VStack>
        </Container>

    )

}

export default ChooseCity