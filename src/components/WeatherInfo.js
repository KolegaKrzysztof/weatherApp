import React, {useEffect} from "react";
import "./WeatherInfo.css";
const WeatherInfo = ({type, hourly, weatherInformation}) => {
    if (type === "current" && !weatherInformation.current ||
        (type === "0" || type === "1" || type === "2") && !weatherInformation.daily ||
        type === "hourly" && !weatherInformation.hourly) {
        return <div>Loading...</div>;
    }
    if(type === "current"){
        console.log(weatherInformation)
        return (
            <div className="weatherBody">
                <p>Temperature: <b>{weatherInformation.current.temperature_2m} ℃</b></p>
                <p>Apparent temperature: <b>{weatherInformation.current.apparent_temperature} ℃</b></p>
                <p>Surface pressure: <b>{weatherInformation.current.apparent_temperature} hPa</b></p>
                <p>Wind speed: <b>{weatherInformation.current.windspeed_10m} m/s</b></p>
                <p>Precipitation: <b>{weatherInformation.current.precipitation}%</b></p>
            </div>
        );
    } else if(!hourly && (type === "0" || type === "1" || type === "2")) {
        return (
            <div className="weatherBody">
                <p>Max temperature: <b>{weatherInformation.daily.temperature_2m_max[type]} ℃</b></p>
                <p>Min temperature: <b>{weatherInformation.daily.temperature_2m_min[type]} ℃</b></p>
                <p>Precipitation sum: <b>{weatherInformation.daily.precipitation_sum[type]} mm</b></p>
                <p>Sunrise: <b>{weatherInformation.daily.sunrise[type].split("T")[1]}</b></p>
                <p>Sunset: <b>{weatherInformation.daily.sunset[type].split("T")[1]}</b></p>
            </div>
        )
    } else if(hourly && (type === "0" || type === "1" || type === "2")) {
        return (
            <tbody>
            {[...Array(24)].map((_, index) => (
                <tr key={index}>
                    <td >{weatherInformation.hourly.time[index].split('T')[1]}</td>
                    <td className="temp">
                        Temperature: <b>{weatherInformation.hourly.temperature_2m[index + (type * 24)]}</b> °C
                    </td>
                    <td className="temp">
                        Precipitation: <b>{weatherInformation.hourly.precipitation_probability[index + (type * 24)]}</b> %
                    </td>
                </tr>
            ))}
            </tbody>
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
