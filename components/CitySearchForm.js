import {
    FormControl,
    Input,
    Button,
    FormErrorMessage,
    Container
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const CitySearchForm = (props) => {

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()

    const onSubmit = async data => {
        props.onCityFormSubmit(data)
    }

    return(

        <Container maxW='100%' w='100%' textAlign='center' p={0} m={0}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormControl id='city' isInvalid={errors.city}>
                    <Input {...register('city', {
                        required: 'City is required'
                    })} placeholder='City name' fontFamily='Roboto' fontSize='1.1em'/>

                    <FormErrorMessage>
                        {errors.city && errors.city.message}
                    </FormErrorMessage>

                </FormControl>

                <Button type='submit' mt='1em' size='sm' colorScheme='blue' fontFamily='Roboto' fontWeight='400' letterSpacing='.05em'>Search</Button>

                <FormControl id='errors' isInvalid={props.displayErrorMessage}>
                    <FormErrorMessage>
                        {props.errorMessage}
                    </FormErrorMessage>
                </FormControl>
            </form>
        </Container>


    )

}

export default CitySearchForm