import {
    FormControl,
    FormLabel,
    Input,
    Button,
    FormErrorMessage
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

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormControl id='city' isInvalid={errors.city}>
                <FormLabel>City</FormLabel>
                <Input {...register('city', {
                    required: 'City is required'
                })}/>

                <FormErrorMessage>
                    {errors.city && errors.city.message}
                </FormErrorMessage>

            </FormControl>

            <Button type='submit' mt='1em' size='sm'>Submit</Button>

            <FormControl id='errors' isInvalid={props.displayErrorMessage}>
                <FormErrorMessage>
                    {props.errorMessage}
                </FormErrorMessage>
            </FormControl>
        </form>


    )

}

export default CitySearchForm