import './App.css';
import './components/BannerItem';
import BannerItem from "./components/BannerItem";
import WeatherItem from "./components/WeatherItem";
import {useState} from "react";

const App = () => {
    const displayedDay = "Today";
    const [day, setDay] = useState(displayedDay);
    const [type, setType] = useState("current");
  return (
    <div className="App">
        <header className="App-header">
            <div className="city">Kraków</div>
            <BannerItem setDay={setDay} setType={setType}/>
        </header>
        <div className="App-body">
            <WeatherItem day={day} type={type}/>
        </div>
    </div>
  );
}

export default App;
