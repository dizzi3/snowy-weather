import { Container, Text, Flex, HStack, Box, Center} from '@chakra-ui/react'
import WeatherImage from '../Helpers/WeatherImage';
import { ValueText, UnitText } from './StyledText'
import TodayData from './TodayData';
import WeekdayData from './WeekdayData';

function WeatherData(props){

    console.log(props);
    const data = props.data;

    return(

        <Container maxW='100%' display={props.display === true ? 'block' : 'none'}>
            {typeof props.data.current !== 'undefined' ? 
            
                <Flex direction='column' alignItems='center'>
                    
                    <TodayData data={props.data}/>

                    <Flex mt='3em' w='fit-content'>
                        <WeekdayData data={props.data.daily[1]}/>
                        <WeekdayData data={props.data.daily[2]}/>
                        <WeekdayData data={props.data.daily[3]}/>
                    </Flex>

                    <Flex mt='2em' w='fit-content'>
                        <WeekdayData data={props.data.daily[4]}/>
                        <WeekdayData data={props.data.daily[5]}/>
                        <WeekdayData data={props.data.daily[6]}/>
                    </Flex>
                    
                </Flex>
        
            : <></> }
            
        </Container>

    )

}



export default WeatherData