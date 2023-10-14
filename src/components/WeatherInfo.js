import React from "react";
import "./WeatherInfo.css";
const WeatherInfo = ({type, weatherInformation}) => {
    if(type === "current"){
        console.log(weatherInformation)
        return (
            <div className="weatherBody">
                <p>Temperature: <b>{weatherInformation.temperature_2m} ℃</b></p>
                <p>Apparent temperature: <b>{weatherInformation.apparent_temperature}</b></p>
                <p>Surface pressure: <b>{weatherInformation.apparent_temperature} hPa</b></p>
                <p>Wind speed: <b>{weatherInformation.windspeed_10m} m/s</b></p>
                <p>Precipitation: <b>{weatherInformation.precipitation}%</b></p>
            </div>
        );
    } else if(type === "0") {
        return (
            <div className="weatherBody">
                <p>Max temperature: <b>{weatherInformation.daily.temperature_2m_max['0']}</b></p>
                {/*<p>Min temperature: <b>{weatherInfo.temperature_2m_min[0]}</b></p>*/}
                {/*<p>Precipitation sum: <b>{weatherInfo.precipitation_sum[0]} mm</b></p>*/}
                {/*<p>Sunrise: <b>{weatherInfo.sunrise[0]}</b></p>*/}
                {/*<p>Sunset: <b>{weatherInfo.sunset[0]}</b></p>*/}
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
