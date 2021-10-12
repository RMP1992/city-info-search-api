import React from 'react';
import '../Styles/SearchedCity.css'

const SearchedCity = (props) => {
    return (
        <div className="city-info-container">
            <div className="city-info-wrapper">
                <span>City: {props.city} </span>
                <span>Air quality: {props.airQuality} </span>
                <span>Local Date and Time: {props.dateAndTime} </span>
                <span>Latitude: {props.latitude} </span>
                <span>Longitude: {props.longitude} </span>
                <span>Country: {props.country} </span>
            </div>
        </div>
    );
};

export default SearchedCity;