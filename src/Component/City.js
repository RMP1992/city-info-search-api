import React, {useState} from 'react';
import Axios from 'axios';
import '../Styles/City.css';

const City = () => {
    const [city, setCity] = useState();
    const [airQuality, setAirQuality] = useState();
   
    let rand;
    const randomNum = () => {
        const min = 0;
        const max = 100;
        rand = min + Math.floor(Math.random() * (max - min));
        console.log(rand)
        
    }
    const getCity = () => {
        Axios.get(`https://api.openaq.org/v1/measurements?country=GB`).then((response) => {
            console.log(response)
            setCity(response.data.results[rand].city)
            setAirQuality(response.data.results[rand].value)
        })
    }
    
    return (
        <div className="city-data-wrapper">
            {city ? <div className="data-container" >
                <span className="city">City: {city}</span>
                <span className="air-quality">Air Quality: {airQuality} </span>
            </div> : <span className="click">Click the button</span>}
            
            <button className="btn" onClick={() => {randomNum(); getCity();}}>Get Random City</button>
            
            
        </div>
    );
};

export default City;