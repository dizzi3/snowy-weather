import React from "react";
import City from "./City";

function ChooseCity(props){

    if(typeof props.cities === 'undefined' || props.cities === null)
        return <></>;

    return (

        <>
            {props.cities.map((city) => (
                React.createElement(City, {key: city.id, city: city, setCity: props.setCity})
            ))}
            
        </>

    )

}

export default ChooseCity