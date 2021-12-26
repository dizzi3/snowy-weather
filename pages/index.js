import { Container } from '@chakra-ui/react'
import CitySearchForm from "../components/CitySearchForm";
import SearchForCity from "../components/SearchForCity";
import { useState } from 'react';
import CityDataDisplay from '../components/CityDataDisplay';
import FindMatchingCities from '../components/helpers/FindMatchingCities';
import ChooseCity from '../components/ChooseCity';

export default function Home() {

  const [displayCityData, setDisplayCityData] = useState(false)
  const [cityData, setCityData] = useState({})

  const [displayErrorMessage, setDisplayErrorMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const [matchingCities, setMatchingCities] = useState(null)

  function clearStates(){
    setDisplayErrorMessage(false);
    setErrorMessage('');
    setCityData({})
    setDisplayCityData(false);
  }

  function onCityFormSubmit(data){ 
    clearStates();

    setMatchingCities(FindMatchingCities(data.city))
  }

  function setCity(data){
    SearchForCity({city: data, handleData: handleCityData, onError: onError});
  }

  function handleCityData(data){
    setCityData(data);
    setDisplayCityData(true);
  }

  function onError(message){
    setErrorMessage(message);
    setDisplayErrorMessage(true);
  }

  return (
    <Container maxW='80%' p='3em'>
      <Container maxW='35%'>
        <CitySearchForm onCityFormSubmit={onCityFormSubmit} displayErrorMessage={displayErrorMessage}
                        errorMessage={errorMessage}/>
      </Container>

      <ChooseCity cities={matchingCities} setCity={setCity}/>
      
      <CityDataDisplay display={displayCityData} data={cityData}/>

    </Container>
  )
}
