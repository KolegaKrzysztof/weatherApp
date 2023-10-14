import "./WeatherItem.css";
import Card from "./UI/Card";
import {useEffect, useState} from "react";
import WeatherInfo from "./WeatherInfo";




const WeatherItem = (props) => {
    const [weatherInfo, setWeatherInfo] = useState({});
    async function getWeatherInfo() {
        try {
            const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=50.0614&longitude=19.9366&current=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,surface_pressure,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=Europe%2FBerlin&forecast_days=3");
            if (!response.ok) {
                throw new Error('fetch failed!');
            }
            const weather = await response.json();
            setWeatherInfo(weather);
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo();
        console.log(weatherInfo);
    }, []);

    return(
        <Card className="weatherItem">
            <div><b>{props.day}:</b></div>
            <WeatherInfo type="0" weatherInformation={weatherInfo.daily} />
        </Card>
    )
}

export default WeatherItem;