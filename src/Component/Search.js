import React, {useState} from 'react';
import Axios from 'axios';
import Button from '../UI/Button';
import SearchedCity from './SearchedCity';
import '../Styles/Search.css';

const Search = () => {
    const [searchedCity, setSearchedCity] = useState('');
    const [city, setCity] = useState();
    const [airQuality, setAirQuality] = useState();
    const [dateAndTime, setDateAndTime] = useState();
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [country, setCountry] = useState();

    
    const searchCityData = async () => {
        try{
            const url = `https://api.openaq.org/v1/measurements?country=GB&city=${searchedCity}`;
            const res = await Axios.get(url);
            
            console.log(res);
            setCity(res.data.results[0].city);
            setAirQuality(res.data.results[0].value);
            setDateAndTime(res.data.results[0].date.local);
            setLatitude(res.data.results[0].coordinates.latitude);
            setLongitude(res.data.results[0].coordinates.longitude);
            setCountry(res.data.results[0].country)
        } catch (error) {
            alert('Please learn to spell');
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        searchCityData();
        
    }
    const handleChange = (e) => {
        let userInput = e.target.value.toLowerCase();
        userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
        console.log(userInput)
        setSearchedCity(userInput)
        userInput = '';
        
        
        
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form" >
                <label className="input-label">
                    <input type="text" placeholder="Search for a UK city" onChange={handleChange}  />
                    <Button handleSubmit={handleSubmit}></Button>
                </label>
                
            </form>
            {city ? <SearchedCity city={city} airQuality={airQuality} dateAndTime={dateAndTime} latitude={latitude} longitude={longitude} country={country}></SearchedCity> : <span className="search-prompt">Search a UK based city.</span>}
            
        </div>
    );
};

export default Search;