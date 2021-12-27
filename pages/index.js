import { Container } from '@chakra-ui/react'
import CitySearchForm from "../components/CitySearchForm";
import { useState } from 'react';
import CityDataDisplay from '../components/CityDataDisplay';
import FindMatchingCities from '../components/Search/FindMatchingCities';
import ChooseCity from '../components/Choose/ChooseCity';
import SearchForCity from '../components/Search/SearchForCity';

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

    handleSearchCityResults(FindMatchingCities(data.city));
  }

  function handleSearchCityResults(cities){
    if(cities.length > 0){

      if(cities.length === 1){
        SearchForCity({city: {lon: cities[0].longitude, lat: cities[0].latitude}, handleData: setCity})
      }else 
        setMatchingCities(cities);
    }
    else
      onError('City with this name was not found.');
  }

  function setCity(data){
    setCityData(data);
    setDisplayCityData(true);
    setMatchingCities(null);
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
