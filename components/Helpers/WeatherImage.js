import { Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

function WeatherImage(props){

    const [img, setImg] = useState(null)

    useEffect(() => {

        const request = 'http://openweathermap.org/img/wn/' + props.name + '.png';

        setImg(request);

    }, [] );

    return(
        <Image src={img} display='inline'/>
    )

}

export default WeatherImage