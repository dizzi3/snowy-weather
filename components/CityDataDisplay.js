import { Container, Text } from '@chakra-ui/react'

function CityDataDisplay(props){

    return(

        <Container maxW='100%' display={props.display === true ? 'block' : 'none'}>
            {typeof props.data.main !== 'undefined' ? 
            
                <Text>Temperature: {props.data.main.temp}&deg;C</Text>
        
        
            : <></> }
            
        </Container>

    )

}

export default CityDataDisplay