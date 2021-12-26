import { Container } from '@chakra-ui/react'
import CitySearchForm from "../components/CitySearchForm";
import SearchForCity from "../components/SearchForCity";
import { useState } from 'react';
import CityDataDisplay from '../components/CityDataDisplay';

export default function Home() {

  const [displayCityData, setDisplayCityData] = useState(false)
  const [cityData, setCityData] = useState({})

  function onCityFormSubmit(data){ 
    SearchForCity({city: data.city, handleData: handleCityData});
  }

  function handleCityData(data){
    setCityData(data);
    setDisplayCityData(true);
  }


  return (
    <Container maxW='80%' p='3em'>
      <Container maxW='20%'>
        <CitySearchForm onCityFormSubmit={onCityFormSubmit}/>
      </Container>
      
      <CityDataDisplay display={displayCityData} data={cityData}/>

    </Container>
  )
}
