import './App.css';
import './components/BannerItem';
import BannerItem from "./components/BannerItem";
import WeatherItem from "./components/WeatherItem";
import {useState} from "react";

const App = () => {
    const displayedDay = "Today";
    const [day, setDay] = useState(displayedDay);
  return (
    <div className="App">
        <header className="App-header">
            <div className="city">Kraków</div>
            <BannerItem setDay={setDay}/>
        </header>
        <div className="App-body">
            <WeatherItem day={day}/>
        </div>
    </div>
  );
}

export default App;
