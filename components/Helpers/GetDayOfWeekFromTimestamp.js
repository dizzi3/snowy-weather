function getDayOfWeekFromTimestamp(timestamp){

    const date = new Date(timestamp * 1000)
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const dayOfWeek = days[date.getDay()];

    return dayOfWeek;
}

export default getDayOfWeekFromTimestamp