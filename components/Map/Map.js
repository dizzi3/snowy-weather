import { MapContainer, TileLayer } from 'react-leaflet'
import { Container, Center } from '@chakra-ui/react'

function Map(props){

    return (
        <Container m={0} p={0} maxW='100%' w={{sm: '100%', md: '80%'}} display={props.display === true ? 'block' : 'none'}>
            <Center>
            <MapContainer center={props.position} zoom={13} scrollWheelZoom={true} style={{height: 500, width: '100%'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            </Center>
        </Container>
    )

}

export default Map