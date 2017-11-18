export function GetDateDiff(startTime, endTime) {
    var sTime = new Date(startTime);      //开始时间
    var eTime = new Date(endTime);        //结束时间
    var divNum = 1000 * 3600 * 24;
    var interval = parseInt((eTime.getTime() - sTime.getTime()) / parseInt(divNum));
    return parseInt(interval/7) + 1;
}
export function CalDate(startTime, week, weekday) {
    var sTime = new Date(startTime);
    var interval = (week - 1) * 7 + weekday;
    sTime.setDate(sTime.getDate() + interval)
    return {
        'year': sTime.getFullYear(),
        'month': sTime.getMonth() + 1,
        'day': sTime.getDate()
    }
}



