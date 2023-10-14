const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getDayAfterTomorrow = () => {
    let dayAfterTomorrowDay = new Date().getDay() + 2;

    if (dayAfterTomorrowDay === 7) {
        dayAfterTomorrowDay = 0;
    } else if(dayAfterTomorrowDay === 8){
        dayAfterTomorrowDay = 1;
    }
    return days[dayAfterTomorrowDay];
}

export default getDayAfterTomorrow()
