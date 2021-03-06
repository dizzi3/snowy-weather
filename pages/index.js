import { Container, Center } from '@chakra-ui/react'
import CitySearchForm from "../components/CitySearchForm";
import { useState, useRef, useEffect } from 'react';
import WeatherData from '../components/DisplayData/WeatherData';
import FindMatchingCities from '../components/Search/FindMatchingCities';
import ChooseCity from '../components/Choice/ChooseCity';
import SearchForCity from '../components/Search/SearchForCity';
import dynamic from 'next/dynamic';

export default function Home() {

  useEffect(() => {
    initializeCityBasedOnGeolocation();
  }, [])

  function initializeCityBasedOnGeolocation(){
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition((position) => {
        setMapPosition([position.coords.latitude, position.coords.longitude]);
        SearchForCity({city: {lon: position.coords.longitude, lat: position.coords.latitude}, handleData: setCity})
      });
    }
  }

  const RenderedMap = dynamic(() => import('./../components/Map/Map'), {
    ssr: false,
    loading: () => <p>Map is loading..</p>
  } )

  const MapRef = useRef(null)

  const [displayWeatherData, setDisplayWeatherData] = useState(false)
  const [weatherData, setWeatherData] = useState({})

  const [displayErrorMessage, setDisplayErrorMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const [matchingCities, setMatchingCities] = useState(null)

  const [displayMap, setDisplayMap] = useState(true)
  const [mapPosition, setMapPosition] = useState([34.05223, -118.24368])

  function clearStates(){
    setDisplayErrorMessage(false);
    setErrorMessage('');
    setWeatherData({})
    setDisplayWeatherData(false);
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
    setWeatherData(data);
    setDisplayWeatherData(true);
    setMatchingCities(null);
    setMapPosition([data.lat, data.lon]);
  }

  function onError(message){
    setErrorMessage(message);
    setDisplayErrorMessage(true);
  }

  function viewOnMap(position){
    setMapPosition(position);
    setDisplayMap(true);
    MapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start'})
  }

  return (
    <Container maxW='100%' maxH='100%' pb={{sm: '3em', md: '6em'}} pt='2em'>
      <Container maxW='100%' w={{sm: '70%', md: '15%'}}>
        <CitySearchForm onCityFormSubmit={onCityFormSubmit} displayErrorMessage={displayErrorMessage}
                        errorMessage={errorMessage}/>
      </Container>

      <Center textAlign='center' maxW='100%' mt='2em'>
        <ChooseCity cities={matchingCities} setCity={setCity} viewOnMap={viewOnMap}/>
        <WeatherData display={displayWeatherData} data={weatherData}/>
      </Center>
      
      <Center maxW='100%' w='100%' mt='3em'>
          <RenderedMap position={mapPosition} display={displayMap}/>
          <div ref={MapRef} />
      </Center>

    </Container>
  )
}
