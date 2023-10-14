import "./BannerItem.css";
import Card from "./UI/Card";
import DayAfterTomorrowGetter from "./DayAfterTomorrowGetter";

const bannerItem = (props) => {
    const clickHandler = (value) => {
        props.setDay(value);
    }
    return(
        <Card className="banner">
            <span onClick={() => clickHandler("Today")}>Today </span>
            <span onClick={() => clickHandler("Tomorrow")}>| Tomorrow </span>
            <span onClick={() => clickHandler(DayAfterTomorrowGetter)}>| {DayAfterTomorrowGetter}</span>
        </Card>
    )
}

export default bannerItem;