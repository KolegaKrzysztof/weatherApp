import React, {useEffect} from "react";
import "./WeatherInfo.css";
const WeatherInfo = ({type, weatherInformation}) => {
    // useEffect(() => {
    //     if (weatherInformation) {
    //         console.log(weatherInformation.temperature_2m);
    //     }
    // }, [weatherInformation]);
    if (!weatherInformation) {
        return <div>Loading...</div>;
    }
    if(type === "current"){
        console.log(weatherInformation)
        return (
            <div className="weatherBody">
                <p>Temperature: <b>{weatherInformation.temperature_2m} ℃</b></p>
                <p>Apparent temperature: <b>{weatherInformation.apparent_temperature} ℃</b></p>
                <p>Surface pressure: <b>{weatherInformation.apparent_temperature} hPa</b></p>
                <p>Wind speed: <b>{weatherInformation.windspeed_10m} m/s</b></p>
                <p>Precipitation: <b>{weatherInformation.precipitation}%</b></p>
            </div>
        );
    } else if(type === "0" || type === "1" || type === "2") {
        return (
            <div className="weatherBody">
                <p>Max temperature: <b>{weatherInformation.temperature_2m_max[type]} ℃</b></p>
                <p>Min temperature: <b>{weatherInformation.temperature_2m_min[type]} ℃</b></p>
                <p>Precipitation sum: <b>{weatherInformation.precipitation_sum[type]} mm</b></p>
                <p>Sunrise: <b>{weatherInformation.sunrise[type].split("T")[1]}</b></p>
                <p>Sunset: <b>{weatherInformation.sunset[type].split("T")[1]}</b></p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Render Error</h1>
            </div>
        )
    }
};

export default WeatherInfo;
