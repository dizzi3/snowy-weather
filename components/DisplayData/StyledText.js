import { Text } from '@chakra-ui/react'

const ValueText = (props) => {
    return <Text fontFamily='Ubuntu' fontSize='.95em' fontWeight='500' display='inline' color='#00C6BB'>{props.children}</Text>
}

const UnitText = (props) => {
    return <Text fontFamily='Ubuntu' fontSize='.95em' fontWeight='500' display='inline' color='#87B1FF'>{props.children}</Text>
}

export { ValueText, UnitText }