import "./BannerItem.css";
import Card from "./UI/Card";
import DayAfterTomorrowGetter from "./DayAfterTomorrowGetter";
import WeatherInfo from "./WeatherInfo";

const bannerItem = (props) => {
    const clickHandler = (dayValue, typeValue) => {
        props.setDay(dayValue);
        props.setType(typeValue);
    }
    return(
        <Card className="banner">
            <span onClick={() => clickHandler("Today", "0")}>Today </span>
            <span onClick={() => clickHandler("Tomorrow", "1")}>| Tomorrow </span>
            <span onClick={() => clickHandler(DayAfterTomorrowGetter, "2")}>| {DayAfterTomorrowGetter}</span>
        </Card>
    )
}

export default bannerItem;